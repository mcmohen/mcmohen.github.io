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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","684f96bf1d04d9c4b905ce5a42dec43f"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","ab2c787e30404e0548a283a4d6e42fef"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","9f0d975bbf976936561695e62df752cf"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","0e9152d34bfe24dc7e0f67cd3c8ff740"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","769fd1269f7ca2a0b6870c294d667ae7"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","9e24af19588209d224e7c26d262b6cf7"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","9524d4918a54fdb45cff7879a23f996d"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","ee62f0acc7ab08bdc7fb8a313561f8a5"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","2606096a1eb7b6fc2a87f792ad25f741"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","e3c3126b80222e0a9f6f37fddf50c027"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","05b1b9875a8d13dbbe0c00d5f3fa7ed6"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","1ebb4072956327f52552d98a70e85490"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","c0e17908ddbc1e148169ed23fbb3890c"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","17a2709d73516413a8359ed46c234f67"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","405088aca86d4d6192a2f1a549b39699"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","cc15c7c1510455f2c0d6333d641c8720"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","3371ddb36f9a31b0db0f7bb016b86d9d"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","cd22dfa354bcb4d3431c5905b4076634"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","21d7d218e070586bc6ae1d71722b8622"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","14933937c66b8e276d18ddeb878e11fd"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","80106b8885f930f14905209f89f12e97"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","50e2d2e7e4388d5ca231d3d7d823dc26"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","71e663fee08e99e39a7d5905c444b1cf"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","0b5298fceab8d94dd6acc046d2e31fb0"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","20ce693f7394930f161b171906596c82"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","21d2fc6d04f49e4812b7d1259b605d61"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","fb2c06243c4e70628f8ed520a58340ed"],["D:/+blog博客/hexo/public/404.html","b163687657fc65ccce7c02e1bceab05c"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","75702cc836a9fbcc5279ce17406b1558"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","c3652e778065849a54ce0a6b55b5fdd4"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","9a50ec9c10565c34e1e9337b3afcf3fa"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","1ce5ef3b5e43731ecadae4259acfe901"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","fab25f4e769f55c4e20c6adc08c27040"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","4d453a9e7aa16b21032116116a224408"],["D:/+blog博客/hexo/public/archives/2019/index.html","c60c52bff0db60aa665c36ead618a6e7"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","b154d5ce4646346576bac2126ba66f72"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","8a2f68f376c4d41b730433579fe0d598"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","40b4365a21c78e3b0ccb1e533993f2ce"],["D:/+blog博客/hexo/public/archives/2020/index.html","16e053ed54a67925a73a8931edce3530"],["D:/+blog博客/hexo/public/archives/index.html","f7cf9fcbe459b0888b32a404069cee7c"],["D:/+blog博客/hexo/public/archives/page/2/index.html","f7cf9fcbe459b0888b32a404069cee7c"],["D:/+blog博客/hexo/public/archives/page/3/index.html","082292ed12daa14bfcc5d369d272bdf6"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","2ad1da43d2f82affd931ab901e37ece0"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","e2c5c4fc34d98c190340eca0a3746339"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","6903991843758f4789489cd437aea85b"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","6bf6928999e9e625eaf6aaa48ac595d5"],["D:/+blog博客/hexo/public/categories/教程/index.html","0cec2a16d42466b136d5aa161fd39880"],["D:/+blog博客/hexo/public/categories/文学/index.html","0400dcd44f5b685bfcc82b804311f4c7"],["D:/+blog博客/hexo/public/categories/视频/index.html","8857a63188cfcc1de166e7faddffa71b"],["D:/+blog博客/hexo/public/categories/资源/index.html","f91c3ba3eac8a642072970b5e97a8b77"],["D:/+blog博客/hexo/public/categories/资讯/index.html","5796e73057051984e584b9d60e114045"],["D:/+blog博客/hexo/public/categories/题解/index.html","22a3fa5f6c014aff2e218474e6c4e770"],["D:/+blog博客/hexo/public/comments/index(副本).html","8e865243c827c8c635b2b7e82a1b3b7b"],["D:/+blog博客/hexo/public/comments/index.html","e22fd619152b32a56341d47ff005dd9d"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","f6b4e30d069f80146a89dd72166c990c"],["D:/+blog博客/hexo/public/index.html","178edab37e25c137e81bf39c074ce61a"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","91d5e95c458928eb757273e7e1f014db"],["D:/+blog博客/hexo/public/mylist/index.html","9fe0da30c04ea04e727c9b5c5027454c"],["D:/+blog博客/hexo/public/page/2/index.html","49f2c8e13020a6fdb400b98a5d999f91"],["D:/+blog博客/hexo/public/page/3/index.html","24fe4474f10911776ddc5d5b57c4c9e5"],["D:/+blog博客/hexo/public/share/all/C++.html","5f6961d8965d78ffe62c3d5778aaebeb"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","14c1825d7f376bc2b8d6714606ea85a0"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","2b7a4da31acf22536d2bdbefca040383"],["D:/+blog博客/hexo/public/share/all/工具.html","3f735683cfc3a3f01b2539362865fcbb"],["D:/+blog博客/hexo/public/share/all/游戏.html","e89f0e2ec297a8f54d6de426a7b54a4f"],["D:/+blog博客/hexo/public/share/index.html","e64d4a52c3e0f3e08d698cd8ba874b3e"],["D:/+blog博客/hexo/public/share/备用.html","d5bc814e3fa2317462c094e5d08ca901"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","38d233f39452d99be49a652ae9adc947"],["D:/+blog博客/hexo/public/tags/CDN/index.html","e43530842f697c9b7f642bbdd41cb45e"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","430106a85102bf0e7c6fa1803716645c"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","1f6da3b637f3cdc840d6fbaa259bac94"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","35cd2284ebca4a19c52afad326b3196a"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","e19be2097a33a67114c7ce791a00376b"],["D:/+blog博客/hexo/public/tags/index.html","ffe997ee0129af72f5b747e78b31f933"],["D:/+blog博客/hexo/public/tags/test/index.html","055c43cc6b7a9bb388a756dbbac29ea6"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","d486df9e4accea99d7ca309c6e85c918"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","b7610a2b0ee579cc0dd40ec9c3e3417b"],["D:/+blog博客/hexo/public/tags/加密/index.html","2158c5ee76f290cf2692d7e20fafd629"],["D:/+blog博客/hexo/public/tags/加速器/index.html","d69ff8969ce05310b6c24c53c2f4d117"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","4a3ab1618c2c7fa238a62fc9622330a3"],["D:/+blog博客/hexo/public/tags/教程/index.html","7ffea0eef460661650973a9dc69e6f33"],["D:/+blog博客/hexo/public/tags/文学/index.html","a662400bb78a478d6d113b8557fe2e81"],["D:/+blog博客/hexo/public/tags/游戏/index.html","1a36a9d02864eab0bc8f9dde9fa3a507"],["D:/+blog博客/hexo/public/tags/百度云/index.html","5da9c63826c953d586e8f4a90efb0a3c"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","ca5afaa94b31b95695504abbac31442c"],["D:/+blog博客/hexo/public/tags/视频/index.html","027af7e7d543d1475e509a5fc6024bc7"],["D:/+blog博客/hexo/public/tags/资源/index.html","a2fbdffc3d913fadfe7e63e98d955a0e"],["D:/+blog博客/hexo/public/tags/资讯/index.html","0fd7527d4fae6e2f24a11f66df631b2b"],["D:/+blog博客/hexo/public/tags/题解/index.html","7ceb994c1e068ea372efb6ba40fda424"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","945be89081b4e3666a1f4be1523e08e2"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","b9c1927f906fc45abdd0636b6a864bab"],["D:/+blog博客/hexo/public/tools/index.html","e1d704dd312887f04e767b02c61e8951"],["D:/+blog博客/hexo/public/van/index.html","1934cbba48b3d29be70f02eb2f87a207"]];
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







