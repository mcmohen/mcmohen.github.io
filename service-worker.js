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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","69f4538368fd2bd97c24d89896c081cb"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","e786fec1f54a1a459edeaef17951c24c"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","fa3a73da4c83ec501309a2abbbd5b68c"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","4729e8ad25aec00fb02ea38d29e4bbf9"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","6f8e0a60425035518fcc928970021aeb"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","904f012a00a421c9c60fb9a2be098cf2"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","1133a49838ab2fea03b2abd121068130"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","6ada33e74c6d9412b0b50cd37106ef91"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","3595870db184233aa13fc6695f479ec4"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","cc03f28e98f036b2757a50a00a8c32f1"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","7e6b668f453f80be03764671e7ece624"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","ff99b7d59be38582b43fba10254e9fb4"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","a22f58a418b7c3e76a2a84139521574e"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","e3a9e8f34e83381cd95764fc4b7d6e4e"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","28969d84def303b0c31f3b1d3094a09c"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","9b176dc38f96d5f277f3efaa707da236"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","2d0e2626b7593984c44c3065eb4c66ee"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","ce4b8627f3af3dc234143dd84717589a"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","6cf95b2892d99d8d64795ba5c0525c7f"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","c5b089309983f9cde4f889c359692772"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","3c139b6e587e52946a82b04a2c15dd81"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","f2c26a79ac2019626c5afb498c0aa7c8"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","3508fc600d1bf67ad9b7b13f3318679a"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","46adbe11f449f966c076300e39b29029"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","b7c149e49030ba1ab221c315c05d2b5b"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","c50a896f562c5520a6c2c6c882559339"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","8f13f500a6ec3b13db90796fcd581de4"],["D:/+blog博客/hexo/public/2021/01/10/教程-我的世界开服/index.html","1687613659ebb93843bfcd2bad8b9249"],["D:/+blog博客/hexo/public/2021/01/10/文学-深圳实验中学部校园学生指南/index.html","b6095047a5c0c5eb466b8bb83890bfcb"],["D:/+blog博客/hexo/public/404.html","8abe891671458101435f789c33a49d5b"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","69ea5fc3395b6b12a1abb9e99c21586f"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","869a0d44d7408422ae55813ba35aee5b"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","a7417560c89bca399fe8025ed37698d1"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","6631d058675ced48c06e409263a47951"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","29fb208e668bb90413ffda6e71da9660"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","b03d638a81bfe94937e0bcbe4d357e6d"],["D:/+blog博客/hexo/public/archives/2019/index.html","05fbdde5878bf457d1460a2e60877e40"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","6a4d44cf440196b298c33110107ac52f"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","ea39ed3d282555e03155cf820518ad7c"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","e5525525e109d611e59f725be9551457"],["D:/+blog博客/hexo/public/archives/2020/index.html","1a90632207e551701a2b525185fb852b"],["D:/+blog博客/hexo/public/archives/2021/01/index.html","3c4bd06a04fa62787d4de2a8b9bee666"],["D:/+blog博客/hexo/public/archives/2021/index.html","e444b7c83988d0ede711d7f2cf1bb316"],["D:/+blog博客/hexo/public/archives/index.html","95130d035def338a40780279ae6a12f9"],["D:/+blog博客/hexo/public/archives/page/2/index.html","95130d035def338a40780279ae6a12f9"],["D:/+blog博客/hexo/public/archives/page/3/index.html","dda51c6a269d0944cc2a948bbf2dfec5"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","114f41ea663686213956618da37634b0"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","f84277d463a64fc3012d1ded52a3a1dd"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","c12df3fe7410186640e6124c58effd7f"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","eac4ff6e29df4009192e2fa5c7a09e75"],["D:/+blog博客/hexo/public/categories/教程/index.html","0ed654df296f8fcfe3fdff229c70197f"],["D:/+blog博客/hexo/public/categories/教程/page/2/index.html","de89a9eed3450dde2175a9e76235129f"],["D:/+blog博客/hexo/public/categories/文学/index.html","55ef2ee186748330c3a76e49b574ade2"],["D:/+blog博客/hexo/public/categories/视频/index.html","0c3910aa14c0ac66d0288122f9ba42f1"],["D:/+blog博客/hexo/public/categories/资源/index.html","15c32d1157cc6a6aaefb6b585aa0e847"],["D:/+blog博客/hexo/public/categories/资讯/index.html","fa7b389e73de7b98562c89ded93243f6"],["D:/+blog博客/hexo/public/categories/题解/index.html","b77c59ebcf2e8778c2cf3c01cd3f8b35"],["D:/+blog博客/hexo/public/comments/index(副本).html","79d01e63df007c20086ccd364b338268"],["D:/+blog博客/hexo/public/comments/index.html","197e6beed30a15ca15625d3ad076588d"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","b937357a4ea304be3f21a4b7bbe6a2cc"],["D:/+blog博客/hexo/public/hide/all/深圳实验中学部校园学生指南.html","67a29c85f397b3a94c06169e3e63150f"],["D:/+blog博客/hexo/public/hide/index.html","71e77eb0dcf3b3beace5b0fb5013a648"],["D:/+blog博客/hexo/public/index.html","66e360cd0a79501d310ee44cc0ee4a20"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","e6c8f7d0e1759e0251941671675c56f4"],["D:/+blog博客/hexo/public/mylist/index.html","76e32a88e260f0c6e577fb48cc7e695b"],["D:/+blog博客/hexo/public/page/2/index.html","cebe58e3f5b84b1d959e48e2109a97c7"],["D:/+blog博客/hexo/public/page/3/index.html","7eca892be27e53698e31b7ee9b72a002"],["D:/+blog博客/hexo/public/share/all/C++.html","d4435766c05e91dc294a515c1ca3f8b9"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","cc952577f64e42ebb6d7ee33ec41779e"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","aafcbbf01f60cc702fe25422140892b1"],["D:/+blog博客/hexo/public/share/all/工具.html","9259de8f8a8c5d801f5fcd2262460b2b"],["D:/+blog博客/hexo/public/share/all/游戏.html","c0aa378a4bf645cec060d029532a1c1f"],["D:/+blog博客/hexo/public/share/index.html","7b976dffbf48a509a71a59b309113917"],["D:/+blog博客/hexo/public/share/备用.html","f569e5d452b93dec1c7074d9acb5d500"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","3538f2060ed89f747fab926465e115fb"],["D:/+blog博客/hexo/public/tags/CDN/index.html","629e8d901dc388ec3bc45b466150fd15"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","f506eeae2e6a17ae8aeea307774b3968"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","199b503f1d74c3d600a58b084eca45df"],["D:/+blog博客/hexo/public/tags/Minecraft/index.html","8ae14c870a42d71ad336f3afd08623c8"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","67292d81ec9a84ebf9e2bd03a9f21432"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","c1067aa4b50cadfcbc3b4dba292f3d95"],["D:/+blog博客/hexo/public/tags/index.html","3236ec36d41b9a96abed5d77b3d8a1ef"],["D:/+blog博客/hexo/public/tags/test/index.html","7062ef19c42a26f5fcc4b8d709e0ff36"],["D:/+blog博客/hexo/public/tags/中学部/index.html","622288338eb3b6a706930a8267065b47"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","7367a774725c5034eb0659ce66166fb7"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","7be5861469f77d4592eaba75a3e3f991"],["D:/+blog博客/hexo/public/tags/加密/index.html","07dab64507f00129da8f5752edb884a7"],["D:/+blog博客/hexo/public/tags/加速器/index.html","05549e13d68160540b954307c48e1825"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","88c83ed61ef80fbd7fdb6fcb42148198"],["D:/+blog博客/hexo/public/tags/我的世界/index.html","8ea0d5353c3104d1f31d0cc4b4c635a6"],["D:/+blog博客/hexo/public/tags/指南/index.html","16fb6dde921e9547c64806c6074484c4"],["D:/+blog博客/hexo/public/tags/教程/index.html","55ca8272097dd724db0ef4d568120a1e"],["D:/+blog博客/hexo/public/tags/教程/page/2/index.html","050a40faae192515c914fda18719aab9"],["D:/+blog博客/hexo/public/tags/文学/index.html","c2d5c56ba400ff3a52384c025e2fcc7b"],["D:/+blog博客/hexo/public/tags/深圳实验学校/index.html","bcdc72adfed21fee51574be7cb9032db"],["D:/+blog博客/hexo/public/tags/游戏/index.html","8646f52c97173b5c330fd84e9a842ab4"],["D:/+blog博客/hexo/public/tags/百度云/index.html","8d561a0c2e411dc0c96a1d8ad8336288"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","2b889e306008c261f0321dfd3102d1e9"],["D:/+blog博客/hexo/public/tags/视频/index.html","2c06156602e728a611772afd992898a2"],["D:/+blog博客/hexo/public/tags/资源/index.html","52cc333ea123ef6e1b37cf8fa6623155"],["D:/+blog博客/hexo/public/tags/资讯/index.html","51f14acbb57e2d95b70890e7661b94b0"],["D:/+blog博客/hexo/public/tags/题解/index.html","4adc8f9f0b464b852ef1cdb64cb9ca8a"],["D:/+blog博客/hexo/public/test/index.html","db310e104af8c32b09bbb736e266ba67"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","5b4fbeb29e704c920626acc73d7cb158"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","b42a3ce3b0f8722fa9537976cfe9007b"],["D:/+blog博客/hexo/public/tools/index.html","ee4e2adbfc9bf5f212b0d27e4fc96f72"],["D:/+blog博客/hexo/public/van/index.html","72e2b025de27380a206531cfea28ff82"]];
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







