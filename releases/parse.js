//Parse latest github release and serve to client
$.getJSON('https://api.github.com/repos/Zertop/LineTool/releases/latest?' + (new Date()).getTime(), function(data) {
    document.getElementById("downloadBlock").src = data.assets[0].browser_download_url;
});

console.log("Test");