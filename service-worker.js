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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","38fcd18684c59ecaae468159d8bc8bae"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","4af129f401983841dae098a1424b1a97"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","482d25d544e13b2a3d565b6f34d407d9"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","bebed5a3d1457efc5acd87889b3a2fa6"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","77c3537d5b69f2a3348c636453dbbccd"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","1f27a1b5bb9d25b16bf1f5eada3c2151"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","0fc14065e00e6b1e3a0bf9656788dff4"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","9437f1afe8d017aa5053fe3f43db772b"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","d6ab6d7bdfd36992a4045d94def2e222"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","24cf49795ba1a6573c0adfaf1c5efad2"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","5ffac44d129072d4fa94bcde5375411c"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","a081e248747fc4464bdae4d580272d92"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","aa69170af6efd87c9941365029c77310"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","a2d0d8238f0f1a941aea738d8517d4a1"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","1d3bebaa53a4ab06dc47ffa1d3b2a5fe"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","4067bd55ffc00748bdc8472cb9c30a40"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","373257cf813c28a2f12875ac2f26d2c8"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","fb7d68c0de3ad1085dc81a632d727373"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","78e034e250bf29ae6fece07a79fc0d4a"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","5a379dc93a2eb30c78b02f33b62af264"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","c6ca839e17bf21a2809a13a47a25653f"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","5275d4f5192357f4565dab7854d4055f"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","19f9574efd7bad931045b74248a49b3c"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","472733b027b4dad726c4d39c5b5a365c"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","7bb856d0ae999d0980e741f447b8082a"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","dbc44aa6b231c6ea56f40736693a6671"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","10e1b08f10f672bb21bab066594551c5"],["D:/+blog博客/hexo/public/2021/01/10/文学-深圳实验中学部校园学生指南/index.html","08335148f77ea33d93fc155bee021c73"],["D:/+blog博客/hexo/public/404.html","2ae22c4e22a1464a8ed568e0fe3bf57f"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","f84091e699b81de9f1c94ed9154ed777"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","b2753e16992b31f6163d26339259df28"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","98e8c910a55f81cd05ee25997ab4cce3"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","210d863c08add0bf6cb21e5d834fbcd9"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","028a507ccd3eb153f2154930b97c82a6"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","37763549e1f4beaec0678882d2ec9f6b"],["D:/+blog博客/hexo/public/archives/2019/index.html","8ddca432a20e4359b9ca33c91edc561f"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","56b70f1e0373e877a7c86db59730753b"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","c8770ebcd3d67a797922f971337752cd"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","b25c9b2278976fe0cc6de276f1be0b36"],["D:/+blog博客/hexo/public/archives/2020/index.html","33e81d5e09125b35ad4a5a3cde70b3bc"],["D:/+blog博客/hexo/public/archives/2021/01/index.html","8045746167c3d138ec59813e3b59cbbe"],["D:/+blog博客/hexo/public/archives/2021/index.html","a999144aa8e92649189f1516e2cc8c8b"],["D:/+blog博客/hexo/public/archives/index.html","74c70f4a4a01bbed32fa13f99650f848"],["D:/+blog博客/hexo/public/archives/page/2/index.html","74c70f4a4a01bbed32fa13f99650f848"],["D:/+blog博客/hexo/public/archives/page/3/index.html","43a3000225e0af0295433741a786874b"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","25199f8a77860f319aa9276e08bdf768"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","d5061253cc0b3cbbeb7681962536294a"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","6fd33ab2763d700eea0542d4ab2acf01"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","6c92cb217f0c92fd0ca17361f64bcd87"],["D:/+blog博客/hexo/public/categories/教程/index.html","07980795e2397ac8b56929a6dd59d7ea"],["D:/+blog博客/hexo/public/categories/文学/index.html","a4b7bc6ad6a380e0b25b6f843c70f85d"],["D:/+blog博客/hexo/public/categories/视频/index.html","6e75385724b6fc50509981e6192c8e3f"],["D:/+blog博客/hexo/public/categories/资源/index.html","a042e11bf77baf507782d7adc6bc623c"],["D:/+blog博客/hexo/public/categories/资讯/index.html","f56bd698c552ae47fb067226bfdcc302"],["D:/+blog博客/hexo/public/categories/题解/index.html","fa416f63c189c82a8754ac41436dbf77"],["D:/+blog博客/hexo/public/comments/index(副本).html","9de7f04adab17454e076224c1b237fb4"],["D:/+blog博客/hexo/public/comments/index.html","78448db04fa10235b3c1144f98b2b96a"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","4d55d88e4c0c7704ef1c8dd2b6f0d07d"],["D:/+blog博客/hexo/public/hide/all/深圳实验中学部校园学生指南.html","e3e9154da73fffcced23e160c5d8a015"],["D:/+blog博客/hexo/public/hide/index.html","f1e12a7969d8d8b49748fa49a5c3477c"],["D:/+blog博客/hexo/public/index.html","068dc553ff5c903120309a197710947c"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","e83b6beafcf69f27c7024e0961367a07"],["D:/+blog博客/hexo/public/mylist/index.html","3a1b6549e86760c7211a9eb89b6d436f"],["D:/+blog博客/hexo/public/page/2/index.html","00170bd33cbefecdc844898e2f6c0d1e"],["D:/+blog博客/hexo/public/page/3/index.html","b8745d593f7d93f1e98ccfef76896200"],["D:/+blog博客/hexo/public/share/all/C++.html","32af9dae00e8536a13ba29d75d238743"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","28d88ee8cee2ffdd280cebb62f06918c"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","c628dafa6912c62830fe0387d65d82de"],["D:/+blog博客/hexo/public/share/all/工具.html","152851d7974a386aac730c158f88d07f"],["D:/+blog博客/hexo/public/share/all/游戏.html","f1de9d099829f959cf8b98f2644a9f21"],["D:/+blog博客/hexo/public/share/index.html","6a205a74ca7e884130f9b134491798b9"],["D:/+blog博客/hexo/public/share/备用.html","3057f34f532c01bf4cac340e210e0952"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","223f8f4b5bff76cb785454ac2c753084"],["D:/+blog博客/hexo/public/tags/CDN/index.html","3a4fac3f9b95611dd55d05aed9059677"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","9b8a0a27525d247e83c4fb3f3e6191ea"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","2641947fe802ca415eb7958774fe3664"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","8f9c2d66f66d21b2846a1c2e9c92fe81"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","3032306c7eab3c10af2d03ef1224dbde"],["D:/+blog博客/hexo/public/tags/index.html","b2efde7310fd9b65f5af22a598e77315"],["D:/+blog博客/hexo/public/tags/test/index.html","7b18d4fb5f9e0afcf9155f9d15a78a61"],["D:/+blog博客/hexo/public/tags/中学部/index.html","1330f22e8780fa2d90e61de8043fdf01"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","9d4f967951b52e73e270dffb93016d3f"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","c1963e2b62ead7d11e17237a64320a2c"],["D:/+blog博客/hexo/public/tags/加密/index.html","b7b2f952de87186f1ade73e13188f310"],["D:/+blog博客/hexo/public/tags/加速器/index.html","fa17ff4689e0fc5253dc2072b9e3c252"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","5d75158d0ec6a7a314cabda4a560c105"],["D:/+blog博客/hexo/public/tags/指南/index.html","437d50e3b95c1c25a43ec930035e5457"],["D:/+blog博客/hexo/public/tags/教程/index.html","eaa2aeafe15e8fd1f6c172bd4651f074"],["D:/+blog博客/hexo/public/tags/文学/index.html","1a3f0c702dcd3eab0f7e815ad935b629"],["D:/+blog博客/hexo/public/tags/深圳实验学校/index.html","55c2e6f93fefbece38ee5465356380be"],["D:/+blog博客/hexo/public/tags/游戏/index.html","35c02046eae63eab1fca95153f02e705"],["D:/+blog博客/hexo/public/tags/百度云/index.html","e1f8f6d8806bd9c9f5e5ae7be1ed3ed6"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","b89ade7ef1711d135c37d85b1bf5f923"],["D:/+blog博客/hexo/public/tags/视频/index.html","2ff7561b7d017a20e0daba1b9178a730"],["D:/+blog博客/hexo/public/tags/资源/index.html","1b519567619752b6c4e9a75ca08633a8"],["D:/+blog博客/hexo/public/tags/资讯/index.html","c9269eb6fe736dd17b63a4a6c04c134b"],["D:/+blog博客/hexo/public/tags/题解/index.html","6462c2ab5f065cc821faac0bf6b21711"],["D:/+blog博客/hexo/public/test/index.html","db310e104af8c32b09bbb736e266ba67"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","09c17430a4c21aa42d14bfc4e2d20eb7"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","0375e2070e49aff476f2bbc3c24032b6"],["D:/+blog博客/hexo/public/tools/index.html","3f63afc5b525b0292ed7e6cd884b13f4"],["D:/+blog博客/hexo/public/van/index.html","ed01c90519dec307bab5c4920fca5b5e"]];
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







