// ==UserScript==
// @name         Get RSS Feed From YouTube Channel
// @description  Get RSS Feed from YouTube Channel, show in console
// @version      1
// @match        *.youtube.com/*
// ==/UserScript==

(function () {

    //Username method
    const usernameMatch =
        window.location.pathname.match(/^\/user\/([^/]+)/) //youtube.com/users/name format
        || window.location.pathname.match(/^\/c\/([^/]+)/) //youtube.com/c/name format
        || window.location.pathname.match(/^\/@([^/]+)/); //youtube.com/@name format
    const username = usernameMatch ? usernameMatch[1] : null;

    if (username) {
        console.log(`RSS feed URL with Username -Error for some channels- : https://www.youtube.com/feeds/videos.xml?user=${username}`); //Some channels don't have RSS in this format
    } else {
        console.warn("No RSS feed with Username found.");
    }


    //Channel ID method
    const channelIdMatch = document.documentElement.innerHTML.match(/"channelId":"([^"]+)"/);
    const channelId = channelIdMatch ? channelIdMatch[1] : null;

    if (channelId) {
        console.log(`RSS feed URL with Channel ID: https://www.youtube.com/feeds/videos.xml?channel_id=${channelId}`);
    } else {
        console.warn("No RSS feed with Channel ID found.");
    }
})();
