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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","7a3289e4f56cd1d76f454437aa17274a"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","7494af2ea777775f7182b073bca59e4a"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","07fea74dffbf9f7bc1b039ff27179a5a"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","c421f1a874c77b51f822a2c1bcb889c8"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","72a4cf31db6d6832667b80a70cbbb1f3"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","4b5cf70c93069857a81c592e151a33c9"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","e84f2ac6f3d1b566925fa06f745cf0a4"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","3b8953f058eb7f3caa8c9aaf0f273dc9"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","2277f3b6b607f375d1e2648b1e3f5f18"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","dde18244a601c8485156e6abdececde8"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","168222555b74c9f236ab17da7ccbddb9"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","da34d8df203c829ebcfe5ebfb7ac9599"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","7b18763f58230db5572eefaa8a66e88c"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","8fd0ac568d1e8b02c5b30e1a93b6441a"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","363a372cbcfee67183ac06de1e81265a"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","c4d28850b0c45eab7a7a4e3601866e3b"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","24d2dfd7f00775582d3b58dbcbaec5cc"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","0ba034237f1d4827b84ef1cd45d77847"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","591e8f9bc634880c13ba7eb45a809cf8"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","45eac35d4e900731df22265c06cf37ac"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","eb3dba81b087e755c0b111bfb23e2e18"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","4c9908bc0002f39c7a22f6d004faf37d"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","a057592fff4e281acdbfe50f84eba384"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","949d9cf1b0d7cb569f5373d6fe15b00e"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","116b3a7cfaf6387dcfbdfb44146c2a08"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","834fe400f26716f9f8639e1601ac329f"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","056d30b6683645e76e0f9c730d811d2b"],["D:/+blog博客/hexo/public/2021/01/10/教程-我的世界开服/index.html","f6b96882256f8e16367789d392de1c5c"],["D:/+blog博客/hexo/public/2021/01/10/文学-深圳实验中学部校园学生指南/index.html","7a33c3d0dd16e3b4ee6deb7108605799"],["D:/+blog博客/hexo/public/404.html","a3ec4d47438d4ae576bc88b11f8cebea"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","6700be85e58b60b485d6a0396a2798a2"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","568230ee9ad4f56ee484211907af8355"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","538f3e09c41ae5717aa6e59e7ef84cbe"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","4c1e6819feab798590edc3447dbc3d70"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","420fa3bcc391bc1cb5f43dd0b5b94176"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","e426f18864f8b15d60fa6883cc324899"],["D:/+blog博客/hexo/public/archives/2019/index.html","e91e36a4baab370f800fae687802815f"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","a270f6b453d3efc7a81b7cc861813b31"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","5a7a158520c9466697329e1ddc74cbb6"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","244e5fdd7d981d0239e588339f0cf9a7"],["D:/+blog博客/hexo/public/archives/2020/index.html","14b154ad322a4bf29f3edf3d79348b63"],["D:/+blog博客/hexo/public/archives/2021/01/index.html","42b11dca2a7b7187dafab12f1e539551"],["D:/+blog博客/hexo/public/archives/2021/index.html","731bf1af91647140138208330950b89d"],["D:/+blog博客/hexo/public/archives/index.html","634d81903578abeb554093c2e8adfdee"],["D:/+blog博客/hexo/public/archives/page/2/index.html","634d81903578abeb554093c2e8adfdee"],["D:/+blog博客/hexo/public/archives/page/3/index.html","a710978dea578e0846faf51615b10663"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","650ff48a63e7e1fdf344ddacb173e820"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","ba1c2ebecf3a9c57f5ebcfc831d395db"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","56197bb74a3134d893b86fc3b84a4aae"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","a58e684344e1c9f3866990643bd7c5de"],["D:/+blog博客/hexo/public/categories/教程/index.html","db668d4d340597be71cb783f49389434"],["D:/+blog博客/hexo/public/categories/教程/page/2/index.html","1f88033539fc23b71ca256038fafb4b0"],["D:/+blog博客/hexo/public/categories/文学/index.html","e7c382c276110d5817a6d7ece3bf7eaa"],["D:/+blog博客/hexo/public/categories/视频/index.html","826fc844b155756bd97160fd00573d8d"],["D:/+blog博客/hexo/public/categories/资源/index.html","e68501c1dda738854ddc620ec24eed4a"],["D:/+blog博客/hexo/public/categories/资讯/index.html","d9d8eae009b1b8474d3e2900d7073bdc"],["D:/+blog博客/hexo/public/categories/题解/index.html","279f2f0035067e5486d332b51091f34d"],["D:/+blog博客/hexo/public/comments/index(副本).html","c2da2d17ae838b04e22bbb57b680fc95"],["D:/+blog博客/hexo/public/comments/index.html","2a645cfbb7ea385e9a0c6345240feacf"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","e9d22eb96e1bf5da8650070d30eee0f8"],["D:/+blog博客/hexo/public/hide/all/深圳实验中学部校园学生指南.html","7037d7cf6e7b02ce866e2dee45c0f49c"],["D:/+blog博客/hexo/public/hide/index.html","53b3c5534a4377c4a54539b42872a64c"],["D:/+blog博客/hexo/public/index.html","96e9b0c9091e4f913851f39e0c3a12aa"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","1945600ab2ad13ac8cf9c2f7b85b7ecf"],["D:/+blog博客/hexo/public/mylist/index.html","834008177fd086139426795f336e6311"],["D:/+blog博客/hexo/public/page/2/index.html","76cbd3c1e1d253bed9df6defd470fe56"],["D:/+blog博客/hexo/public/page/3/index.html","cd11a8851731ec2f6992f409ccd84ceb"],["D:/+blog博客/hexo/public/share/all/C++.html","77cd5c611ce8680ade7710d47035458c"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","f9474abdca00234a260a82cb1598daed"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","f4e100aba0043dc1e41c5e9b7b016c27"],["D:/+blog博客/hexo/public/share/all/工具.html","823215d6c43ea104f07bc3d1f4584283"],["D:/+blog博客/hexo/public/share/all/游戏.html","bd5db68e2ef942cef712e8734e0a3ad5"],["D:/+blog博客/hexo/public/share/index.html","5cc1bb9d8e6734f6ce84b38075ad719e"],["D:/+blog博客/hexo/public/share/备用.html","7c4d1bc2c3eab20a7d1ed56616f0f7d9"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","32608e5c2cee901b75adbe7963e64d08"],["D:/+blog博客/hexo/public/tags/CDN/index.html","67d76c2b6a5c03c6efc4359c67398e15"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","92e4d6dfa539de8633b0fee939d281b2"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","5597dbc295e5faaaf67ab1514fbca955"],["D:/+blog博客/hexo/public/tags/Minecraft/index.html","d85b689d609e6dc559689f65a8385337"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","a36fc49b456104820f8ee59220fd3d63"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","38d675bb1b1a24afe7a3aa55cc9bef41"],["D:/+blog博客/hexo/public/tags/index.html","9cb662e12ea3acb35489c6f1290d1696"],["D:/+blog博客/hexo/public/tags/test/index.html","80d669081d6c46ae91282cb4d181279c"],["D:/+blog博客/hexo/public/tags/中学部/index.html","b5a3dee0a64fd181b0af827bf374d965"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","f8db19c08cefffb5724801f92e2bd0aa"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","3447d68ec3371ec95ab68aad5919fdfc"],["D:/+blog博客/hexo/public/tags/加密/index.html","caeae969091c1328cd17c98714bdfb53"],["D:/+blog博客/hexo/public/tags/加速器/index.html","f13ee5b76ee9517188b026fd8865f55f"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","6a5d31f668163734cc89b5925b3b6de1"],["D:/+blog博客/hexo/public/tags/我的世界/index.html","d6ad0540cbc2903b59b0362daee76df3"],["D:/+blog博客/hexo/public/tags/指南/index.html","6d314c180bc80ea50b7effc5098afd05"],["D:/+blog博客/hexo/public/tags/教程/index.html","8de96d05afe28da546d7856137c8d580"],["D:/+blog博客/hexo/public/tags/教程/page/2/index.html","c25c21192914923ac6eb65ef7cd44310"],["D:/+blog博客/hexo/public/tags/文学/index.html","d27bab1e2c1408da73ce413a46a5d688"],["D:/+blog博客/hexo/public/tags/深圳实验学校/index.html","9aee3b3cec939165e2846f7e028991ec"],["D:/+blog博客/hexo/public/tags/游戏/index.html","344c0c11a99e6cbd536b999700df0ddb"],["D:/+blog博客/hexo/public/tags/百度云/index.html","e196440270c4a720bd292d01f178be53"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","b0b65140747657b4a1ee5f65e439208f"],["D:/+blog博客/hexo/public/tags/视频/index.html","ab7a022ea973c6010b17abf524f29bb7"],["D:/+blog博客/hexo/public/tags/资源/index.html","f3913843bf21dac0248b0a0de797d213"],["D:/+blog博客/hexo/public/tags/资讯/index.html","f3dcb7f659161201c770b02bfaf8e988"],["D:/+blog博客/hexo/public/tags/题解/index.html","e58aa4a72b255c2be37ca56b242cedc9"],["D:/+blog博客/hexo/public/test/index.html","db310e104af8c32b09bbb736e266ba67"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","917446021f324e708e65506371769b19"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","bf4077f33613f11007b0bbd42557953a"],["D:/+blog博客/hexo/public/tools/index.html","42651c3c12f7a90acf7c7bc3afdd93f6"],["D:/+blog博客/hexo/public/van/index.html","1ff0f949b021b015efa73c9c2350af7e"]];
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







