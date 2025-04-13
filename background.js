// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

chrome.runtime.onInstalled.addListener(function () {
    chrome.contextMenus.create({title: "复制当前Tab", id: "0"});
});

// 这两个监听器应该在全局作用域中注册
chrome.contextMenus.onClicked.addListener(function callback(info, tab) {
  chrome.tabs.duplicate(tab.id);
});

chrome.action.onClicked.addListener(function(tab) {
  chrome.tabs.duplicate(tab.id);
});