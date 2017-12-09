// ==UserScript==
// @name         RO get xmastree head script
// @namespace    https://github.com/kenornotes
// @version      0.1
// @license      MIT
// @description  get head automatically
// @author       kenornotes
// @include      https://rom.gnjoy.com.tw/event_xmastree/friendlogin?code=*
// @match        https://www.wegames.com.tw/site/login
// @match        https://rom.gnjoy.com.tw/event_xmastree/frienddecorate?code=*
// @grant        none
// @updateURL    https://raw.githubusercontent.com/kenornotes/xmastreeROTW/master/ROgetHead.js
// @downloadURL  https://raw.githubusercontent.com/kenornotes/xmastreeROTW/master/ROgetHead.js
// ==/UserScript==

(function() {
    'use strict';

    window.alert = function() {
        console.log.apply(console, arguments);
    };

    // first page
    if (/https:\/\/rom\.gnjoy\.com\.tw\/event_xmastree\/friendlogin\?code=.*/.test(window.location.href)) {
        document.getElementsByClassName("btn_login")[0].click();
    }

    // wegame login
    // ref: https://gist.github.com/x3388638/6480bad78324be6f47cd58c5f221a7ad
    if (/https:\/\/www.wegames.com.tw\/site\/login/.test(window.location.href)) {
        $.ajax({
            url: 'https://www.wegames.com.tw/Third/facebook',
            type: 'post',
            data: {
                token_for_business: ((Math.random()*10e17).toString(16) + (Math.random()*10e17).toString(16)).substring(0,16),
                name: Date.now().toString(16),
                id: Math.random()*10e17,
                YII_CSRF_TOKEN: $('input[name="YII_CSRF_TOKEN"]').val()
            },
            success: function () {
                location.href = 'https://www.wegames.com.tw/member/event_login_check';
            }
        });
    }

    // help people and logout
    if (/https:\/\/rom\.gnjoy\.com\.tw\/event_xmastree\/frienddecorate\?code=.*/.test(window.location.href)) {
        if (document.getElementsByClassName("s05")[0].style.display === "") {
            return ;
        } else if (!document.getElementsByClassName("btn_arrangement")[0]) {
            console.log("done");
            document.getElementsByClassName("btn_logout")[0].click();
        } else {
            document.getElementsByClassName("btn_arrangement")[0].click();
        }
    }
})();
