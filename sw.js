self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open('wardPWA-v15').then(c => c.addAll([
      './','./index.html','./sw.js','./manifest.webmanifest',
      './icons/app-192.png','./icons/app-512.png','./icons/maskable-512.png'
    ]))
  );
});
self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keep = 'wardPWA-v15';
    const keys = await caches.keys();
    await Promise.all(keys.filter(k=>k!==keep).map(k=>caches.delete(k)));
    await self.clients.claim();
  })());
});
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request).then(resp => {
      const copy = resp.clone();
      caches.open('wardPWA-v15').then(c => c.put(e.request, copy)).catch(()=>{});
      return resp;
    }).catch(()=>r))
  );
});