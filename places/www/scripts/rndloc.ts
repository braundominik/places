namespace placesFin {
    let poiArr: String[] = ["alterpeter", "altesrathaus", "feldherrnhalle", "hofbraeuhaus", "hofgarten", "isartor", "karlsplatz", "marienplatz", "nationaltheater", "odeonsplatz"];
    export let currentTarget: number;
    window.addEventListener("load", init);
    function init(): void {
        let rndpoi: number = Math.round(Math.random() * 9);
        console.log(rndpoi);
        document.getElementById("changeLink").href = poiArr[rndpoi] + ".html";
        currentTarget = rndpoi;
    }
}
