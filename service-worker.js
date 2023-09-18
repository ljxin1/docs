/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "8e9b1bf8ca3905db26bb4a4c7768f921"
  },
  {
    "url": "assets/css/0.styles.1332e934.css",
    "revision": "5e8c5216b245448d9ec7bd791f0f931f"
  },
  {
    "url": "assets/img/hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "assets/img/icons/icon-128x128.png",
    "revision": "591bf5ad057a5c8a0c53a1c6ff4e9935"
  },
  {
    "url": "assets/img/icons/icon-144x144.png",
    "revision": "7ef9235bec2ec05243e0cd3392a6f1e1"
  },
  {
    "url": "assets/img/icons/icon-152x152.png",
    "revision": "62bd77b21de3134cea1b45ecfa1d9614"
  },
  {
    "url": "assets/img/icons/icon-192x192.png",
    "revision": "671d2fdcb202abd0019d281e1e4f45a6"
  },
  {
    "url": "assets/img/icons/icon-384x384.png",
    "revision": "db7921041fe20a86b44b5d36d276f58a"
  },
  {
    "url": "assets/img/icons/icon-512x512.png",
    "revision": "5f0833e5b5635f7f846899ad1a78e0bb"
  },
  {
    "url": "assets/img/icons/icon-72x72.png",
    "revision": "ceb4644130ed2aa166e41e0807ebeaa3"
  },
  {
    "url": "assets/img/icons/icon-96x96.png",
    "revision": "cfdb5f705e434950d14a83558032fcdd"
  },
  {
    "url": "assets/img/icons/safari-pinned-tab.svg",
    "revision": "e0f5c64032051f2e95d807e244bb64f7"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.5479b213.js",
    "revision": "981f5ea22c3775d5ed5f9515afaee2bb"
  },
  {
    "url": "assets/js/10.8b540692.js",
    "revision": "2a9cd717aba9d28e2a42d17601dd7e4f"
  },
  {
    "url": "assets/js/11.0ed310e9.js",
    "revision": "50293d0ee5b6173cc353241b7a841577"
  },
  {
    "url": "assets/js/12.9c113e20.js",
    "revision": "766bdfb58881601ba1170cc484fe1518"
  },
  {
    "url": "assets/js/13.d369c8ce.js",
    "revision": "e22d70d4791800c409c1750d39751f8f"
  },
  {
    "url": "assets/js/14.7ad13bec.js",
    "revision": "e8cad1f6f2498d78b1b8917092feab63"
  },
  {
    "url": "assets/js/15.23e5a4b1.js",
    "revision": "5edc11b6818d54525ef58a5a3dd24c53"
  },
  {
    "url": "assets/js/16.aff869ed.js",
    "revision": "e6b369ab06e6e3ff368281c03e68a7ab"
  },
  {
    "url": "assets/js/17.ee31f493.js",
    "revision": "ae48fd2360fb1cdfc4905b7fc69bb92f"
  },
  {
    "url": "assets/js/18.6835bd74.js",
    "revision": "1fb9b90c39cabdef672a39ed18ce4963"
  },
  {
    "url": "assets/js/19.87784c3d.js",
    "revision": "4680cb47a22e0e8c3b2099e5f3cc4f59"
  },
  {
    "url": "assets/js/2.d6bda53c.js",
    "revision": "a93c3970899d6e4eddc1c2cd088b681d"
  },
  {
    "url": "assets/js/20.1738fba5.js",
    "revision": "fd5300cf1d7e09306e369e80e934e40b"
  },
  {
    "url": "assets/js/21.4d692b32.js",
    "revision": "5ef6d3c4e2e5a7c91d029665edeb38f2"
  },
  {
    "url": "assets/js/22.1731b443.js",
    "revision": "2d075e9cc0e2871ed70ace0e1e9409ad"
  },
  {
    "url": "assets/js/23.b0808dc8.js",
    "revision": "e810ed4fe733b2bc7ccd826d519f5ebb"
  },
  {
    "url": "assets/js/24.052870fb.js",
    "revision": "7c737e8b578d774dc44c63e2b2206ec4"
  },
  {
    "url": "assets/js/3.f5aa00b7.js",
    "revision": "1021c2e521a68bf61947a3370480995c"
  },
  {
    "url": "assets/js/4.e4be212d.js",
    "revision": "5bc970ee643f598fd3efabebcb1fb556"
  },
  {
    "url": "assets/js/5.65c44daf.js",
    "revision": "52e10948c2eb8e28d542adf98a5aeb6d"
  },
  {
    "url": "assets/js/6.734ecb4e.js",
    "revision": "77d35d09e7a6455e783bce48fa464e7d"
  },
  {
    "url": "assets/js/7.d77b33d9.js",
    "revision": "5c62e1b02479d947b90e4645d980ad8b"
  },
  {
    "url": "assets/js/app.49806e2b.js",
    "revision": "006e6df948ed5118b1fe036039ee9922"
  },
  {
    "url": "assets/js/vendors~docsearch.03d43e08.js",
    "revision": "d5220e24c285820e35c659e1cd654c22"
  },
  {
    "url": "index.html",
    "revision": "a5dcd24ba690c5ff6e1880c295115c4c"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
