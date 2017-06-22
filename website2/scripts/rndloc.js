var placesFin2;
(function (placesFin2) {
    let poiArr = ["alterpeter", "altesrathaus", "feldherrnhalle", "hofbraeuhaus", "hofgarten", "isartor", "karlsplatz", "marienplatz", "nationaltheater", "odeonsplatz"];
    window.addEventListener("load", init);
    function init() {
        let rndpoi = Math.round(Math.random() * 9);
        console.log(rndpoi);
        document.getElementById("changeLink").href = poiArr[rndpoi] + ".html";
        placesFin2.currentTarget = rndpoi;
    }
})(placesFin2 || (placesFin2 = {}));
//# sourceMappingURL=rndloc.js.map