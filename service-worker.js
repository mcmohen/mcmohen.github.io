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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","ce228cab7b5b886050d85d453f654805"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","c06a36c209620053c17291ec692b8abf"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","5be42c5928845b2b5e4831794dff3527"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","8467460ba39cb19e935aee7cee97d9b4"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","c8e5d55338e3bf5acde7497b5a2a420a"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","f128d80649879c6ef007194a10650b9f"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","2bc7cf68f1c37112d8e3e4b176e25de9"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","ac1aa1a38ead3f13ae63f5c4d6b11c0e"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","284de3475c6bdb3836dc0dd8e5a5f9f4"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","d665be002682b9de4957adb1570cdb52"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","b27363bd59476b487a22dbff5b78db7e"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","8599b7ebf98419ffa50092d409696b3a"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","e98e07179eab417285e94065f74fa331"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","4a953511879bd0117f913e99a3faeba8"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","e29b9bb53f1583b42a5eb159f4959b93"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","172fa363a41038663248d7b623c33711"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","09f1734af9a64c11587f69acbaf57302"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","01b199d3ed741d066cc35aa74f71c7fe"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","e765bc85f68f8cb990558f5ea234293a"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","6a8e28ec2bb9732d2297abbb91baf2c1"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","b4d4c3229ecd902dec69c262436177f4"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","bc8c002f731661be43f682a41596511b"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","813fdf9ad53524bc1bf9dd768abdba7f"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","2d2543989efecece637178c8f2c9ce8a"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","e6890e1f9af33138939eea67ea15b9ef"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","1f330c277e0a728e0341197194af82f9"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","6c668a7ab153eae5b209523c31259320"],["D:/+blog博客/hexo/public/404.html","89dccf4af68b60d751b5744158f0499f"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","69e0bf6c50f42ac77a72f7a7f9ef5580"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","bb4423b145a4ed4353bb1d36ecf895bd"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","521e32b8abe1d41ddd27074847f1942f"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","42c12cf662486df33039d46a70c0e024"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","6730f119c09bba04385664026525ee24"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","186ea9a12d5745806cd9fe7368f1fcc2"],["D:/+blog博客/hexo/public/archives/2019/index.html","30200257935308fe8ff5d7082962ee87"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","d76dbaec6d2dad5a9a141c1bf1006190"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","43ac8bf6efd945487061921f314fb251"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","a8d792f7b7816072bffb48967d23a5c5"],["D:/+blog博客/hexo/public/archives/2020/index.html","e567553f9a515496fe43c4f6301d353c"],["D:/+blog博客/hexo/public/archives/index.html","50a320b84ccecf0374dfc257c6eef553"],["D:/+blog博客/hexo/public/archives/page/2/index.html","50a320b84ccecf0374dfc257c6eef553"],["D:/+blog博客/hexo/public/archives/page/3/index.html","e3c17f125e272db8bdce8c3061222438"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","d9777ba01aae41f72fe3f620195ed1e5"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","e4d8aa6379621f24753cb80603019b62"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","aac3690faa3c0e48644f1774fc237535"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","a74b494b1ef07b87cecd2eb8ffed4cd1"],["D:/+blog博客/hexo/public/categories/教程/index.html","b6cdf4ed263374e832b76d07db101974"],["D:/+blog博客/hexo/public/categories/文学/index.html","a7ff8b6b17544e8790db2fa94a73545f"],["D:/+blog博客/hexo/public/categories/视频/index.html","0a0879d5097fb0d3d1c5604515eb92f9"],["D:/+blog博客/hexo/public/categories/资源/index.html","243f026c20143f885a43e856de10a985"],["D:/+blog博客/hexo/public/categories/资讯/index.html","839774668612c981fa9f7e830d2e9d98"],["D:/+blog博客/hexo/public/categories/题解/index.html","90a79e5b1cef4298b53c06318987ee49"],["D:/+blog博客/hexo/public/comments/index(副本).html","87f2381ef31e5176da89d4028056aab8"],["D:/+blog博客/hexo/public/comments/index.html","27c15bb7d890626798f6f92c6d2cb299"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/css/style.css","263dfa8113ec51c861784571ae0ef6d7"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","9575d404545c4cd64dfe89fbef471f58"],["D:/+blog博客/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/+blog博客/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/+blog博客/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/+blog博客/hexo/public/index.html","365b0a1f3026095f49b302067111f771"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","05a88d49bc38d981d60c4ad4b31e678e"],["D:/+blog博客/hexo/public/mylist/index.html","0cc7c4d8e8cb8c4e6d15105aec6d94b2"],["D:/+blog博客/hexo/public/page/2/index.html","5164fdef131297e46667686133b6650b"],["D:/+blog博客/hexo/public/page/3/index.html","f9f9358efd27dfe658ca98bb9698e766"],["D:/+blog博客/hexo/public/share/all/C++.html","fc31053d86857b40ba226e2175a0d66d"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","c45febc7f1053498f9dbfe24c04113ff"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","f1ef8e38bf81792dfcde60cfbb02be33"],["D:/+blog博客/hexo/public/share/all/工具.html","c0c0cc190994e50cb0eba9749a9ccb4f"],["D:/+blog博客/hexo/public/share/all/游戏.html","24d9db8dc05162c1a52d0d057cb336c7"],["D:/+blog博客/hexo/public/share/index.html","3321f710fcf7661c4aa2cc6365653755"],["D:/+blog博客/hexo/public/share/备用.html","3d813205de4dad4a3df2787d9641cc4c"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","8262290ffd7c740b41ea9b654d48ff46"],["D:/+blog博客/hexo/public/tags/CDN/index.html","eff27648e78fcd69bb96029fa82b6503"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","b2ba6f2fcfc3030e1cdfaf30327c09e2"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","db16b0a85ced975c79ce3bfba8d3abbb"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","237f86768c7b0df3d86259e8aa06706f"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","30b73e6517ed1026676d9acd3ee3ba0d"],["D:/+blog博客/hexo/public/tags/index.html","99fef98bf6fc9f8fc670598ff663f048"],["D:/+blog博客/hexo/public/tags/test/index.html","92e97b4b354d822ea342c0c2c5eeebb3"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","0bc1c27adf6fc992dea252ed77fed98d"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","7c1c25f16c2616c4e5ea5265c5050e48"],["D:/+blog博客/hexo/public/tags/加密/index.html","cf8a06b88d97be5880e8277fe59b6bdd"],["D:/+blog博客/hexo/public/tags/加速器/index.html","683085f12ce5d35d34c1f7c7606704bc"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","de7dd19912b2d7ff5d0282838aa74b10"],["D:/+blog博客/hexo/public/tags/教程/index.html","5f4aaba787a7e3b93d6b7a170e8b7764"],["D:/+blog博客/hexo/public/tags/文学/index.html","2289738a916da99988989d3462d39d03"],["D:/+blog博客/hexo/public/tags/游戏/index.html","4cacd0de7564cd996dafa98d7dfa16ca"],["D:/+blog博客/hexo/public/tags/百度云/index.html","6e818aa470a2d2bcfe4912b686e44d36"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","2a298d5a24bbb47d195072d5cee6f988"],["D:/+blog博客/hexo/public/tags/视频/index.html","470a9df5758eae7f94f9098a50998f11"],["D:/+blog博客/hexo/public/tags/资源/index.html","1d545bc3a403d1a705cd58f1f7dac5b2"],["D:/+blog博客/hexo/public/tags/资讯/index.html","af6be90a3154a19991454854aa5acf70"],["D:/+blog博客/hexo/public/tags/题解/index.html","959b30d2f9be6645e2588fe0a4058b0a"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","e3235940b86145dd8eb30e88e0b58b32"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","69b7d2bc54d4a1d357c74b1128dea458"],["D:/+blog博客/hexo/public/tools/index.html","48c284b9392f6c713cf5e1c90ea642bf"],["D:/+blog博客/hexo/public/van/index.html","ea56eff9f49bf822d9d824b196f09a42"]];
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







