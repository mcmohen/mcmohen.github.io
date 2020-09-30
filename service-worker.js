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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","f25ca3d16afc00980923a39c3e192343"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","e20898bb174beebc3d0c83daba82b22a"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","0821cfed919587989c467ea54985f614"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","33dcc70cf731b05f0b2435224e5f7893"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","baa4898585af1c90726fbea78a24c70d"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","aef87723a13ca57cfad9543c8a310ea7"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","0cf6145329b4d7cd41b397a311d51cc6"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","6f9bf4ec13e16eceb89b7cbb86475c23"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","0b01da64e9c662ac0800a2b4aa745f8f"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","b725acaf7e67d42e664a21efb2accb6f"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","e876812c2594057740ce5b4ac9d68ab5"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","98c724dc22deffdf5d54c7b8637665a0"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","7fe9e3b260bc31b361cf4c4fdb61eaf8"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","8d07dec19f174c94f4aa7e296e248641"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","624fad7c9141eb9b0309f0a36d603f6d"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","326224b23fbe9debbbd29eb673c09975"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","92a2a7c24770f0782f8f2584e5ea42e2"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","abc40c25b2968ee5a1df10a2c233ff05"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","9b3a993facf89d8a9ab01c92387e68bb"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","32587968d1c51452e888e32d8f40f217"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","bdc0cefaf7b0bee282810c1db35a021f"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","afef9c8dd7f70cf498918cd3ff018bb7"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","8b2078f2d0059f3b6a0514e31f6f8fad"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","1497e7896a21a67d192e7f6b2987c72e"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","5fc04bb903f8dcfe8c2c3c5f79408bd0"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","82cda5983b9b00f668b7b3d173499e4a"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","583396427433a48b410cce4b8af402ac"],["D:/+blog博客/hexo/public/404.html","d6449c0ff9029afb142e3ef136e3bcef"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","84ab64e2c1c665c912319f3044477f15"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","8621462a7c179bcf13f401e1cc6e5bb7"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","549ecd55a6b34d6c3483c2ae9a7c4a83"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","352155f077e0808f047442a9d1b45c3d"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","57a18c8aab6ec8928fa5185cc04df09c"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","3d9ba60acad7ad803b14eedc014d1447"],["D:/+blog博客/hexo/public/archives/2019/index.html","895b4ad0eaba53e5d07969cccb96fd68"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","41982c9b6dd5a021e69d149a9aa6abbf"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","31c5b992b64dedc7467a9750cd6f8c50"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","8f06d244196b64ae60dd846a0224d71e"],["D:/+blog博客/hexo/public/archives/2020/index.html","1df50420753c670d2a0dd30eac7c240b"],["D:/+blog博客/hexo/public/archives/index.html","9adfb72fac2fbe07ed130b482e44b8e5"],["D:/+blog博客/hexo/public/archives/page/2/index.html","9adfb72fac2fbe07ed130b482e44b8e5"],["D:/+blog博客/hexo/public/archives/page/3/index.html","52e499ae24dcbc1be28384fed93fd311"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","5c42cc2c6355d70eb54e35e800cb7363"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","2bb2c2e5ef6ee5b838786828c0136147"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","515d4be612c4474ac0e0867f26ed2057"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","bba756d7915260a2deb6b3f5c8198350"],["D:/+blog博客/hexo/public/categories/教程/index.html","dd03288c59a0c7409c6b3df585caec63"],["D:/+blog博客/hexo/public/categories/文学/index.html","160bca766689b69f1c13f1760bd76171"],["D:/+blog博客/hexo/public/categories/视频/index.html","2616bd3efe47c589cf08a887b125abfe"],["D:/+blog博客/hexo/public/categories/资源/index.html","2091f20d62a21398848d5f863de2076d"],["D:/+blog博客/hexo/public/categories/资讯/index.html","ed7f29d4909c26b4f078a2df8d0a2f17"],["D:/+blog博客/hexo/public/categories/题解/index.html","3e1174ea2d31265f24915d62c13c7c01"],["D:/+blog博客/hexo/public/comments/index(副本).html","65d4e79622a35917a14d87af989513de"],["D:/+blog博客/hexo/public/comments/index.html","854f36e3805be87daa14f19c9c418a9c"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","6dc624b1d8f786067605ad794a931c27"],["D:/+blog博客/hexo/public/index.html","ee991bb964b586454e526053f1f3f90e"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","707937e4301e4404195a61fcfa9b288d"],["D:/+blog博客/hexo/public/mylist/index.html","92ee05d859f64724bdfcfadc513e6791"],["D:/+blog博客/hexo/public/page/2/index.html","0606080a1c41d72416b0aec856173ee2"],["D:/+blog博客/hexo/public/page/3/index.html","132277722dd02d14b9ac3d638362bec1"],["D:/+blog博客/hexo/public/share/all/C++.html","356866128c63b2e01fb743c2b90f5d70"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","40cfdcaf8d1ba66cfedad47288e8c8bb"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","2cf840f7d1dbfba76de33ee46b117ae2"],["D:/+blog博客/hexo/public/share/all/工具.html","a6635051d227822a93ed9dab050071c0"],["D:/+blog博客/hexo/public/share/all/游戏.html","390d925364ff3ea66c4581b57bdcee25"],["D:/+blog博客/hexo/public/share/index.html","9dd007b1c58fda98eeb50eca09387851"],["D:/+blog博客/hexo/public/share/备用.html","b4041061029a161c832ae5a00e97e5d3"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","ba360230d34975a3807b23f418e742b4"],["D:/+blog博客/hexo/public/tags/CDN/index.html","cd744f7f2729eec30d4e6050ebd560c1"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","49c63b05c7bfa77d109a288df22d2b15"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","2d10347d3c20476f4efa3922692da4aa"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","49c82f6f322b1f2162b5712b71b2c012"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","a6ec462d9a2ceab6d781382b706097f7"],["D:/+blog博客/hexo/public/tags/index.html","4f003dd2b46925ef5d46ea611aaa8e8d"],["D:/+blog博客/hexo/public/tags/test/index.html","7cddd2eb0826229d995b33a7c5ad2888"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","8ce166cbd95d846af703e937d84d6e87"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","71c571970bb49119589aadac8d14e020"],["D:/+blog博客/hexo/public/tags/加密/index.html","952cd70bc5ac07a50c0fa8d2d992eaf3"],["D:/+blog博客/hexo/public/tags/加速器/index.html","d0d4526ba7a17741874470e8848df0c5"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","e2dd714c5ca85b8710ec50d2fe14be12"],["D:/+blog博客/hexo/public/tags/教程/index.html","49d353d029c6c7ccd2e90b7c66069e80"],["D:/+blog博客/hexo/public/tags/文学/index.html","5c3b1340d1123456645ac9987b116fe0"],["D:/+blog博客/hexo/public/tags/游戏/index.html","a2ec74f2a56c2ce7ba99960d5736d1a4"],["D:/+blog博客/hexo/public/tags/百度云/index.html","95069075c4472a61624a2aa9aaf9d25a"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","71f206ac286bbc01cdccb2e254ab7959"],["D:/+blog博客/hexo/public/tags/视频/index.html","6bd02abbc4a1e5aacd0c5c27ab964c36"],["D:/+blog博客/hexo/public/tags/资源/index.html","0e6e5db87b3ef8185c774a31a9b0a131"],["D:/+blog博客/hexo/public/tags/资讯/index.html","65b0c73a88b53818f20954921e4fe8f0"],["D:/+blog博客/hexo/public/tags/题解/index.html","62011b76b0e223f6bb6c4720e24c94c2"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","de3d99288e9f4bef258895518183e8ac"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","91a0771bbf6767b248edaedc14e700ff"],["D:/+blog博客/hexo/public/tools/index.html","b095ca74add5bf393355219ad0c67f51"],["D:/+blog博客/hexo/public/van/index.html","32b2da3afd7bd032a3319e9fa77341f7"]];
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







