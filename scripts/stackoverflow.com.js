(function() {

    var div = document.createElement('div');
    div.id = "vantajs-bg";
    div.style = "z-index: -1; position: absolute; width: 100%; height: 100%;";
    document.body.appendChild(div);

    var script = document.createElement('script');
    script.src = "https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.halo.min.js";

    div.appendChild(script);

})();
