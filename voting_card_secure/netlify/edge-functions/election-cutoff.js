// 2026-11-27 23:30 Asia/Taipei = 2026-11-27 15:30 UTC.
const CUTOFF = Date.parse('2026-11-01T23:30:00+08:00');
const CLOSED = `<!doctype html><html lang="zh-Hant"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><title>本活動已結束</title><style>body{margin:0;min-height:100vh;display:grid;place-items:center;background:#f3f6fa;color:#173b69;font-family:system-ui,'Noto Sans TC',sans-serif}.card{background:white;border-radius:18px;padding:36px;max-width:530px;margin:20px;box-shadow:0 2px 14px #173b6915}h1{font-size:28px}p{line-height:1.8}</style></head><body><main class="card"><h1>本活動已結束</h1><p>感謝您關注「我的投票承諾與計畫書」。</p><p>本網站的活動功能已停止提供。</p><p>選舉資訊請以中央選舉委員會公告為準。</p></main></body></html>`;
export default async (request, context) => {
  if (Date.now() >= CUTOFF) {
    return new Response(CLOSED, {status: 200, headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store, max-age=0, must-revalidate',
      'x-robots-tag': 'noindex'
    }});
  }
  const response = await context.next();
  const headers = new Headers(response.headers);
  headers.set('cache-control', 'no-store, max-age=0, must-revalidate');
  return new Response(response.body, {status: response.status, statusText: response.statusText, headers});
};
