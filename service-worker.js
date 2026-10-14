self.addEventListener('install', (e) => {
  console.log('[Kira App] Instalada con éxito');
});

self.addEventListener('fetch', (e) => {
  e.respondWith(fetch(e.request));
});
