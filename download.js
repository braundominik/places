var places;
(function (places) {
    window.addEventListener("load", init);
    function init() {
        var textFile = null, makeTextFile = function (text) {
            var data = new Blob([text], { type: 'text/plain' });
            // If we are replacing a previously generated file we need to
            // manually revoke the object URL to avoid memory leaks.
            if (textFile !== null) {
                window.URL.revokeObjectURL(textFile);
            }
            textFile = window.URL.createObjectURL(data);
            return textFile;
        };
        var create = document.getElementById("create"), textbox = document.getElementById("ausgabe");
        create.addEventListener("click", function () {
            var link = document.getElementById('downloadlink');
            link.href = makeTextFile(textbox.innerText);
            link.style.display = 'block';
        }, false);
    }
})(places || (places = {}));
//# sourceMappingURL=download.js.map