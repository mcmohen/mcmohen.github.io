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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","62710563c5a128b2f9019404bde1b16e"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","777c26df0a1f71ded55927ffa8933167"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","71a42e1b5743452a9f3d67038fdb8adf"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","c6544a562d812045decb12ce06d96276"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","654070d5de418e1eda573c8b5e0aab9b"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","3d7b8673190fe78009585dc7b8687f12"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","309f6dc9a7fe22f2199c2dcd745609f1"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","387d798a90cf8ed441dd305c62ac3fd8"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","cb48a4f3fc0f68a3db16ab824b54ce9b"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","500638c2666a7397d19e5d070edb8924"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","acd5680f1f05b70253c738d16d35becb"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","357d2972d97244c394043771ed6918c0"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","a870a73386a08f3b35845705e1c62150"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","63089e55a0ad0224348b3f28e062c7db"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","b0eadf0d3bfa50536cfcc28733bcbd06"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","ebe25739b73be9cb82c649eda274c6d8"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","f9ba2c6f1ded5b267ec048a638b794b0"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","eb8b27310d4674905a5dd0896ed45a1d"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","4d81de9b752f716ed77b2023e632263a"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","6579a06cec5c1c91c3c175837cc6d686"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","2092fa028239b6f3d4e7b325315083dc"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","64d8dedba3e1b6632cb3cdda84813633"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","e10a49d6f39b36eab53b34f6ff05186c"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","8d9e106a47d00415278cf4bbb7456405"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","a58862ed2e69b8d2b9c3815003259d4f"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","f8e2531fe932cbc270d566e409fec388"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","3cb6e58c0053179d7de58d7fa060c30f"],["D:/+blog博客/hexo/public/404.html","6fa161d39290b117bae7ed119f2aaf93"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","d41de62c0a96d83711e60b930bb5185e"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","0b229e19ed7400132c6628f99dde12f0"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","c945c0a8bd7ab1a4122b8fd7179a6743"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","7d65416d7e7eb8a357c0cc671f8eff24"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","4e43fcfbde54386cc4d869fe22918277"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","f9377e85dc9c049930a521788e7ef46f"],["D:/+blog博客/hexo/public/archives/2019/index.html","5a4692b9a869126708842578056bc40e"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","bf4442f4d4d8910a3d19b53befb5bf51"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","e86fcb1edeaf690474b9dba6f850be27"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","f33a8279a3ec5e9669484fec92f3767f"],["D:/+blog博客/hexo/public/archives/2020/index.html","0535d3531849cf6926395a05abcfb042"],["D:/+blog博客/hexo/public/archives/index.html","bf70fc8cfa94d3099d0f2db00d4fd9df"],["D:/+blog博客/hexo/public/archives/page/2/index.html","bf70fc8cfa94d3099d0f2db00d4fd9df"],["D:/+blog博客/hexo/public/archives/page/3/index.html","3a3c9d41ecc1f580560cb12b4f0bfa18"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","986127b1fb8e3477b1fa03248a921372"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","7df2c57f2515b09f4bce28d371b75d65"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","b842a2781d639c46fd62639bb9efa36e"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","955bd6e2188d24e3d883afd30be2b480"],["D:/+blog博客/hexo/public/categories/教程/index.html","6ca56599d29466a80b08bd1d531f5595"],["D:/+blog博客/hexo/public/categories/文学/index.html","4f227f9fff6c7b0b84696fd105ce796d"],["D:/+blog博客/hexo/public/categories/视频/index.html","99cb7555b32b75f244aa18728c493771"],["D:/+blog博客/hexo/public/categories/资源/index.html","1ffef7eb0614c470554922c599ee406d"],["D:/+blog博客/hexo/public/categories/资讯/index.html","d9bf8702ce7b05b5f029fc89a83aa825"],["D:/+blog博客/hexo/public/categories/题解/index.html","7f3c98191c7ea4256721f5be43b71e15"],["D:/+blog博客/hexo/public/comments/index(副本).html","d28002cb18ae9b7cd92c497decdf9fd7"],["D:/+blog博客/hexo/public/comments/index.html","6a1162cac722511af6d5a9c56b7f045a"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","1fb521d8a6d1c2e101fcbbc293128123"],["D:/+blog博客/hexo/public/index.html","b14f1d1756929d4fd85c4ed065c3c58e"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","4bd64e7072d10e8ca827a0960c947e2c"],["D:/+blog博客/hexo/public/mylist/index.html","442412efc2b0c509c3d610593475f27b"],["D:/+blog博客/hexo/public/page/2/index.html","c2c0b339d393d545637ec543e1746935"],["D:/+blog博客/hexo/public/page/3/index.html","df051b8d55896ce1b42663a65d580e0d"],["D:/+blog博客/hexo/public/share/all/C++.html","4b607d4867f79ee84d0820cc85d3aa1e"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","971dd9ce585fb53e9414a4b86e3b5d35"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","a7c8dbebbf6b8c38eef26cbb1074de23"],["D:/+blog博客/hexo/public/share/all/工具.html","823f3fbcdfdd1a713e9b3afba49b7cc4"],["D:/+blog博客/hexo/public/share/all/游戏.html","d27e9461b097a3b6c9e0b5ff67990e2f"],["D:/+blog博客/hexo/public/share/index.html","55f2b9f56ecb056474cba3c171162173"],["D:/+blog博客/hexo/public/share/备用.html","e9b803dcbc01eea8722a6390cc21792c"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","56f9c6e6b132556710f01ef54e9adc2c"],["D:/+blog博客/hexo/public/tags/CDN/index.html","d9c7f9786e0e0b5c91f752e90331b761"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","03391e272c36f0c8a1757c58241f1f55"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","c4d310643d91509ed5529f64cfc97e1e"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","f1fbf109f181efe4b551eabd1b1becbc"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","1eba574009a3c7e4a71bc9f54f0dec0f"],["D:/+blog博客/hexo/public/tags/index.html","f80ae97c8bcb3b85eae5001d7be1ac6a"],["D:/+blog博客/hexo/public/tags/test/index.html","1453aa7eed0eaee34b09002d77a173f3"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","765d3000b5623e9fc60a1c4488dd6059"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","95c6d64cb57da8bc6f28066b1c11c845"],["D:/+blog博客/hexo/public/tags/加密/index.html","ad48247855fc9f2325e8a82b91410ff0"],["D:/+blog博客/hexo/public/tags/加速器/index.html","9dfe1b875ce48facdc799ec156fe1722"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","a7f8fae608c4dcfe5a323c9bafde9d3e"],["D:/+blog博客/hexo/public/tags/教程/index.html","bf323a476d47ef7480e13df6dcb682ec"],["D:/+blog博客/hexo/public/tags/文学/index.html","412995d48edba96a7b287ec5c1457133"],["D:/+blog博客/hexo/public/tags/游戏/index.html","b371ec939d2891bd9dcbf4e203f57dd9"],["D:/+blog博客/hexo/public/tags/百度云/index.html","37494d27c06e47d83a53057cb7398de0"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","1812faf61d61674f2d56948e9d9e5a05"],["D:/+blog博客/hexo/public/tags/视频/index.html","2e4abe4c111018b3e6ec21ec69944f83"],["D:/+blog博客/hexo/public/tags/资源/index.html","ff9bbf174a0be9060f406f6de2515944"],["D:/+blog博客/hexo/public/tags/资讯/index.html","6b298dd6e6d2bd75bbe1d4c32f99763a"],["D:/+blog博客/hexo/public/tags/题解/index.html","23d3bdaf621e06c9f301b82632cc5b0f"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","d8c2e429b17dfb69194d90494338d054"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","18bf719f3537a89cf518faa42ac0a0f6"],["D:/+blog博客/hexo/public/tools/index.html","8faf630e69db688b604732691e55d533"],["D:/+blog博客/hexo/public/van/index.html","3dfd9b4d3889ec8b879e3244b2b8d0e8"]];
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







