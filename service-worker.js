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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","b70aa00bb5e86648858cb0780bebad1a"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","ed8b6beaec246c03519f93732cbab65c"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","d96e0ddc141f36ab750b814a0d4cd2d7"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","f7f71f7341f6b71fcb20541c90a05cf0"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","3da11a96ae88b4168d13e6cf9549e023"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","cebcff1a06c411dfb8c41845f6bc93bf"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","4c80e9002d591066e27dc7cc0ef54a78"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","7dd44d3bb2f812aa2fae750428d335e1"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","55368be2647d428eb200a015102191de"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","bd1dfff49e043a76e57ea65eed0478ef"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","98ec540455ddef8453a8af7be59b8df7"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","4495b12c3060cde087702586ec001c96"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","cd7d63bd05909b79fb0c18389dcc7c29"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","195c236c26ba9009629d0db8ae249272"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","d378f5b89e9239f489789a41b30843d6"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","9199c4427420f51e97eee184c604f621"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","86196bbdbcbd5f7d41e635ab6e82ac54"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","8a1475933fd04d6c3f77b3388604a268"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","e7d1f3d5b7922bc2eae6804d5c5be76d"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","177f1078c59944d803a122e30e2c8793"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","d8685472070ee4c8f829862f205cec2a"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","bf8b45a524512de888b3a9cd2f019b88"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","94fc860a5d9a35438d072cdde4ada166"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","95749e4a6e0abad80222a745d7731d4e"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","2493b1eba2d9902328b27e1e67c52768"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","e179adda381514d9ae9e9e04aef51763"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","ca21ba744c5970ea25fbc6b3d437b42a"],["D:/+blog博客/hexo/public/404.html","0e06b57a0ef391d8697d099743e47ccd"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","415bb047ec14f66b95b9872f4be1a256"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","b69308094d98f1c04f52833e96b281f6"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","2206a15d285a85eb8c67bd791fd2d553"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","153abf58a760a77efa36df70a6f75698"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","cfa7649d45e34538c570d739a38e786c"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","407505134451eac8225cfaee38a6f23c"],["D:/+blog博客/hexo/public/archives/2019/index.html","93bff8d3564d085abfe037cfb63ec4dc"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","f44d9cc92e57c418915c442cd0a0adcb"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","4b8800eff7de941bb9a81fe9312fa03b"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","8c5820cb41161d7e02c18e3c0696ab8e"],["D:/+blog博客/hexo/public/archives/2020/index.html","ec2c5f18e7061cc3a9e9d17c574e70a4"],["D:/+blog博客/hexo/public/archives/index.html","ebad62386b15f9e458e96d01b37dc0fa"],["D:/+blog博客/hexo/public/archives/page/2/index.html","ebad62386b15f9e458e96d01b37dc0fa"],["D:/+blog博客/hexo/public/archives/page/3/index.html","3c42c653480e12a841d151a6718b4d07"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","d57f10fda75c397449394a3d4fe1eb15"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","91cf5938fa74b88e75ad849e8fd6c71e"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","06ee2ba8548b3266b85578fd0bd42d16"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","d2d5e64bb85c9929c96e119010e82bbc"],["D:/+blog博客/hexo/public/categories/教程/index.html","b4320e2ff69d2bb8b3f425827abac799"],["D:/+blog博客/hexo/public/categories/文学/index.html","b17b7ff7c6fce87d53acb2caa21c19d7"],["D:/+blog博客/hexo/public/categories/视频/index.html","eff5ceb0164b25069a7fb98d0aa574f5"],["D:/+blog博客/hexo/public/categories/资源/index.html","751406c8cd3c13c657f544cb2e4ee2ff"],["D:/+blog博客/hexo/public/categories/资讯/index.html","9f52716f0a5b12455c9e541cf0eef380"],["D:/+blog博客/hexo/public/categories/题解/index.html","e8f8469ba010567f1001c0f428c31c71"],["D:/+blog博客/hexo/public/comments/index(副本).html","556bf24fa5dfb9cd76314de3e4e8d98e"],["D:/+blog博客/hexo/public/comments/index.html","59cf3f18e365be76f456f2782b87d01f"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/css/style.css","263dfa8113ec51c861784571ae0ef6d7"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","d3e202ff7200327690c2155288bfc296"],["D:/+blog博客/hexo/public/img/algolia.svg","7907ab6b9a7b05076e0751fa3a0bda3a"],["D:/+blog博客/hexo/public/img/azure.svg","570248db796e292bf7b59a650cd079c8"],["D:/+blog博客/hexo/public/img/baidu.svg","dc8c2616588c33ff4f70f43579c639d6"],["D:/+blog博客/hexo/public/index.html","12a190e384788aa44081cb4bf3e803af"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/valine.js","430596db58e60567246c52c474816ee6"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","7a5a1581ea4dd29548b8cf29bc2f4090"],["D:/+blog博客/hexo/public/mylist/index.html","c28ced4afda7c3956082c8e08952bf52"],["D:/+blog博客/hexo/public/page/2/index.html","24a81bf6faec04561f143dafab988eb3"],["D:/+blog博客/hexo/public/page/3/index.html","02246ab15a49b14d2688af8f72a649b9"],["D:/+blog博客/hexo/public/share/all/C++.html","f47b5646a185dc3c184a40dfdda773e3"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","d4719834d5d075d0880686d076092631"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","84cdf039761ead483f1b1397107ed1a6"],["D:/+blog博客/hexo/public/share/all/工具.html","cdd03a8aa8c242904f77dd44ab528d8b"],["D:/+blog博客/hexo/public/share/all/游戏.html","f593729b0c7817c1a6854a7550cad9b1"],["D:/+blog博客/hexo/public/share/index.html","07481ef08b841cb7eb491f08ee061648"],["D:/+blog博客/hexo/public/share/备用.html","f67c7e2777be8becfaf80a96884f421a"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","bd0dc55f4deb0c24f08b305f10debd5d"],["D:/+blog博客/hexo/public/tags/CDN/index.html","8384e28e6ec154e61672cf7a9ad91745"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","29f99354e24c264749bba8e075108860"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","c707a3ccb3699109a7b1d1c6a8574137"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","72fe33c090c8c6335fad77e145c57ada"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","9a87a64ba19d3e090be6f7d657a1904a"],["D:/+blog博客/hexo/public/tags/index.html","5297cf3b6fe54e7824332778602b66a0"],["D:/+blog博客/hexo/public/tags/test/index.html","c6f184c32dff334c77e66160e239b28c"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","dcf7977183fa71005d70318d42836dab"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","4d5b74cf1718ccd07cb4d36d32c554c2"],["D:/+blog博客/hexo/public/tags/加密/index.html","2bffb6aa4863ec97c0a0f13e1d8e7c0f"],["D:/+blog博客/hexo/public/tags/加速器/index.html","8299c2cc815d7b672d34286c282dbc2a"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","88b86b591a6c6e693ab87dc329881bb1"],["D:/+blog博客/hexo/public/tags/教程/index.html","bfb6102053520eca019e0f38d2bbf2f6"],["D:/+blog博客/hexo/public/tags/文学/index.html","3e8992c36d432ca28aa44c5d6afe1a5b"],["D:/+blog博客/hexo/public/tags/游戏/index.html","50b47fa5b112c51e66917142fe96e0cc"],["D:/+blog博客/hexo/public/tags/百度云/index.html","43b656124bbe2bbbfaef0b183aa3adb5"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","5c07cc4efe6c185a2ac20e8d5896429f"],["D:/+blog博客/hexo/public/tags/视频/index.html","6f2a5e548b6d095aa5e1a36d3f44647c"],["D:/+blog博客/hexo/public/tags/资源/index.html","3f1cc8ffbe51e9d69fb1175a1ddea22d"],["D:/+blog博客/hexo/public/tags/资讯/index.html","20ad8b064ddced8ec0ca7c73875bb5be"],["D:/+blog博客/hexo/public/tags/题解/index.html","93e97f684a597c5cda6c3f4f3065e8bc"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","deac5c02129910684e99c6d9da8063fb"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","00acbc8f938e5092824ddf0584d95164"],["D:/+blog博客/hexo/public/tools/index.html","879e0875feb15407e3cdf4e8285bcefe"],["D:/+blog博客/hexo/public/van/index.html","57d81044d5ac22877289c9fc5549912f"]];
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







