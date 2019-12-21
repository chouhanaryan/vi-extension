chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action" ) {
            // var firstHref = $("a[href^='http']").eq(0).attr("href");
            
            let ss = "ss"
            let yt_url = window.location.host
            let www = yt_url.slice(0,4)
            let link = yt_url.slice(4,1000)
            let final = www + ss + link
            final = window.location.protocol + "//" + final + "/" + window.location.pathname + window.location.search
            console.log(final)
            
            // console.log(firstHref);
            
            
            chrome.runtime.sendMessage({"message": "open_new_tab", "url": final});
        }
    }
    );