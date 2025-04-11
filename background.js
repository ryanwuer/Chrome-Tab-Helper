// Copyright 2018 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

'use strict';

// In MV3, we need to define this function at the top level for popup.js to access
function copyCurrentTab() {
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    if (tabs.length > 0) {
      chrome.tabs.duplicate(tabs[0].id);
    }
  });
}

// Make the function available to other contexts
globalThis.copyCurrentTabFunc = copyCurrentTab;

chrome.runtime.onInstalled.addListener(function () {

    chrome.contextMenus.create({title: "复制当前Tab", id: "0"});

    chrome.contextMenus.onClicked.addListener(function callback(info, tab) {
        chrome.tabs.duplicate(tab.id);
    });

    // In MV3, we use chrome.action instead of chrome.browserAction
    chrome.action.onClicked.addListener(function(tab) {
        chrome.tabs.duplicate(tab.id);
    });

});
