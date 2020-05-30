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

var precacheConfig = [["D:/1/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","ccc4dfa306366d7b5e461a5d32f3a725"],["D:/1/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","6b9dd96218713fe367158a5306e67856"],["D:/1/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","207f66ce9d06c6dd59882264c09fac65"],["D:/1/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","a296c5edff6a9be8083afc26ec80c082"],["D:/1/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","b867afe227573af22969a954e7458ca5"],["D:/1/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","57eccd5f599c546901404fbb8b9896a2"],["D:/1/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","954c3812087222f20df3888f20e0243b"],["D:/1/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","c510eaa008da934f189c8329eb32c8ea"],["D:/1/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","8425c2bacd3ac3cc789121d418f2af2c"],["D:/1/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","cfd272410b1eb821ddd1d0a4417fcf47"],["D:/1/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","0b3fb997c71d96f3c45fd9ab64253bda"],["D:/1/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","8c05e3be194c1285ee309b78407ef75d"],["D:/1/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","633b4d22bc7bbc4f3b078bcbfdae50b8"],["D:/1/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","4d088823091d8ae745dfd1c957b0628f"],["D:/1/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","c69ec33db3ac15a72c6e556b49cdaa3a"],["D:/1/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","e003587aa56b3a9b7fee4fbc666eb35f"],["D:/1/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","6bc46c23cbf4366195b766bccbc47dcf"],["D:/1/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","5a32ffcb816b99726f4140c13bb804dd"],["D:/1/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","dd7c39f637e4d9bff642e35eeeaabcab"],["D:/1/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","0bbd0fb548d295f2554cfebea9d48fe4"],["D:/1/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","06a8f471e34b9060b108845a2730835e"],["D:/1/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","c8989d089496cfb363785a1b80db2c9a"],["D:/1/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","2a05288da0d7f1988b0be711ce1d58dd"],["D:/1/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","d62685c7d91138c82b66fb91eebf4a09"],["D:/1/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","ddb19bcec0771c2feaf0739bbbf254bb"],["D:/1/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","c4ccbf0c53d340ed4fab41dd54a08749"],["D:/1/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","ffb9939a62c6ac55926fc70a73fd5393"],["D:/1/+blog博客/hexo/public/404.html","b6a3327880e6c9347c5c8ea427f0c1ba"],["D:/1/+blog博客/hexo/public/COVID-19/index.html","af6863928f3a5b619dd9bfda107786b7"],["D:/1/+blog博客/hexo/public/about/index.html","1cf06d3dd7042715c8dd1763e9efce65"],["D:/1/+blog博客/hexo/public/archives/2019/08/index.html","5516d983f3546d1cc7c8f6deb3a33680"],["D:/1/+blog博客/hexo/public/archives/2019/08/page/2/index.html","223116001863b5c3e82b9b19ab9460b3"],["D:/1/+blog博客/hexo/public/archives/2019/09/index.html","0ad753a7a643caf09316ac4846d2f1a9"],["D:/1/+blog博客/hexo/public/archives/2019/10/index.html","7b3ce7ed3e3a8d30db36a61b86ff047d"],["D:/1/+blog博客/hexo/public/archives/2019/11/index.html","b80170cb8ce6ca45f6364a1ef6a74544"],["D:/1/+blog博客/hexo/public/archives/2019/12/index.html","f3ef90762f2f67d317873a77f208f428"],["D:/1/+blog博客/hexo/public/archives/2019/index.html","d1fdf3ad47189cec3458ff2cc6066951"],["D:/1/+blog博客/hexo/public/archives/2019/page/2/index.html","c82f38447d56cec1aa40326d14c2c3d5"],["D:/1/+blog博客/hexo/public/archives/2019/page/3/index.html","f9b49dc99ddb11211dcc0ef3a85773e3"],["D:/1/+blog博客/hexo/public/archives/2020/02/index.html","c4b54a319563178b270b4f40136b9602"],["D:/1/+blog博客/hexo/public/archives/2020/index.html","6d03d7a206e79ad7fe2847f50111be26"],["D:/1/+blog博客/hexo/public/archives/index.html","44ff412d25308a62f9c7831e011cd151"],["D:/1/+blog博客/hexo/public/archives/page/2/index.html","44ff412d25308a62f9c7831e011cd151"],["D:/1/+blog博客/hexo/public/archives/page/3/index.html","5ffdb1a8223a4b58ab33bf98437a6b3d"],["D:/1/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/1/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/1/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/1/+blog博客/hexo/public/categories/index.html","91e9cf6ec0b0f3230cc44eb7147def26"],["D:/1/+blog博客/hexo/public/categories/作者专用/index.html","85ad77d4e21f915bd651c9de02a9563a"],["D:/1/+blog博客/hexo/public/categories/作者专用/test/index.html","70350ca1265fee4b3d8b195371b5b88b"],["D:/1/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","86173099da5a4baa5b0817c55a2759c7"],["D:/1/+blog博客/hexo/public/categories/教程/index.html","4b3e2ead1d0abb8a68741a694f018a63"],["D:/1/+blog博客/hexo/public/categories/文学/index.html","3a9a2ad4efbdf0c5553da8061e9faf89"],["D:/1/+blog博客/hexo/public/categories/视频/index.html","be6915bab2c5f7366b4c555cd7f6ac6e"],["D:/1/+blog博客/hexo/public/categories/资源/index.html","7241f617be516cd6b7f5b47f5983c39d"],["D:/1/+blog博客/hexo/public/categories/资讯/index.html","a4dbfc71c54ea8f67f3300d12764b27f"],["D:/1/+blog博客/hexo/public/categories/题解/index.html","621cc07b50574c853d064e5ff60d539b"],["D:/1/+blog博客/hexo/public/comments/index(副本).html","e4551879d1581a8dbf882d4066a6dc76"],["D:/1/+blog博客/hexo/public/comments/index.html","b3befd8fbe0bde05f020b559d93dfd8d"],["D:/1/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/1/+blog博客/hexo/public/css/style.css","263dfa8113ec51c861784571ae0ef6d7"],["D:/1/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/1/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/1/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/1/+blog博客/hexo/public/friends/index.html","9ab6ac043ddb436a2915799d31ab27ec"],["D:/1/+blog博客/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/1/+blog博客/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/1/+blog博客/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/1/+blog博客/hexo/public/index.html","3e5085aa6a032aa7f3620fd998a9d63a"],["D:/1/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/1/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/1/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/1/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/1/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/1/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/1/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/1/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/1/+blog博客/hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/1/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/1/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/1/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/1/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/1/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/1/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/1/+blog博客/hexo/public/music/index.html","8939645bf61844a68dc1b986ccb144c3"],["D:/1/+blog博客/hexo/public/mylist/index.html","b03d247d2779cc8459ee369fba1f334f"],["D:/1/+blog博客/hexo/public/page/2/index.html","1263bd5616a53c14dabcbf39adfe3801"],["D:/1/+blog博客/hexo/public/page/3/index.html","0aecb8e52d08d1d304b4910e22bb66de"],["D:/1/+blog博客/hexo/public/share/all/C++.html","55f3056215379750a97c518610c0c314"],["D:/1/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","ebff1b58fb27c32a8329148434dbe98b"],["D:/1/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","ffb57249114660cba50dfd28d595d584"],["D:/1/+blog博客/hexo/public/share/all/工具.html","9c59c61f7980fee0e777ce0534df788e"],["D:/1/+blog博客/hexo/public/share/all/游戏.html","c57ac79471f9b96f045e1073ec0e3bcc"],["D:/1/+blog博客/hexo/public/share/index.html","c1dc66a5a9a2d12ea0b7e62fddf16a54"],["D:/1/+blog博客/hexo/public/share/备用.html","4ae52a6b10d49bec10632cbec64cdf3e"],["D:/1/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/1/+blog博客/hexo/public/tags/C/index.html","bbe1895500feb377371688db07b61764"],["D:/1/+blog博客/hexo/public/tags/CDN/index.html","f82116839596a99d25b10d8542d63bad"],["D:/1/+blog博客/hexo/public/tags/Hyper-V/index.html","cdcd55a26799ac90b50106e9f244bde8"],["D:/1/+blog博客/hexo/public/tags/Markdown/index.html","6bfca2442eee21885728913acc877f80"],["D:/1/+blog博客/hexo/public/tags/PUBG/index.html","a06c5ef5eb6496c0ccbaf17f5e68f641"],["D:/1/+blog博客/hexo/public/tags/Proxyee-Down/index.html","0a06744d217537a9f631c1a4f1419241"],["D:/1/+blog博客/hexo/public/tags/index.html","0c6e4433ebf65b4f206e6a98d507dc0a"],["D:/1/+blog博客/hexo/public/tags/test/index.html","7dbbb6a4648c47393dbafb7cb56d4cc1"],["D:/1/+blog博客/hexo/public/tags/作者专用/index.html","7585b5c34e319b1483c4217b21c8e16e"],["D:/1/+blog博客/hexo/public/tags/全面战争模拟器/index.html","33bb7f1c1347e46492244c4cc0dd8a22"],["D:/1/+blog博客/hexo/public/tags/加密/index.html","2a98bb7060d93ff3981069157319d477"],["D:/1/+blog博客/hexo/public/tags/加速器/index.html","335fbbb75af42f6ff0c7edff2263dfb8"],["D:/1/+blog博客/hexo/public/tags/导航栏/index.html","74895b67581bc7b19c37e427ceb285f6"],["D:/1/+blog博客/hexo/public/tags/教程/index.html","a68b70943779a9e4f14319e5c30fd954"],["D:/1/+blog博客/hexo/public/tags/文学/index.html","9c35b8c27f6973282a79154bd159eada"],["D:/1/+blog博客/hexo/public/tags/游戏/index.html","c8cce5b834a0a1fb8cabd138f1b86ca8"],["D:/1/+blog博客/hexo/public/tags/百度云/index.html","996bc925aa67c62037c37117d9d88427"],["D:/1/+blog博客/hexo/public/tags/虚拟机/index.html","8c6e428630db3630d2f39c59b6d8f8b6"],["D:/1/+blog博客/hexo/public/tags/视频/index.html","8b1982de68d303c336d509914ebf2d9f"],["D:/1/+blog博客/hexo/public/tags/资源/index.html","e587c058ae358e19c5d6a5510a95d191"],["D:/1/+blog博客/hexo/public/tags/资讯/index.html","691ccb8459ce836809ca4baa3d3d9dc4"],["D:/1/+blog博客/hexo/public/tags/题解/index.html","8740f97f8bebf19127c9f9ca03d47c4d"],["D:/1/+blog博客/hexo/public/tools/all/base64加密.html","08cb881ba123d135f68fddc84279e411"],["D:/1/+blog博客/hexo/public/tools/all/元素周期表.html","849625f91bd166b488c1ff04c63f97dc"],["D:/1/+blog博客/hexo/public/tools/all/圈小猫.html","4b9e30aef52a9b9457b5920c2378a81f"],["D:/1/+blog博客/hexo/public/tools/all/科幻时钟.html","d37f6c20d281be85989fd1db89a6f923"],["D:/1/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","b50bba5ecd17b9c8dbbf68545a90806b"],["D:/1/+blog博客/hexo/public/tools/all/随机密码生成.html","00bbf1f830936d9ac5795ef7828704b6"],["D:/1/+blog博客/hexo/public/tools/index.html","c6641f697fc3f07f3d92131f37cfa6e4"],["D:/1/+blog博客/hexo/public/van/index.html","fabb407746fe2882215ff450773743e9"]];
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







