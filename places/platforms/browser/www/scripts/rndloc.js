var placesFin;
(function (placesFin) {
    let poiArr = ["alterpeter", "altesrathaus", "feldherrnhalle", "hofbraeuhaus", "hofgarten", "isartor", "karlsplatz", "marienplatz", "nationaltheater", "odeonsplatz"];
    window.addEventListener("load", init);
    function init() {
        let rndpoi = Math.round(Math.random() * 9);
        console.log(rndpoi);
        document.getElementById("changeLink").href = poiArr[rndpoi] + ".html";
        placesFin.currentTarget = rndpoi;
    }
})(placesFin || (placesFin = {}));
//# sourceMappingURL=rndloc.js.map