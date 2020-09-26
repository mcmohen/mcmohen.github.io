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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","f041f48ec1dbd5b48a8d7188df6dea78"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","52a12cd0305657c2da0931d1c50a7b14"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","bc48b4178cd20c2116740436d486a2bd"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","414818173dde06142a2179b0b7f98975"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","f9d5b28cd994188d9a6ccdac0caa85b2"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","d333c8618cac24a1bf16302b0f95b44b"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","5cdd733f1db8c8b5bc8d212c4b5e7304"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","b8d487db6799b199857dc3052c4cd463"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","908613892cb08ab510f484e64f4c4d6e"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","5c06c6308bf82fa64ce3df3484910a0b"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","21a27f647ec9bee81806e1dbdb5f5ccf"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","b8422dc78720f17d5490ba328a21f736"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","0f9773e2c450899f470b046f2dc8183d"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","82e9c28c1eaa676ccb955bf71c02e5c2"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","7fe17d6bc4a7c756aed8710dc76eba1c"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","54b60f28c24303f98d9bb0d792a9dfd2"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","71d510f40f52583f916da9b5585bd87b"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","5c73a2e49ca595e6e477477540782e33"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","1f75ed5aec214385b147da74de865a01"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","c93e6e1f93f8e0b319b703b36206b420"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","50e4acbb9ddd445e09a7042b26982ad3"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","72256653d4d4bd848eba3af3886f746f"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","4b7919c6f43779333cca5c9abd393e53"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","7c4cbfaa795cc93348d7edc94a5ff260"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","c3b3b67e1a39b73ed726f3fe83c0cbc2"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","df89462e545e14b3fe48d60408b59e7d"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","c2bb48746a4f219302216b8a1873d942"],["D:/+blog博客/hexo/public/404.html","57c5f4d2758a39f824455fe911d55753"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","d155fce332c85e6f2f3ec9f740599d85"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","1d2d3004968bee69ef654209353f6558"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","269aea8fe171c8b58a8eb3a7b054fd9d"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","d03b69666e02db650a2f980a176900a9"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","98c86d8aeba812bf85feeeaee3def4d5"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","9ef47cfacfb0bd0a6872bb4e0cb2f8d8"],["D:/+blog博客/hexo/public/archives/2019/index.html","d8ff7e0e5caeb0b47061cddc0c89d74a"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","ee2251a65c4d461616ddcf0e9705dd53"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","4b0f6df220638cff2de75f613f31aefd"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","5742a32f60e105ef8a2898cb8ec9dc0b"],["D:/+blog博客/hexo/public/archives/2020/index.html","5c7c3051e25f0ca84b27c9af68f0781c"],["D:/+blog博客/hexo/public/archives/index.html","761cc5b2d5343d291347f28f52946ef6"],["D:/+blog博客/hexo/public/archives/page/2/index.html","761cc5b2d5343d291347f28f52946ef6"],["D:/+blog博客/hexo/public/archives/page/3/index.html","7ad1063a743d3f27763f955873abf757"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","0e214c7e690934c29e133b3fc668aacf"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","0bbd52326814af3427b05b6ce9f1a4f6"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","7a7fd3df1dd9d5079c4da819a4bf50dd"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","d47dc7997cd7a4937fc9d4ed8a79fc66"],["D:/+blog博客/hexo/public/categories/教程/index.html","37883cf3337298345a2d9aad36f67987"],["D:/+blog博客/hexo/public/categories/文学/index.html","4f09d6729b028433fddf186da42649a1"],["D:/+blog博客/hexo/public/categories/视频/index.html","ee8e8b7a4eb45da3ff8351d7785f9fe8"],["D:/+blog博客/hexo/public/categories/资源/index.html","c20c658f8f6425f3345dc46b6643ee07"],["D:/+blog博客/hexo/public/categories/资讯/index.html","87d6896c20b8e24960e29b971d440bfc"],["D:/+blog博客/hexo/public/categories/题解/index.html","2127bb60182f9e6ab5f3b490ea32d645"],["D:/+blog博客/hexo/public/comments/index(副本).html","ccedb905dbf1652f62ecfff29cee7f4b"],["D:/+blog博客/hexo/public/comments/index.html","3d6d8bd3c693a14625266520487d4679"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/css/style.css","263dfa8113ec51c861784571ae0ef6d7"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","4f25fdc72a07bc8b7cfd9d940ed96310"],["D:/+blog博客/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/+blog博客/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/+blog博客/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/+blog博客/hexo/public/index.html","15ce03c2755a50bc6b442bb45ca1585f"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","bb5634bb11c768f2bf3c09e39604a60d"],["D:/+blog博客/hexo/public/mylist/index.html","86f0b80468e72d09b79ba3ab0dfc3619"],["D:/+blog博客/hexo/public/page/2/index.html","206904b751bb7595cc60a86bb8780693"],["D:/+blog博客/hexo/public/page/3/index.html","1c2be3fa1124d234bb3d7e39b51a53c4"],["D:/+blog博客/hexo/public/share/all/C++.html","f4437da79079c82644f06a33e65b4258"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","7e30ea36d3e875475759557fdca3bdfd"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","31134ca1995a16b55a23d0103bb22b24"],["D:/+blog博客/hexo/public/share/all/工具.html","6618d9e27c3223c59519aebd4486da02"],["D:/+blog博客/hexo/public/share/all/游戏.html","94781fe1031bf13fbada18ac336b47ac"],["D:/+blog博客/hexo/public/share/index.html","3fc34dd3293f5549728e8c744cfd7e7b"],["D:/+blog博客/hexo/public/share/备用.html","b527fce071616335a5a20ddca46d9399"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","87c38fa236acfba4c3104ac2b3c18a59"],["D:/+blog博客/hexo/public/tags/CDN/index.html","db34ef30eabc096280fdf677575d50b2"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","eb5e6ea082066ec1b50a2d7dede90d98"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","b1463e4329f2cafb1e52002117d1c398"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","6a195af8b80a70d287c0336c80b684ea"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","f5827e38bd92441fb10547f6d5dfacb9"],["D:/+blog博客/hexo/public/tags/index.html","1fb02080914885a6fb9a6ae4e214d9bb"],["D:/+blog博客/hexo/public/tags/test/index.html","0d810f2db4334a81245f462d07c994c5"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","87ebf466f6ba50268f8d6c38be78e5b7"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","7567bfe479293221a6a41fd7b17f01f8"],["D:/+blog博客/hexo/public/tags/加密/index.html","e586a8f13071e70a0a871fc8f44fda94"],["D:/+blog博客/hexo/public/tags/加速器/index.html","3cb72d0faa3491c9e567a8c0f27f8ec9"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","50c6020e2d55ae2f780f0eee44188f2e"],["D:/+blog博客/hexo/public/tags/教程/index.html","05a05d353f2a147d2cfcd863ec6f45f1"],["D:/+blog博客/hexo/public/tags/文学/index.html","a3bf0db0002a7fa50bdf415832f00c00"],["D:/+blog博客/hexo/public/tags/游戏/index.html","e766dfe8f409aa0ed40814978f1eb4ad"],["D:/+blog博客/hexo/public/tags/百度云/index.html","83259021216436fde98473556ec5349a"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","807bfe8455cf8d1356bd70c0e69076de"],["D:/+blog博客/hexo/public/tags/视频/index.html","0bc9efb4217ed96ad9241ff56eb6ec37"],["D:/+blog博客/hexo/public/tags/资源/index.html","5f7d1411fb1f946d4ce814d943cc5fff"],["D:/+blog博客/hexo/public/tags/资讯/index.html","9f7249dfac6959256d4324e6d3fe345a"],["D:/+blog博客/hexo/public/tags/题解/index.html","79b927a92ec345df206c125b8d50f02b"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","d8ae649a5ea9ec0d69337eb898814bb0"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","6475f3cb9e4e7205b4a0d3a3165dd53d"],["D:/+blog博客/hexo/public/tools/index.html","fee72da4827e6b19d74d082de2913c7c"],["D:/+blog博客/hexo/public/van/index.html","904546c5b8a14c4e887746edcc600308"]];
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







