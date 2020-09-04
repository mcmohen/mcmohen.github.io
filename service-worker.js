/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","2887c86c06197d5d05f3a0724c6f799a"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","1249099964424ac02cf2304e237b0555"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","ec5bd4026a5eb98a5690bd1514b021a5"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","b1c79561424a8c3a11fd16101ce6e9b5"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","56acb9d4ac99ff46c4e041963c191e38"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","e93503ad19bc17bc9a9a8065cd1c8bea"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","1c3e2d9eea73c455bff7adb0ca91ee1a"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","ef7e916635d0c10e2498c8d98819924d"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","375f5ebee26199d0bb78564da9118481"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","5d2afd960ad94a9069f4a31b75155136"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","fbac9a5fb53efa0698b695314d02d153"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","99446860f2f475c2d78f03aa89ea425c"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","c8353672bd3d40fbc03c2be4a2bbb8d0"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","4aa786c6dd0e70a4d1496deb5061d604"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","f74d550a2b1697cd55cb5aed36016730"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","4eb821e8fd592c38a76bb509f09469c2"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","b1ad6b2993781a02488e30d181ac25d9"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","f337eeea6641a2cc0da15fb630f74e16"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","27585139a250660e0cab9eec100f3a9c"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","fc707be62b3e8a50987a53993dcab791"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","5765167b44ff53daef5994f24650e954"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","6804dccfd96c909bc0df4644fe917d9e"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","4493966e1a6e5a10f144fc5e3bb3cfc2"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","9f5ac005f786d514974546000b6ac478"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","bb93744b083826b5320d3234527ecced"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","a967ca05247ad59ae417f21929f54d6f"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","d82b79c543f29822e59f6940b308120f"],["D:/+blog博客/hexo/public/404.html","7db197f8409721290f5220ce5099c14c"],["D:/+blog博客/hexo/public/COVID-19/index.html","dd3ac077f0e89fae9315882084bc348b"],["D:/+blog博客/hexo/public/about/index.html","6ea263b4b42376c4556489bf208a8099"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","0e2f5e2b4fd98e053830b73ce9b68c1c"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","14ef198a4921f5c9f3ea871e5188a681"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","63c1987417ef12c82cf286fb0fde202e"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","04d5395fe718a42b9bb5017b63ef7c92"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","e5d6e797d5797bd6d10622d22aac3ff8"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","87b87039d92df4bfe6a556efb8b39860"],["D:/+blog博客/hexo/public/archives/2019/index.html","23f93abc68000720c6a450bcb9cfdaa2"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","6639a4269ccad31a230c07e07b5e8bd0"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","5d2d39e85f016b557addc854d8381ede"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","1bb4cf6e783d4ab9176014460f8bf1bc"],["D:/+blog博客/hexo/public/archives/2020/index.html","4b6144f1fa268310dcc13ab951e7251d"],["D:/+blog博客/hexo/public/archives/index.html","3e5b96800bce71cd155fcce9f3c79e11"],["D:/+blog博客/hexo/public/archives/page/2/index.html","3e5b96800bce71cd155fcce9f3c79e11"],["D:/+blog博客/hexo/public/archives/page/3/index.html","ea7219ac7c835f9c7f39281a23b6026f"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","afb6271fcafcb55620d43597dd19a3ed"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","ad4d4d86148be87e5224139ba57801b2"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","cd9e766b72fdc3d47fb97d643169c046"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","8ebacdb7f1d37d512fe58e38993a6843"],["D:/+blog博客/hexo/public/categories/教程/index.html","d21c3a1a518de468f7b1de22e4d0c038"],["D:/+blog博客/hexo/public/categories/文学/index.html","2af664462b7df43522ced218ad78c25f"],["D:/+blog博客/hexo/public/categories/视频/index.html","4d8d1fec2f4e491d5f6789cb1cfe3e80"],["D:/+blog博客/hexo/public/categories/资源/index.html","7cfe5d4bf2712284e64d6602c400b159"],["D:/+blog博客/hexo/public/categories/资讯/index.html","c6a5ae3fedb29a0311573dcc335ef56c"],["D:/+blog博客/hexo/public/categories/题解/index.html","f685ce26e6f67f5ecb22befee18d027f"],["D:/+blog博客/hexo/public/comments/index(副本).html","876060dba0075c9d780f6e4405d25d84"],["D:/+blog博客/hexo/public/comments/index.html","56c68ecca191b3e8cc7eafc437ccec3f"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/css/style.css","263dfa8113ec51c861784571ae0ef6d7"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","5fd9a4c7bdf60474382875fc3f77b07f"],["D:/+blog博客/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/+blog博客/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/+blog博客/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/+blog博客/hexo/public/index.html","31a672dfed8bfa7c247b4451be5143c6"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","9fababca079a1306c7959ecbf614e5f1"],["D:/+blog博客/hexo/public/mylist/index.html","7b4f6cd564cb92f4653389dd8c5cbd52"],["D:/+blog博客/hexo/public/page/2/index.html","c56489ad41b7114e934dc698c97420fc"],["D:/+blog博客/hexo/public/page/3/index.html","10b2752aacfb51943c2f3a977b0b2b3e"],["D:/+blog博客/hexo/public/share/all/C++.html","7bd3a232234f93370453c39aaf4f1289"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","f821ced3205483f834ddf45fe13f72b3"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","5b9c824b5384a21aa1652abfcfa73c98"],["D:/+blog博客/hexo/public/share/all/工具.html","0d10093a54355bb0e886ef1339f40408"],["D:/+blog博客/hexo/public/share/all/游戏.html","d47af720331c0414c0d92a798f0477ab"],["D:/+blog博客/hexo/public/share/index.html","fa1a8e7696fb165cad629d8d71854307"],["D:/+blog博客/hexo/public/share/备用.html","9f76230c26950de8aba97cb5b475e0ea"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","5373ba77299e4217ec3e018466785055"],["D:/+blog博客/hexo/public/tags/CDN/index.html","bc859b0c5e3fab6bbeeca3640d4a045b"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","1d205e8da6e66dbbd636b64a3d9a99a6"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","25b459eb071621117d743b0473c795a8"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","fec347eb41ac17b033db1eb43801ce6b"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","a5113d7eecb0f394844cfe6c7f6c9fdf"],["D:/+blog博客/hexo/public/tags/index.html","f2959adf63e0a7793ec458dd354fe8ba"],["D:/+blog博客/hexo/public/tags/test/index.html","5e1654d545e0d19b468f989325612bcf"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","07ec699c7f9d7b1a0d49e3f903c11ea7"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","e523d8d75cfe9ee250c2b94a6f0a66ec"],["D:/+blog博客/hexo/public/tags/加密/index.html","5f214ddd426c09cb465f004d1121f689"],["D:/+blog博客/hexo/public/tags/加速器/index.html","41f0e655b52f74f2d53cfb8e4fcb88d6"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","365a7cf4fcb2d94c2ee2e0d8d3f90ca4"],["D:/+blog博客/hexo/public/tags/教程/index.html","438daf655f0e25f5c950793e674f7c43"],["D:/+blog博客/hexo/public/tags/文学/index.html","3e40129865a6626648622a18bccd7dad"],["D:/+blog博客/hexo/public/tags/游戏/index.html","fb52970f278f43f2f78cbc5c169e791a"],["D:/+blog博客/hexo/public/tags/百度云/index.html","73f7656178321fe661980d7b2cad63ea"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","87d13c69634a36dca8f74b66454cba34"],["D:/+blog博客/hexo/public/tags/视频/index.html","d09a3b0b8d4ec84194da8fb9377615af"],["D:/+blog博客/hexo/public/tags/资源/index.html","2ebcc626443aa5e2adde3013dcd5224e"],["D:/+blog博客/hexo/public/tags/资讯/index.html","41317033609945ae7fe18680b5261c04"],["D:/+blog博客/hexo/public/tags/题解/index.html","98eb2faf5ed610b197df4c6361509e0a"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","766a1ac0bf7750f2cbabdf8138b341f5"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","920d9f8becac090068b73de2829b11a2"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","adf0328ca017ed02dfdd089f5e97dbe1"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","5707c16df992f4b5cec557c740d7ce0a"],["D:/+blog博客/hexo/public/tools/index.html","f411af63ab9dc8d492ff4bc1b4051cff"],["D:/+blog博客/hexo/public/van/index.html","41b18d0cdbe2e9b8bf1836dce28e4b1c"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







