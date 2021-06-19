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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","4f0197a776e16e149f1d2d09dba1b01f"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","a52c1650671e3897eb93b7fb447746be"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","7d2a1b96b82e94e455c754a1dfaed532"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","54a6d064acb31517c8f9ba3511425c46"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","45dc2a4dc107d46a7cce9bd8efdc2083"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","ccbb05d31507fc9b97bf482434123e1d"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","690e2e1a314e81ec0cdad956def3a554"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","259f102590d0452b52b4e25cf9b5d260"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","af21590dfd18de763b4018457a16e89b"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","0b7b264a4a74093a526807af0accd3d5"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","0056cfb7beab8cca403f5397b0c7a32c"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","6c258e07a02089cfac7e361bcd9b1615"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","c23d18748c00c4e221d15be781b6d083"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","a071e565d03355b8cfbe848f4a69283f"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","0e9f23684e2c17cb327ad94a581d5921"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","b2ad70c0f55df120f264d286542c6124"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","eda0a779c066887613f07e4a05f3fb64"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","fb23adb6c65cde648029bbcef5d3a2b5"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","c97fe6e4f3fe00dfb5479085b9dc50cc"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","10d8d44535c175877105294cc473eb17"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","16cbc341965644787f9af5f2cf856dfc"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","abf8f2ace50b493187baefaedaca2f82"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","1edd7bcea53e4608f998d625c0aa154a"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","afa3078d6b8548910ed2fa52e517768a"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","fd9387a5641389feb8eac56ef98bd1f5"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","c2195e3229ddff914908cebcd2046c20"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","e194e664baaddcaca26d54dd366800b7"],["D:/+blog博客/hexo/public/2021/01/10/文学-深圳实验中学部校园学生指南/index.html","0818906138ef93f349f416bc9f5b1e55"],["D:/+blog博客/hexo/public/2021/02/14/教程-我的世界开服/index.html","d76180ba6089299f8ce7f674d230484f"],["D:/+blog博客/hexo/public/404.html","ab8042a26d1c08e34a84e214d9b6a7f7"],["D:/+blog博客/hexo/public/COVID-19/index.html","6898a08fcba224ec540715fe2f03dad0"],["D:/+blog博客/hexo/public/about/index.html","550a3a3a03b8b364a024945709a5e1db"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","41357be5faef6291eb7e293e71fc01c7"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","0a72a84469c9dae9a5ba4656caa88b53"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","687da721afcafde915651afa361c4142"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","a41b3382da27ff5142aa3c2134ecb7f5"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","95ee3a780258b3e2fe5b387dc5c3067c"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","d86bc48df887ad231a63e2a37fa35256"],["D:/+blog博客/hexo/public/archives/2019/index.html","71d30fb458359763e268690c697b2a2c"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","dd4af489ccfba0a05a402ca9ed6d0610"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","5c6d16e687a1046148eab038952c1aa7"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","831c3e4a09037b02df383350d72975c3"],["D:/+blog博客/hexo/public/archives/2020/index.html","e90e83ff79476a2a41939ceec53997aa"],["D:/+blog博客/hexo/public/archives/2021/01/index.html","7af3112f80acce7e3e9cb466594c65df"],["D:/+blog博客/hexo/public/archives/2021/02/index.html","47f4e2a74ab0d7b676f3f865c5872f0d"],["D:/+blog博客/hexo/public/archives/2021/index.html","fe780ba60642ea92cd6b50129db14006"],["D:/+blog博客/hexo/public/archives/index.html","a7d5dfd6e2cc2f747fd68b5c89b9eca5"],["D:/+blog博客/hexo/public/archives/page/2/index.html","a7d5dfd6e2cc2f747fd68b5c89b9eca5"],["D:/+blog博客/hexo/public/archives/page/3/index.html","6e00a213c399c1ffd38948fdd32a2133"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","ac68b3a356387084046121e9b6f88852"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","fe378bb4c1df5d9cf5cd888a92c9f756"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","3da4ca8f8c2ae08854030d435bf0acef"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","b7c03b474fb476e176913cf00e2aa9ed"],["D:/+blog博客/hexo/public/categories/教程/index.html","4a8508213805b3e40214c034f13bea80"],["D:/+blog博客/hexo/public/categories/教程/page/2/index.html","91c378754dde87a4f2f677b131aee7ff"],["D:/+blog博客/hexo/public/categories/文学/index.html","11e67237d6c6d8256a639782f37fdae6"],["D:/+blog博客/hexo/public/categories/视频/index.html","cc3d2097d20541cd6a6c00b1dd9b5af7"],["D:/+blog博客/hexo/public/categories/资源/index.html","d879a4464be4e92288fb27943bcec6a6"],["D:/+blog博客/hexo/public/categories/资讯/index.html","4c8a4306325f768c0967bd106407151a"],["D:/+blog博客/hexo/public/categories/题解/index.html","e8697eb6ac482088fc3a6703bb9a407d"],["D:/+blog博客/hexo/public/comments/index(副本).html","9aa2130f35f7d92d161eba6307d8da4c"],["D:/+blog博客/hexo/public/comments/index.html","fcd8f275101a1746c3f3a85d975a807f"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","a2740f2be2f9289b81b49722c0ff4e01"],["D:/+blog博客/hexo/public/hide/all/深圳实验中学部校园学生指南.html","b8a8522e6bc35f1b9736759eb462f557"],["D:/+blog博客/hexo/public/hide/index.html","176b05b1575dfba55a3f82f2ffdd6e17"],["D:/+blog博客/hexo/public/index.html","a49b6eeab1cf29a65f874b187ed3f2aa"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","41cbf6e597ba774ad6525805c7c94c6c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","3eadd307937b5ea220d91594f75a8d97"],["D:/+blog博客/hexo/public/mylist/index.html","ffa74b4952c955643805e0b5e92f624e"],["D:/+blog博客/hexo/public/page/2/index.html","cbdf6e71d18e0213e88ad41fc2f82d57"],["D:/+blog博客/hexo/public/page/3/index.html","cdbea090029af08250025394e26d4952"],["D:/+blog博客/hexo/public/share/all/C++.html","fd809da9127e3ab5ebef64f553817c59"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","0ce02b72f3105d63738eeb433b689b6a"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","8e775b5d6edec0f04211e66b0b47f9dd"],["D:/+blog博客/hexo/public/share/all/工具.html","07f90f867bda044b195dc4e01e095ae5"],["D:/+blog博客/hexo/public/share/all/游戏.html","21833372344058d397c51cab737b00b5"],["D:/+blog博客/hexo/public/share/index.html","631807c092050dcc6a9c21d46613bb11"],["D:/+blog博客/hexo/public/share/备用.html","0965b28c75704a14d04838efb2e25880"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","1f742744377be316124fa5fcebff0150"],["D:/+blog博客/hexo/public/tags/CDN/index.html","6347fa61f4bf5efd6091bc0ab592be52"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","de9c1f71928a77e19a9508685b879f72"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","efa4a0dc832bc540392438bb709155b9"],["D:/+blog博客/hexo/public/tags/Minecraft/index.html","cc5e21ce4f9f416e0ddb742d989a7f01"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","6b1261ff36cbc725e576f936a3fac15d"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","6cf13ec1ae8ece3c3b3cef6428a481a0"],["D:/+blog博客/hexo/public/tags/index.html","a78debbf34182dab8e73717e26626c75"],["D:/+blog博客/hexo/public/tags/test/index.html","2027eaf48d350cbf96a048a5d98e2a45"],["D:/+blog博客/hexo/public/tags/中学部/index.html","703a2396b3aba937797ed7a00271d4ed"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","7d39ea20337da0d4180637836de1670d"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","15f387afac4dbee84a4e52cc3b1dcf76"],["D:/+blog博客/hexo/public/tags/加密/index.html","f3ec988c2ecaa5b4688d3d175505be5a"],["D:/+blog博客/hexo/public/tags/加速器/index.html","9bdc05eae9e6b51dc782ef645f3f0a71"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","fd40177b78241b9494a55cbc98f054b3"],["D:/+blog博客/hexo/public/tags/我的世界/index.html","306a0b8e59a5a66c47cbc2478e997d6c"],["D:/+blog博客/hexo/public/tags/指南/index.html","d2cef44bf9bdf9773b0040c60b79517f"],["D:/+blog博客/hexo/public/tags/教程/index.html","05877e27032969708ead87cbfafa439d"],["D:/+blog博客/hexo/public/tags/教程/page/2/index.html","b5e148410198c4187b139fc7299114db"],["D:/+blog博客/hexo/public/tags/文学/index.html","f8785380f7787290f05b41685b7d0ba6"],["D:/+blog博客/hexo/public/tags/深圳实验学校/index.html","fb2e26df98262f7ee1df98ad55d2a02e"],["D:/+blog博客/hexo/public/tags/游戏/index.html","ed3282b909813247c4f8f3bb00825612"],["D:/+blog博客/hexo/public/tags/百度云/index.html","789454860c385b507da8608e6e10b3e8"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","64d6bc22a980dea5786b305128add391"],["D:/+blog博客/hexo/public/tags/视频/index.html","ecdc4275e648af41e9a1f5358a7a8784"],["D:/+blog博客/hexo/public/tags/资源/index.html","53ab26a9ebda95f3268de65449d68fc4"],["D:/+blog博客/hexo/public/tags/资讯/index.html","cc1dda6afffa85fa3020bdd9ed2dbf30"],["D:/+blog博客/hexo/public/tags/题解/index.html","0682256d48e9a2e3389e5b49277b2a5e"],["D:/+blog博客/hexo/public/test/index.html","8dbe29cdea4cd15c7f925582686f10df"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","cb8e7af61218de6579156d724b682a45"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","f0dea1dc014ebb625ee9e15c80a3a02a"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","a1d7b34e475e655aa32bb326219f05fd"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","033daad9eadea795fab1fb5a4798a1cd"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","08fbdd0ad5c3e5c53bd579efe3ab7ca5"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","3eae8fae37b71d88ae6074aef1745d49"],["D:/+blog博客/hexo/public/tools/index.html","8b679391f0ac712d12844c22852d9097"],["D:/+blog博客/hexo/public/van/index.html","90ed4600d382c929c1d38af7d9173faa"]];
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







