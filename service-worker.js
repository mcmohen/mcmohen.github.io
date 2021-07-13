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

var precacheConfig = [["D:/+blog博客/hexo/public/2019/08/09/test-helloworld/index.html","bdd05afc071623c3d69680daa0cdc234"],["D:/+blog博客/hexo/public/2019/08/09/test-mcmohen-test/index.html","1428f7ae5cc7fe2eb261252be0a8f906"],["D:/+blog博客/hexo/public/2019/08/09/作者专用-藏匿/index.html","d15e387125ff214407eae4a77b4257c8"],["D:/+blog博客/hexo/public/2019/08/10/加密-毕业后的回忆/index.html","e984d9e09028f8f74d3d71552a97085b"],["D:/+blog博客/hexo/public/2019/08/11/视频-终鸡之战/index.html","93ad93180f7aa6e07cb53adbc34d54d5"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1055 ISBN号码/index.html","4773674a7fa600b8749a2e168c976bc9"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg1909 买铅笔/index.html","f35fdf0e50026524aa19d258163f6fc6"],["D:/+blog博客/hexo/public/2019/08/12/题解-lg4305 不重复数字/index.html","d1555562126fbb70da5b0354ab678c21"],["D:/+blog博客/hexo/public/2019/08/13/文学-吴宪霖大作/index.html","043d189b7dd8f526c09b16b8dda06be0"],["D:/+blog博客/hexo/public/2019/08/15/题解-lg2010 回文日期/index.html","ee341c9337d78a1b692d3d53045060dd"],["D:/+blog博客/hexo/public/2019/08/16/资讯-NOIP取消/index.html","f74a4f70c7fe83a69d74cef99da013a4"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-分割线/index.html","a3f982ddb3d6af7041adfcf2907d9390"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-基础/index.html","1040da24619a90bd4eb41aa7ed9b52e3"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-引用/index.html","73e90ffb8f04ea6f67ace62c774fc7a8"],["D:/+blog博客/hexo/public/2019/08/17/教程-Markdown的使用-表格/index.html","01aed6fe8ffc8c8cf3d3a8666dab6476"],["D:/+blog博客/hexo/public/2019/08/19/教程-免费CDN/index.html","087828bb030065029069341be03bdef7"],["D:/+blog博客/hexo/public/2019/09/05/文学-比利先生/index.html","9b2c59cbfa5326a68a188ba5c810f045"],["D:/+blog博客/hexo/public/2019/09/21/教程-导航栏不显示解决方法/index.html","edc9a3ac5c4e6d7d746f64f95304baea"],["D:/+blog博客/hexo/public/2019/10/03/教程-对拍/index.html","d5c8a5859f1fa5c28229a6c8a9bbae59"],["D:/+blog博客/hexo/public/2019/10/03/资讯-置顶公告/index.html","102b2b8988a87579a9b3b396d127b162"],["D:/+blog博客/hexo/public/2019/10/25/视频-8848ass/index.html","1a2076c65aa4ea31f80e4190fb60e60f"],["D:/+blog博客/hexo/public/2019/11/05/视频-罗小黑战记/index.html","86ae26be11229819576370922a4444b0"],["D:/+blog博客/hexo/public/2019/11/09/教程-Proxyee Down/index.html","53a9f56ec1e66998f1ebff99e3308ac8"],["D:/+blog博客/hexo/public/2019/11/29/视频-PUBG操作集锦/index.html","3428a9d13b253daf71dfe6ad09bc3db8"],["D:/+blog博客/hexo/public/2019/12/08/教程-全面战争模拟器隐藏兵种/index.html","0f423e447ef5f5d5173c4a67c7506961"],["D:/+blog博客/hexo/public/2020/02/21/资源-四款免费加速器/index.html","53e5377a61cc2e8c944a9291bb768477"],["D:/+blog博客/hexo/public/2020/02/28/教程-Hyper-V的安装及使用/index.html","23152973ee73e496ef7572e4bfec7378"],["D:/+blog博客/hexo/public/2021/01/10/文学-深圳实验中学部校园学生指南/index.html","831f3ca7689bb3f2699b5a8a15b59b60"],["D:/+blog博客/hexo/public/2021/02/14/教程-我的世界开服/index.html","6da6e13cbc371a44f3e5a883c612b394"],["D:/+blog博客/hexo/public/404.html","a9370c1f6cd5785e31e11235ffc32cb5"],["D:/+blog博客/hexo/public/COVID-19/index.html","c77117716340c46a47b3b7a4692d2f2f"],["D:/+blog博客/hexo/public/about/index.html","a5a6bbc2b92491c815249e7d75a8e756"],["D:/+blog博客/hexo/public/archives/2019/08/index.html","76b4b43f0241f636ce6befd14ad2b1eb"],["D:/+blog博客/hexo/public/archives/2019/08/page/2/index.html","ee9bfe01de08c75d9879e2d075ef3e47"],["D:/+blog博客/hexo/public/archives/2019/09/index.html","65d720feb68afe1c74ee246482badf16"],["D:/+blog博客/hexo/public/archives/2019/10/index.html","efcca33a3bb5988667ead375bdb2dd6b"],["D:/+blog博客/hexo/public/archives/2019/11/index.html","ac9c16924461ca6cf27bee120e375fba"],["D:/+blog博客/hexo/public/archives/2019/12/index.html","fbca3f92a15b30bb85031ecc9ef6c76e"],["D:/+blog博客/hexo/public/archives/2019/index.html","1cdf982d24db2a50c35298f0dcf6370d"],["D:/+blog博客/hexo/public/archives/2019/page/2/index.html","97fb2d268e694004a9e14b0fc1936328"],["D:/+blog博客/hexo/public/archives/2019/page/3/index.html","293a7b64f48732af28829fd3588afcf4"],["D:/+blog博客/hexo/public/archives/2020/02/index.html","8d57890506a4f97c7c2f9fef2ec527b6"],["D:/+blog博客/hexo/public/archives/2020/index.html","68f3dc6874f80575795d6a33e0088583"],["D:/+blog博客/hexo/public/archives/2021/01/index.html","6c698edffd175762d7fff4b2f165b376"],["D:/+blog博客/hexo/public/archives/2021/02/index.html","184549947c8df59fbe0739297b090932"],["D:/+blog博客/hexo/public/archives/2021/index.html","8ce3e805effeba99a2f9e4afdffe85f6"],["D:/+blog博客/hexo/public/archives/index.html","8cd41cde215ae35e1e8bb6f88aabf187"],["D:/+blog博客/hexo/public/archives/page/2/index.html","8cd41cde215ae35e1e8bb6f88aabf187"],["D:/+blog博客/hexo/public/archives/page/3/index.html","1690dd95b80fdfb14f4934b3799bb3c5"],["D:/+blog博客/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["D:/+blog博客/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["D:/+blog博客/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["D:/+blog博客/hexo/public/categories/index.html","41e3c2cae2a2b43ff2cb1c52f0641eb6"],["D:/+blog博客/hexo/public/categories/作者专用/index.html","4b408c972133537a69e1ba2a4c88d454"],["D:/+blog博客/hexo/public/categories/作者专用/test/index.html","1332805a0a53c39ad521c75db131993a"],["D:/+blog博客/hexo/public/categories/作者专用/藏匿/index.html","e6ceccda03f7aec87d284203d4bad7f4"],["D:/+blog博客/hexo/public/categories/教程/index.html","e0524f2af60ba2cb0f2ce411e30c3063"],["D:/+blog博客/hexo/public/categories/教程/page/2/index.html","eba7e12599e88b32ffa80b23674a25ed"],["D:/+blog博客/hexo/public/categories/文学/index.html","cf7bd1315d7d5ae9446047c9071f6aa4"],["D:/+blog博客/hexo/public/categories/视频/index.html","199b7fa0aebe370001bca6e1b4aab0ee"],["D:/+blog博客/hexo/public/categories/资源/index.html","a4726d50daba339f6e6c357b0d9287e1"],["D:/+blog博客/hexo/public/categories/资讯/index.html","ad586d2d1e3c8a91f74080092736a712"],["D:/+blog博客/hexo/public/categories/题解/index.html","831d6a609eda7e0f7f6f2b2ea610e2e9"],["D:/+blog博客/hexo/public/comments/index(副本).html","7433c674a3cc650b78de4be8400feb8d"],["D:/+blog博客/hexo/public/comments/index.html","04f956334ed7c9588e0b22be82cf0f8c"],["D:/+blog博客/hexo/public/css/blog-encrypt.css","353d9144d834bb7c359cebfdd09e7f5e"],["D:/+blog博客/hexo/public/css/spoiler.css","49db4316f654a3b826aedc57466ef778"],["D:/+blog博客/hexo/public/fonts/Monaco.ttf","7d1b5cf51af724a2641a89a881b342fe"],["D:/+blog博客/hexo/public/fonts/Skranji-Regular.ttf","0f860580e235e4ae4ae655c2bbb9c943"],["D:/+blog博客/hexo/public/fonts/Ubuntu-Regular.ttf","75adbf87abbf62e27f6a738caeb71f75"],["D:/+blog博客/hexo/public/friends/index.html","6d169f6f39effa0a71e65ee028c9d641"],["D:/+blog博客/hexo/public/hide/all/深圳实验中学部校园学生指南.html","177b1dfe44ee9cb44450cc76f4f17380"],["D:/+blog博客/hexo/public/hide/index.html","e22231dcd984e719bdc5b2b482805e8a"],["D:/+blog博客/hexo/public/index.html","0a2014956a3aae9727c2651e73df5431"],["D:/+blog博客/hexo/public/js/FunnyTitle.js","cd73f3f37475f585904da1f019b85298"],["D:/+blog博客/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["D:/+blog博客/hexo/public/js/app.js","746d2cc39caf42c3a4f804a28cda4175"],["D:/+blog博客/hexo/public/js/click_show_text.js","beebca8b3da5877a64a7ca5892564472"],["D:/+blog博客/hexo/public/js/fireworks.js","f8599b24e09ee8be2d30560755e38236"],["D:/+blog博客/hexo/public/js/love.js","8e3be691d9a201e4b886247acc27218b"],["D:/+blog博客/hexo/public/js/search.js","abbea8efa3a074fe6998e1fc0211bd14"],["D:/+blog博客/hexo/public/js/snow.js","da12bc2849d807950fcaeaed5fc536b1"],["D:/+blog博客/hexo/public/js/spoiler.js","a419c64a2ae44c2a0437d1c1795105dc"],["D:/+blog博客/hexo/public/js/volantis.js","896cacd26cf63be3187e32c582b2b734"],["D:/+blog博客/hexo/public/lib/blog-encrypt.js","1caf6acccbaaae88af59a112eaf1b37c"],["D:/+blog博客/hexo/public/lib/crypto-js.js","60ab5dbd46dfa34dfef3c1548a22a978"],["D:/+blog博客/hexo/public/live2dw/assets/moc/hijiki.2048/texture_00.png","817ca52e35fef3ef3a452127d1c88f43"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["D:/+blog博客/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["D:/+blog博客/hexo/public/music/index.html","f774119e39611772f7844704f00b4280"],["D:/+blog博客/hexo/public/mylist/index.html","9fc8cb121497a23a55ace3567fdf9ced"],["D:/+blog博客/hexo/public/page/2/index.html","176407d1cb9c9ba939ca4f238eb1e694"],["D:/+blog博客/hexo/public/page/3/index.html","a22b241e9e24153df305bad17d855a95"],["D:/+blog博客/hexo/public/share/all/C++.html","b628ecff3673bb7a879f13c7178d5620"],["D:/+blog博客/hexo/public/share/all/branch/Ravenfield(64位).html","ce86f9bcdcd532debb741302d985f41b"],["D:/+blog博客/hexo/public/share/all/branch/Totally.Accurate.Battle.Simulator.html","8cb47bfed1f4dc5ced7d0b3b45125276"],["D:/+blog博客/hexo/public/share/all/工具.html","1ecc53a0833d748fc21bd3b7229bca70"],["D:/+blog博客/hexo/public/share/all/游戏.html","5f8fb05a071fa21cf5b09fdd25fcfc1a"],["D:/+blog博客/hexo/public/share/index.html","c3ccd32e0ccb51d75db7f5a3af8bad25"],["D:/+blog博客/hexo/public/share/备用.html","081c88b5e21973a65866d241fe09969e"],["D:/+blog博客/hexo/public/style.css","3912d8e10cc656b20ae3cb25b6c6626c"],["D:/+blog博客/hexo/public/tags/C/index.html","134ca65fd199fddd9b6a613593f1dc11"],["D:/+blog博客/hexo/public/tags/CDN/index.html","1b634612997bed706b92786b17b529e0"],["D:/+blog博客/hexo/public/tags/Hyper-V/index.html","7c2e1189842e80c31fddf17214e359fe"],["D:/+blog博客/hexo/public/tags/Markdown/index.html","b25f2b7675ea359031ae6a3c2e20c6b8"],["D:/+blog博客/hexo/public/tags/Minecraft/index.html","ed3273d8669477cfebf9930aa1437162"],["D:/+blog博客/hexo/public/tags/PUBG/index.html","50b8e418a9bfc5a2b0650d6ec60bbaf3"],["D:/+blog博客/hexo/public/tags/Proxyee-Down/index.html","08310886a2e2f7079a060ffb33d377d8"],["D:/+blog博客/hexo/public/tags/index.html","58d8f3b5aee491163be378612f3322ed"],["D:/+blog博客/hexo/public/tags/test/index.html","e852bc6ba45f53c5922476c8ec0a851d"],["D:/+blog博客/hexo/public/tags/中学部/index.html","a481e327cbfa33ca4e2c22a001f1eb3c"],["D:/+blog博客/hexo/public/tags/作者专用/index.html","e6715152205719b85a086d63f5e99afe"],["D:/+blog博客/hexo/public/tags/全面战争模拟器/index.html","5d60957a75a21893a17837e645729bd6"],["D:/+blog博客/hexo/public/tags/加密/index.html","5d8f47e9a9158f21db4e9541c394f299"],["D:/+blog博客/hexo/public/tags/加速器/index.html","c08902a06a55b6d2c675959010f78598"],["D:/+blog博客/hexo/public/tags/导航栏/index.html","3717614a791b40f6ef032206add9ca54"],["D:/+blog博客/hexo/public/tags/我的世界/index.html","8f0db260c66c7f29c617ff7e58b57fcf"],["D:/+blog博客/hexo/public/tags/指南/index.html","bf3787f1b4284cafee0eb19c4a97be2d"],["D:/+blog博客/hexo/public/tags/教程/index.html","849b58c8f8b6c0765c5a995b91b01833"],["D:/+blog博客/hexo/public/tags/教程/page/2/index.html","e47caa700946422277de6b870284eb45"],["D:/+blog博客/hexo/public/tags/文学/index.html","8f08933207aaeb60a8ef4ba0bf4b0949"],["D:/+blog博客/hexo/public/tags/深圳实验学校/index.html","a209eab087c83b997cc2849e5d37ee3a"],["D:/+blog博客/hexo/public/tags/游戏/index.html","8abb99c93cd2e945c4308363fa19aa6b"],["D:/+blog博客/hexo/public/tags/百度云/index.html","b88f98708e941ebd4f4e5697e0f7a7b8"],["D:/+blog博客/hexo/public/tags/虚拟机/index.html","f59fa136552cb3cbabded03ee347e642"],["D:/+blog博客/hexo/public/tags/视频/index.html","fc2394cb4800cf6df0f5361a5d455fd1"],["D:/+blog博客/hexo/public/tags/资源/index.html","5dfad6c25d060902a847da60a5e8470d"],["D:/+blog博客/hexo/public/tags/资讯/index.html","4f355e9b2f1a8154a03cdcc5037fa37e"],["D:/+blog博客/hexo/public/tags/题解/index.html","636969dfc6ad6bd4f45f4fbaf90c5f20"],["D:/+blog博客/hexo/public/test/index.html","04bf64698d721623a3a153cb92eddbc1"],["D:/+blog博客/hexo/public/tools/all/base64加密.html","5ba6119248ace4e700dccea9d535c489"],["D:/+blog博客/hexo/public/tools/all/元素周期表.html","dc63a211d9a7c0899c76a4b7d406b12d"],["D:/+blog博客/hexo/public/tools/all/圈小猫.html","f58319792b38cb8b6eef95b369ff1f92"],["D:/+blog博客/hexo/public/tools/all/科幻时钟.html","ebe2b199f21302d4f7f71e263d0841cb"],["D:/+blog博客/hexo/public/tools/all/联系人二维码生成器.html","3ecc3b9b375563d1d4a0e4d9cac66b33"],["D:/+blog博客/hexo/public/tools/all/随机密码生成.html","5efeac5f2495617eaef2ae58d61c81dc"],["D:/+blog博客/hexo/public/tools/index.html","2cb86740908f1b7b281c9debdd0148b1"],["D:/+blog博客/hexo/public/van/index.html","2d11a3668907033ce85ca2d446fad15d"]];
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







