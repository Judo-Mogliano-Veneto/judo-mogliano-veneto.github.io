/* Service worker: la guida funziona anche senza rete.
   Con rete scarica sempre l'ultima versione dei file e la tiene in memoria per l'uso offline. */
const CACHE = "guida-judo-v21";
const FILES = ["./", "index.html", "style.css", "glossario.js", "render.js", "figures.js", "exercises.js", "content.js", "teoria.js", "tecniche.js", "disegni.js", "pianta.js", "laterale.js", "video.js", "cinture.js", "lezione.js", "dojo.js", "app.js", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/icon-maskable-512.png", "icons/logo.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES.map(f => new Request(f, { cache: "reload" })))).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(
    // "no-cache": chiede sempre al server se il file è cambiato, invece di usare la copia del browser (che su GitHub Pages dura 10 minuti)
    fetch(e.request, { cache: "no-cache" }).then(res => {
      const copy = res.clone();
      caches.open(CACHE).then(c => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }).then(r => r || caches.match("index.html")))
  );
});
