var timeline2;
(function (timeline2) {
    window.addEventListener("load", init);
    let elements = document.getElementsByTagName("td");
    let content = [];
    function init() {
        for (let i = 0; i < elements.length; i++) {
            elements[i].addEventListener("click", handleEvent);
        }
        document.getElementById("choseTime").removeEventListener("click", handleEvent);
    }
    function handleEvent(_event) {
        console.log(_event);
        for (let l = 0; l < elements.length; l++) {
            content[l] = elements[l].textContent;
        }
        if (_event.target.cellIndex < 4) {
            for (let s = 0; s < elements.length; s++) {
                if (s == 0) {
                    elements[s].textContent = content[content.length - 1];
                }
                else {
                    elements[s].textContent = content[s - 1];
                }
            }
        }
        if (_event.target.cellIndex > 4) {
            for (let s = 0; s < elements.length; s++) {
                if (s == elements.length - 1) {
                    elements[s].textContent = content[0];
                }
                else {
                    elements[s].textContent = content[s + 1];
                }
            }
        }
        document.getElementById("choseTime").style.color = "white";
        document.getElementById("choseTime").addEventListener("click", function () {
            location.href = "4.html";
        });
    }
})(timeline2 || (timeline2 = {}));
//# sourceMappingURL=timeline.js.map