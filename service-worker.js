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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","3e902bed6e5fa41420c8b6633ca35d4e"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","ff5df01220d40c2cb86504c3b448c240"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","00604525c810f756fe4764b25c48a5ea"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","3d3aa5fedd9e76669d0db03b0d052c31"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","b343d8d4c4e1014721945d453357e241"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","0b2e6da561489d7b15b0b029eef74efd"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","0eaf5e1b1bafcd5a7e4c5caca990da94"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","6bed10ea1ef085bf3730e6fb9b5cd9e8"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","44109ca0ab08b83c37bcb182cf58b936"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","2f42fd78d8e969b1bc8d0292a8110e81"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","96d52946d8ec5eacdda6f5861d03a96e"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","582e704e86eb4cb08bf6a44f204ba3ec"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","c3216bc5fd89a018b2c8f261884d494f"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","76eeea0649176d1ecaa47ab8272706be"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","04ebcc5a24977e57454fa024151a65e1"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","eb22374c20a583abe6eb73b10e6b9a64"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","09b7312e2f57f6e6c661e8ed4ff20a1d"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","192d9d4b6a91b957196444f74676cb04"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","2291fe0a73ac39ad5a80720051b45ff9"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","6f90a155450d81c066501d73f843a7b3"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","ebef161abb4d0307393c7b592c84f4f2"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","aa5528c5f0428dfd8e5caf09403fdc45"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","6307b6a9e044885bc17e5443d766ced8"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","2a7795b1e35293b0ed2809afeb6935b7"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","78677b4e38b40449027086e41502cbd4"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","3d606806b471d4bef3039da08515cb3d"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","f3db95fdabfb39ffa60317825a2584b1"],["D:/+blog博客/hexo/public/2021/01/10/文学-深圳实验中学部校园学生指南/index.html","a390fb2c42b986e7c6d972b180b991f8"],["D:/+blog博客/hexo/public/2021/02/14/教程-我的世界开服/index.html","4abc29f434b549b212505a43739c7203"],["D:/+blog博客/hexo/public/404.html","4dea1381a1f235e82f19223819ecde05"],["D:/+blog博客/hexo/public/COVID-19/index.html","5e4b40200057d5c0da071631ac97c239"],["D:/+blog博客/hexo/public/about/index.html","5c1d06abaca4d65a3764919677579990"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","41357be5faef6291eb7e293e71fc01c7"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","f6628d9b70dcc4b801083dd77eeab128"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","687da721afcafde915651afa361c4142"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","20c0f44ea84e4ec51153a9ec7ba7ef1a"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","26511b662490f4545a3816d0b192af0f"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","88d56281ece55c440afb9e2b452bd046"],["D:/+blog博客/hexo/public/archives/2019/index.html","c5fc8bba2f2d57c74a3d164172d9b767"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","dd4af489ccfba0a05a402ca9ed6d0610"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","ba16982ce112adc4f673ae655e09689e"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","d394c1e948c8c501360160e091f5d4d0"],["D:/+blog博客/hexo/public/archives/2020/index.html","830ece73af8f7843dd90f7a6bea37532"],["D:/+blog博客/hexo/public/archives/2021/01/index.html","7af3112f80acce7e3e9cb466594c65df"],["D:/+blog博客/hexo/public/archives/2021/02/index.html","47f4e2a74ab0d7b676f3f865c5872f0d"],["D:/+blog博客/hexo/public/archives/2021/index.html","fe780ba60642ea92cd6b50129db14006"],["D:/+blog博客/hexo/public/archives/index.html","1fa436954652744df6f68aeb540574b9"],["D:/+blog博客/hexo/public/archives/page/2/index.html","1fa436954652744df6f68aeb540574b9"],["D:/+blog博客/hexo/public/archives/page/3/index.html","bce61c4074340cf82e6153b919b110f4"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","b4fc19622be0b5a349c3eaf342864861"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","44a9a46085b9e78c83f11107f2131be4"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","f0ffbbbc154665742a3da4d1d7b632c8"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","7918bb41f7653fe648dcff6ade6bd720"],["D:/+blog博客/hexo/public/categories/教程/index.html","bd7739b9c83b609c9b04d343825dfb02"],["D:/+blog博客/hexo/public/categories/教程/page/2/index.html","91c378754dde87a4f2f677b131aee7ff"],["D:/+blog博客/hexo/public/categories/文学/index.html","0e6c4809a64dd5f929bbd7edf041d61e"],["D:/+blog博客/hexo/public/categories/视频/index.html","8292a567ea5f36e3171837da70a8ef54"],["D:/+blog博客/hexo/public/categories/资源/index.html","759bb3acc163fefd563725489dc4ccd9"],["D:/+blog博客/hexo/public/categories/资讯/index.html","f36bb42204e1efd0785f0c4ada40fc4f"],["D:/+blog博客/hexo/public/categories/题解/index.html","e8697eb6ac482088fc3a6703bb9a407d"],["D:/+blog博客/hexo/public/comments/index(副本).html","b160e6d019ce059fd99400298996ef4e"],["D:/+blog博客/hexo/public/comments/index.html","93e84b7879044d9262315913a66038c3"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","4a4f2e2d774231ac7a8795eaea6845f0"],["D:/+blog博客/hexo/public/hide/all/深圳实验中学部校园学生指南.html","9c741e9f40ef60ed74babf74c17e477c"],["D:/+blog博客/hexo/public/hide/index.html","0ddcc96a1169dc9917475b0b72b134c1"],["D:/+blog博客/hexo/public/index.html","63fb673cb97616e3d29d403a85a6dcfd"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","9a50fa5e09b3b5fd0317786bef69aa43"],["D:/+blog博客/hexo/public/mylist/index.html","ffa74b4952c955643805e0b5e92f624e"],["D:/+blog博客/hexo/public/page/2/index.html","cbdf6e71d18e0213e88ad41fc2f82d57"],["D:/+blog博客/hexo/public/page/3/index.html","f5a7344812bbac0feececa25a4b3563d"],["D:/+blog博客/hexo/public/share/all/C++.html","f70844c76f54ffdc2886ce79dd8767f9"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","ed44e690fa3e65028c04502574e41502"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","f2546903663a88938e93f86a3c15471d"],["D:/+blog博客/hexo/public/share/all/工具.html","10f1f6ab760835e342cd293266797ada"],["D:/+blog博客/hexo/public/share/all/游戏.html","0cfd04360e40befea8dc8fc9fcd84967"],["D:/+blog博客/hexo/public/share/index.html","e23fc7226d88ea48e0f3f37af2a215a3"],["D:/+blog博客/hexo/public/share/备用.html","c8b4fda6deec31956b1dce56678e7960"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","1f742744377be316124fa5fcebff0150"],["D:/+blog博客/hexo/public/tags/CDN/index.html","6347fa61f4bf5efd6091bc0ab592be52"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","de9c1f71928a77e19a9508685b879f72"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","efa4a0dc832bc540392438bb709155b9"],["D:/+blog博客/hexo/public/tags/Minecraft/index.html","cc5e21ce4f9f416e0ddb742d989a7f01"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","00db5520018ffd7f125145f8143890ba"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","6cf13ec1ae8ece3c3b3cef6428a481a0"],["D:/+blog博客/hexo/public/tags/index.html","16dd62e198d2a9c0d39f266e4a32495a"],["D:/+blog博客/hexo/public/tags/test/index.html","567b5d9a528babc852b367039f43fe3a"],["D:/+blog博客/hexo/public/tags/中学部/index.html","703a2396b3aba937797ed7a00271d4ed"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","fa56436755021996e6f23b4a6eb2a9fa"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","ab1ab2c66fb7bf94e575701bca466ebe"],["D:/+blog博客/hexo/public/tags/加密/index.html","39a2b062279d7b3112d4b710712c5ce7"],["D:/+blog博客/hexo/public/tags/加速器/index.html","c5909faad9a3a5274902cb7f0c412c4b"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","fd40177b78241b9494a55cbc98f054b3"],["D:/+blog博客/hexo/public/tags/我的世界/index.html","306a0b8e59a5a66c47cbc2478e997d6c"],["D:/+blog博客/hexo/public/tags/指南/index.html","d2cef44bf9bdf9773b0040c60b79517f"],["D:/+blog博客/hexo/public/tags/教程/index.html","f6af233178e368c4765c86c72555da7c"],["D:/+blog博客/hexo/public/tags/教程/page/2/index.html","b5e148410198c4187b139fc7299114db"],["D:/+blog博客/hexo/public/tags/文学/index.html","5cd0422f9eb3e2d0e69552b1273a6faa"],["D:/+blog博客/hexo/public/tags/深圳实验学校/index.html","fb2e26df98262f7ee1df98ad55d2a02e"],["D:/+blog博客/hexo/public/tags/游戏/index.html","14627d78fb259507a19290e3baeaf505"],["D:/+blog博客/hexo/public/tags/百度云/index.html","789454860c385b507da8608e6e10b3e8"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","64d6bc22a980dea5786b305128add391"],["D:/+blog博客/hexo/public/tags/视频/index.html","817d200afd6c16513f40c43e4c7349a8"],["D:/+blog博客/hexo/public/tags/资源/index.html","f29423e3f5cda0979b1aaa2501e635fe"],["D:/+blog博客/hexo/public/tags/资讯/index.html","90d82a4544a5011db214e755aa7d04b2"],["D:/+blog博客/hexo/public/tags/题解/index.html","0682256d48e9a2e3389e5b49277b2a5e"],["D:/+blog博客/hexo/public/test/index.html","db310e104af8c32b09bbb736e266ba67"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","7b99160f3ca6d1233c0f7b5e0edb343b"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","92987ef8da9c5d945fdc23a4d7c92729"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","866d7bb5d439dba78c8dbc7f022a2474"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","5c9ad219fd2e6b978633ac39ab153ea6"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","c33f5f571826589d062e6765a70c476f"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","aebeb0acbc745a8f7fdd2b47268d95b9"],["D:/+blog博客/hexo/public/tools/index.html","e16ffd7ad8eef7bbc2eb26ce59237b40"],["D:/+blog博客/hexo/public/van/index.html","066218ab3551d15bc8558242ee0c7718"]];
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







