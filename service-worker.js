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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","a44fada8559fc500a54aae3ec7eccfb7"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","36401f8f67bb7167cb2997098408b03c"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","35b33ab7633bcd58ada41a2015e1c3c4"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","cbec2fd0fc2dfa8b1c5c6c05c22f4860"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","f9fc4c7d26862ed31685351a87071267"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","dc8f1cf57995c87892db104537b33b2d"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","5b2478bdd9fc6e4b64d6c6a2802df5e4"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","caece2f0b5dd253d6373591833b001eb"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","4c2b4b650ac5888df5f504da76b8d7f0"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","a0bf07ce126654c975b421645bdf666d"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","c9791f28a3653e4277dcf41be34c2131"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","2ad1a8257332a3a589d1e12af5d49b72"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","92ad04800a591feaf1effbb5ec0c73f6"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","768ccc1b9ee819296f787eecdffe550f"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","1dd3c1b3365a4a50d8acaf9bbf9a2c27"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","37277a7eca23d06d81ae20db580c3fd8"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","517206554195b1ff2a805b2a41c95534"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","d7c7b77c29180e07b15acee631b60705"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","6bd23df5c2db1857f95160d19262bac0"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","1c56a02b99ac5ed4cc827333a7ba9b33"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","870c216fb4008be8b099749bfc0969ce"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","5ea816233c7b00f40ccee449e90702ca"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","c286a717831f93657daa12366d644b8f"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","5c7fcc574cf5a93d53c594251b201748"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","c40705bc3870f87ca340efeb6b67f089"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","1df0a94a049bff88259de116dd5e301e"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","66238a59a17a46138aa14a2e766c6d88"],["D:/+blog博客/hexo/public/404.html","7fc5467f844d737e00b99bad5d566b27"],["D:/+blog博客/hexo/public/COVID-19/index.html","dd3ac077f0e89fae9315882084bc348b"],["D:/+blog博客/hexo/public/about/index.html","6ea263b4b42376c4556489bf208a8099"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","b2ed2d5465ab0667b072a19c695d0895"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","ea335ee87c6ef61671cdc790946c59f6"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","d1b9a85b86915b957b53943c6299b735"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","cb9fcca3d44877cdc96b179bbd5ed457"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","558cab313685a1e44e642466b70f950b"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","44887d4b0a9a84e485f6542df5e70bd4"],["D:/+blog博客/hexo/public/archives/2019/index.html","73a194390e2208b45ad63349d7d9ccc3"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","1c1874fee67391adeb822c18bb48435b"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","8e9552621f05e5b45512fbaf4843bee6"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","6e953461b3d8ed8e33aa2e941fd041e5"],["D:/+blog博客/hexo/public/archives/2020/index.html","96f34ae34d590d8517a39090f0da38c2"],["D:/+blog博客/hexo/public/archives/index.html","43a13592e90587de7c51e8ae240ef111"],["D:/+blog博客/hexo/public/archives/page/2/index.html","43a13592e90587de7c51e8ae240ef111"],["D:/+blog博客/hexo/public/archives/page/3/index.html","e7b4be706078b0de62e00b06c93aac40"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","a0ce3bd2553dd95d693d0431f83f4df2"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","dfb00bc61e72a6e644af219991bde9ad"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","066a5f03bdb4ea56a0c72d25c77a362d"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","73eae7e78be2d7ab52c41250200de3e5"],["D:/+blog博客/hexo/public/categories/教程/index.html","f041473fe222bbb5c48b29cd1b213684"],["D:/+blog博客/hexo/public/categories/文学/index.html","534ddfb55ee7b4fda277e6d27ba7b744"],["D:/+blog博客/hexo/public/categories/视频/index.html","4f0e47631b85bd89342a4eeb1585a25a"],["D:/+blog博客/hexo/public/categories/资源/index.html","d5393c0a557464b7fe17c82955603736"],["D:/+blog博客/hexo/public/categories/资讯/index.html","16e5e32e30757fea0c54eed24a0c9cbb"],["D:/+blog博客/hexo/public/categories/题解/index.html","90b8d7101ae7b99f9998f5dcb2483cdd"],["D:/+blog博客/hexo/public/comments/index(副本).html","d4384735fcc5d95eb46b3cc9376a0a78"],["D:/+blog博客/hexo/public/comments/index.html","99dd094203dbc48c1f56f2761bfdb5bd"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/css/style.css","263dfa8113ec51c861784571ae0ef6d7"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","59259d9dcd0b322da40b3d1fdda29384"],["D:/+blog博客/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/+blog博客/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/+blog博客/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/+blog博客/hexo/public/index.html","91e5aa661d12f4da8cbac821013cd5d0"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","8a05027c0c84a9522d34a8823936e0b4"],["D:/+blog博客/hexo/public/mylist/index.html","6f6fa7ae84a4fbac47069ed550523fdc"],["D:/+blog博客/hexo/public/page/2/index.html","1fe3dc30931bb873bfc4872738db54cb"],["D:/+blog博客/hexo/public/page/3/index.html","787dbe98854f79838c81752d46bda679"],["D:/+blog博客/hexo/public/share/all/C++.html","d1ae14ccdf375e503b75c8c9459c298f"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","30b4824d31514228ddc531d36c5fa25e"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","ab4882198f71c4f1d2822ce26e1cc34e"],["D:/+blog博客/hexo/public/share/all/工具.html","89b4ba09566d1ad818bbc2a94a42c970"],["D:/+blog博客/hexo/public/share/all/游戏.html","8e07b0e0e7546a418af432ab6b64536b"],["D:/+blog博客/hexo/public/share/index.html","30c8079c9a433f60103928b1a88c8752"],["D:/+blog博客/hexo/public/share/备用.html","45397b88b6d58f388b7346930276677a"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","f461f14adb8782aa7b279c86526cad0d"],["D:/+blog博客/hexo/public/tags/CDN/index.html","1c866e3833e3d4a4aa029d077e4b30b1"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","b30aa7f8f128cf9f341c1898f7198b06"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","0ede25b48398df477b383dfaf2e571fa"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","177176d67edbdc5d4731d190438f5cb6"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","00a1d36af611260aff7c823fd20c887b"],["D:/+blog博客/hexo/public/tags/index.html","4cae1413cf274674b36d9607c7dc77d6"],["D:/+blog博客/hexo/public/tags/test/index.html","ba4df8544833e40e3ce5a6920a40d642"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","f1d59664e74b5317ceafb00d23f0a3ad"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","1e4a14a780fa8467aec65128685dadd4"],["D:/+blog博客/hexo/public/tags/加密/index.html","5b2344d600f21e6c0c170a4b1373dfbc"],["D:/+blog博客/hexo/public/tags/加速器/index.html","7a4ac66423a9644a89b5dec0a859af31"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","66028f1a8cfad9eb0210313836553cc6"],["D:/+blog博客/hexo/public/tags/教程/index.html","e70cf3c255e2c8ee7ce4112624568516"],["D:/+blog博客/hexo/public/tags/文学/index.html","acef2e9433c08775c0e026ca00a20780"],["D:/+blog博客/hexo/public/tags/游戏/index.html","1cdb1056098028f6e4ee308f4cd7c5f5"],["D:/+blog博客/hexo/public/tags/百度云/index.html","fd68d69f5940667b307cefc72259a0cd"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","63ce44585168544d96d3c7969097010d"],["D:/+blog博客/hexo/public/tags/视频/index.html","fd4664888cf889031ac094bbc2eb2ece"],["D:/+blog博客/hexo/public/tags/资源/index.html","6d6fce8cf4695ab6b181283b358ddf0b"],["D:/+blog博客/hexo/public/tags/资讯/index.html","2c4da74d6e47c7c82545d753528dfeaf"],["D:/+blog博客/hexo/public/tags/题解/index.html","04c44d13401dd6bfe7b976445c35b161"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","e86b05dda095cb5a4a13bb2bc858016a"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","920d9f8becac090068b73de2829b11a2"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","adf0328ca017ed02dfdd089f5e97dbe1"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","bb9ad53b6917499a50ad3b79787ee1da"],["D:/+blog博客/hexo/public/tools/index.html","cecebc440ec2cab9fe71bac436a0b330"],["D:/+blog博客/hexo/public/van/index.html","53772354c36dfe914a22df84fe054bfc"]];
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







