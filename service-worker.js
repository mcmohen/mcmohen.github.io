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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","75e66c8d599f2782b72400e84582cf7a"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","c8077e1bbe7d521650d1542d75dea814"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","b405ce9942489e3862288c9dc7be78ca"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","e075fb287fe2d99da89c681d8ee13636"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","01e9d676324e96ce6d598b75358c34ba"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","96edfdf0c7c4dc61da481e285f9e8b3f"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","d941120205e122b1efa02bc0d16fc166"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","9ce14ab412af426d181dc34d2d48ee50"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","7c067ef70fde37cbe0c3a7aae76c8b02"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","1bddac4d79ef11246e38b8811ff0f6b8"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","7943ec1cecb07435b6ac8ce6af9d08e6"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","0fecfc0bfef7add288c12fd00053732c"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","31f5e482d5b51f018387141a7267a615"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","8045936dddda6a1580b1bffb6071197b"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","33f476c857c25b5939a320d1fa164527"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","ca6decefed48544fa542c957dda9f656"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","0bf1b38374e8cbb7e5d346d8b9bac3a0"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","5e12831e7713daa1429c48172dece6a1"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","4582c5e072a81fd0ad6170650d19583a"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","eda9030c4b7dadbf1c59e2e40c5ad75d"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","9b308ee32a5636aa45f37963c31434b6"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","d1ba5a097ee3da63f3608f93d29aa824"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","2d70aca356c0a27b6824c3c4d0380066"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","a71b2b84ecf910ca333984f62448a67f"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","fa67c3da1f9b76c067ab70fc511d0593"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","36a3814f73d5ac1a8af5c5f993ecf948"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","c37910dd95296434ec451ab97ff5ca4b"],["D:/+blog博客/hexo/public/404.html","5f6b29d7f4c2548db355b4c13ae96c79"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","621ec03d4e072879d8ff6f298ea46ffc"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","0b828cf36ff482aefc1ee0f768113efb"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","5d1fb119bd99317065ff3a8ae30f247f"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","5c7fbd1e8166c891f491067600015cf2"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","4075c9a38fc0860b4c78412488277e12"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","7e1e120d8e26877d0c50810b4e1506be"],["D:/+blog博客/hexo/public/archives/2019/index.html","ccdc05cb2830ebe72e29437263e93004"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","952e5862ecdbf8e0679f4627fbd4ec34"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","906a1c17f415fa818efd7224f9ce7dbc"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","8c6e478fa84365585a39161b7815b2bc"],["D:/+blog博客/hexo/public/archives/2020/index.html","a4617c556604fbda73a03be9f9e22fa1"],["D:/+blog博客/hexo/public/archives/index.html","a3595b14a057db3bcc69ef40e9ad8534"],["D:/+blog博客/hexo/public/archives/page/2/index.html","a3595b14a057db3bcc69ef40e9ad8534"],["D:/+blog博客/hexo/public/archives/page/3/index.html","770d23272b7182af3293fb07139e9d71"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","c415ab1e8f072a58b60ad2ef05c6cb2a"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","d162c687912c6d72434bc1ce035e6a01"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","dddf2382c0b813f0f7bad3fb46189592"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","c8aa236785e46a8c3485e11f8d620ada"],["D:/+blog博客/hexo/public/categories/教程/index.html","8991ecf36ac1fdee7f72351c8ff0f17e"],["D:/+blog博客/hexo/public/categories/文学/index.html","a5ca9c4340f4ddab69b3f0a7667e2dd6"],["D:/+blog博客/hexo/public/categories/视频/index.html","51bd8eb7ece592de5cdbcb30eca291e1"],["D:/+blog博客/hexo/public/categories/资源/index.html","b3066a062a4ae94735b4cb24b4964845"],["D:/+blog博客/hexo/public/categories/资讯/index.html","cfd7c99b47eeed9f8790684950f19daa"],["D:/+blog博客/hexo/public/categories/题解/index.html","404f76aa767804ed9797d19665c471e0"],["D:/+blog博客/hexo/public/comments/index(副本).html","fd43d620c40328debb70f77b2ee6bb8c"],["D:/+blog博客/hexo/public/comments/index.html","442807707879b80bc390d23ce58e9d11"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","10444fa4c82fdb6a4d652230086c8555"],["D:/+blog博客/hexo/public/index.html","b042138a44b24cddd8b73f9121fd2d4b"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","e809d2db879a7896242708e93c4f8dff"],["D:/+blog博客/hexo/public/mylist/index.html","552bf0ac804b57889dcbe1926dd25506"],["D:/+blog博客/hexo/public/page/2/index.html","2e15ce297ad05a55c846a36c713f5352"],["D:/+blog博客/hexo/public/page/3/index.html","56de64e8481b1d4cec0f246f05704d4e"],["D:/+blog博客/hexo/public/share/all/C++.html","728e2ee39af521b45e194a018d40d881"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","47f068cd57a2bdd29698220b420ace97"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","d0686be54b92f3bf9cdbec957863ea07"],["D:/+blog博客/hexo/public/share/all/工具.html","e628770e46814856d888d135c6579747"],["D:/+blog博客/hexo/public/share/all/游戏.html","15dc189dadc411110acbddbda0b59d7f"],["D:/+blog博客/hexo/public/share/index.html","65c492b5d65bc921f28b8500aee16354"],["D:/+blog博客/hexo/public/share/备用.html","6355fce2c152983d86b328a7a625b3d3"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","4f5489ecadd379532c597d19e0167b49"],["D:/+blog博客/hexo/public/tags/CDN/index.html","753ab23fca45d6404fecb5e9472b3b33"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","d7f0167941f1ddfbbc539532d925733a"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","daf185d5973a822e6152448f8786808d"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","4f9b8db9c86385d4b950adf3cb98780c"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","f0df657e93f64bb1ebb164e57e75e707"],["D:/+blog博客/hexo/public/tags/index.html","7f2acdbfd1b8ad13c5d03d8fd42016ec"],["D:/+blog博客/hexo/public/tags/test/index.html","091ac0c1c978ced684f892d6423c31e8"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","be4193c611182313bcd03caddda0fd18"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","bb901598bad0300800cd459d112fd062"],["D:/+blog博客/hexo/public/tags/加密/index.html","db1848bf151151a371ac20e685b849a0"],["D:/+blog博客/hexo/public/tags/加速器/index.html","0d931d0abe9a5a489e2e2006ef9a481e"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","85137af76170418af57d024171f5a6fe"],["D:/+blog博客/hexo/public/tags/教程/index.html","57cd85d78f0c98ed2cfbde32cdc9c22f"],["D:/+blog博客/hexo/public/tags/文学/index.html","3093940ef45ef89d4fffc38b5e5bda1b"],["D:/+blog博客/hexo/public/tags/游戏/index.html","903efc54fb2be50e48928bd91d028a72"],["D:/+blog博客/hexo/public/tags/百度云/index.html","bcf54b81d9203c4abc2f795290edeebc"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","a91c738f79141ec06ac1288f1626b36d"],["D:/+blog博客/hexo/public/tags/视频/index.html","6bf4805e888a353ae5c7e065088f2961"],["D:/+blog博客/hexo/public/tags/资源/index.html","c12edb2eaeb8ce1b6cb5b1fffc120521"],["D:/+blog博客/hexo/public/tags/资讯/index.html","95115e7038e20d4c4af1ed5f22190a3d"],["D:/+blog博客/hexo/public/tags/题解/index.html","4b21140ce31c9b678159f11b5758dd58"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","369e55acb601c0ba127f26788630f2d3"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","98b851899b94cd544906cc683b9d390d"],["D:/+blog博客/hexo/public/tools/index.html","e226e1f800676589ca76cbe77cdaef1d"],["D:/+blog博客/hexo/public/van/index.html","9ae936b0f090e756004156a6b3f1b397"]];
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







