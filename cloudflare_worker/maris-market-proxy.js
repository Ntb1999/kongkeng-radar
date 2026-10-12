export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': '*',
          'Access-Control-Max-Age': '86400'
        }
      });
    }

    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'public, max-age=2'
    };

    function parseBars(json) {
      if (!json || !json.c || json.c.length === 0) return null;
      const count = json.c.length;
      const dateMap = new Map();
      for (let i = 0; i < count; i++) {
        const ts = json.t[i] + 7 * 3600; // Convert to Vietnam UTC+7
        const d = new Date(ts * 1000).toISOString().slice(0, 10);
        if (!dateMap.has(d)) dateMap.set(d, []);
        dateMap.get(d).push(i);
      }
      const dates = Array.from(dateMap.keys()).sort();
      if (dates.length === 0) return null;

      const todayDate = dates[dates.length - 1];
      const todayIndices = dateMap.get(todayDate);

      let refPrice = null;
      if (dates.length >= 2) {
        const prevDate = dates[dates.length - 2];
        const prevIndices = dateMap.get(prevDate);
        refPrice = json.c[prevIndices[prevIndices.length - 1]];
      } else {
        refPrice = json.o[todayIndices[0]];
      }

      const currentPrice = json.c[todayIndices[todayIndices.length - 1]];
      const openPrice = json.o[todayIndices[0]];

      let highPrice = -Infinity;
      let lowPrice = Infinity;
      let vol = 0;
      for (const idx of todayIndices) {
        if (json.h[idx] > highPrice) highPrice = json.h[idx];
        if (json.l[idx] < lowPrice) lowPrice = json.l[idx];
        vol += (json.v[idx] || 0);
      }

      const chg = +(currentPrice - refPrice).toFixed(2);
      const pct = +((chg / refPrice) * 100).toFixed(2);

      return {
        ref_price: refPrice,
        price: currentPrice,
        open: openPrice,
        high: highPrice,
        low: lowPrice,
        close: currentPrice,
        change: chg,
        change_percent: pct,
        volume: vol,
        date: todayDate
      };
    }

    if (url.pathname === '/api/market' || url.pathname === '/') {
      try {
        const now = Math.floor(Date.now() / 1000);
        const from = now - 4 * 86400;
        const symbols = ['VNINDEX', 'VN30', 'HNX', 'UPCOM'];
        const fetchPromises = symbols.map(async (sym) => {
          try {
            const apiRes = await fetch(`https://services.entrade.com.vn/chart-api/v2/ohlcs/index?from=${from}&to=${now}&symbol=${sym}&resolution=1`, {
              headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
            });
            if (!apiRes.ok) return { symbol: sym, error: apiRes.status };
            const json = await apiRes.json();
            const parsed = parseBars(json);
            if (!parsed) return { symbol: sym, error: 'empty' };

            return {
              symbol: sym,
              name: sym === 'VNINDEX' ? 'VN-INDEX' : sym === 'HNX' ? 'HNX-INDEX' : sym === 'UPCOM' ? 'UPCOM-INDEX' : 'VN30',
              exchange: sym === 'HNX' ? 'HNX' : sym === 'UPCOM' ? 'UPCOM' : 'HOSE',
              score: parsed.price,
              ref_price: parsed.ref_price,
              open: parsed.open,
              high: parsed.high,
              low: parsed.low,
              change: parsed.change,
              change_percent: parsed.change_percent,
              volume: parsed.volume,
              date: parsed.date,
              updated_at: new Date().toISOString()
            };
          } catch(e) { return { symbol: sym, error: e.message }; }
        });
        const results = await Promise.all(fetchPromises);
        return new Response(JSON.stringify({ status: 'SUCCESS', source: 'DNSE Entrade Realtime Feed (1m resolution)', timestamp: new Date().toISOString(), indices: results }), { headers: corsHeaders });
      } catch(err) {
        return new Response(JSON.stringify({ status: 'ERROR', message: err.message }), { status: 500, headers: corsHeaders });
      }
    }

    if (url.pathname === '/api/stock') {
      const sym = (url.searchParams.get('symbol') || 'BID').toUpperCase();
      try {
        const now = Math.floor(Date.now() / 1000);
        const from = now - 4 * 86400;
        const apiRes = await fetch(`https://services.entrade.com.vn/chart-api/v2/ohlcs/stock?from=${from}&to=${now}&symbol=${sym}&resolution=1`, {
          headers: { 'User-Agent': 'Mozilla/5.0', 'Accept': 'application/json' }
        });
        const json = await apiRes.json();
        const parsed = parseBars(json);
        if (!parsed) return new Response(JSON.stringify({ status: 'NOT_FOUND', symbol: sym }), { headers: corsHeaders });

        return new Response(JSON.stringify({
          status: 'SUCCESS',
          symbol: sym,
          price: Math.round(parsed.price * 1000),
          ref_price: Math.round(parsed.ref_price * 1000),
          open: Math.round(parsed.open * 1000),
          high: Math.round(parsed.high * 1000),
          low: Math.round(parsed.low * 1000),
          close: Math.round(parsed.price * 1000),
          change: Math.round(parsed.change * 1000),
          change_percent: parsed.change_percent,
          volume: parsed.volume,
          date: parsed.date,
          timestamp: new Date().toISOString()
        }), { headers: corsHeaders });
      } catch(err) {
        return new Response(JSON.stringify({ status: 'ERROR', message: err.message }), { status: 500, headers: corsHeaders });
      }
    }

    if (url.pathname === '/health') {
      return new Response(JSON.stringify({ status: 'OK', worker: 'maris-market-proxy', version: '2.0.0-intraday-1m', timestamp: new Date().toISOString() }), { headers: corsHeaders });
    }

    return new Response(JSON.stringify({ error: 'Route not found' }), { status: 404, headers: corsHeaders });
  }
};
