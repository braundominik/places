var placesFin2;
(function (placesFin2) {
    var x = document.getElementById("ausgabe");
    document.addEventListener("DOMContentLoaded", init);
    var poi = ["Unterallmendstra�e 21, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald", "Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    let latu = 48.0497798;
    let lngu = 8.210321;
    function init() {
        //        for (let x: number = 0; x < poi.length; x++) {
        //            setTimeout(geocode(x), (x * 1000));
        //        }
        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 5000, enableHighAccuracy: true });
    }
    function geocode(_zahl) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://maps.googleapis.com/maps/api/geocode/json?address=" + poi[_zahl] + "&key=AIzaSyCvET66xGzrZGKTGrx9nQIH-Y7T2nnwxRk", false);
        xhr.addEventListener("readystatechange", function (_event) {
            let xhr = _event.target;
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let antwort = JSON.parse(xhr.response);
                console.log(antwort.results[0].geometry.location.lat);
                console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
                console.log(antwort);
            }
        });
        xhr.send();
    }
    function onSuccess(position) {
        console.log('Latitude: ' + position.coords.latitude + '<br />' +
            'Longitude: ' + position.coords.longitude);
        giveRangeBetween(position.coords.latitude, position.coords.longitude);
    }
    function onError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
    function giveRangeBetween(_positionLat, _positionLng) {
        let org = new google.maps.LatLng(_positionLat, _positionLng);
        let dest = new google.maps.LatLng(latu, lngu);
        document.getElementById("showRange").innerHTML = (google.maps.geometry.spherical.computeDistanceBetween(org, dest) / 1000).toFixed(2);
    }
})(placesFin2 || (placesFin2 = {}));
//# sourceMappingURL=target.js.map