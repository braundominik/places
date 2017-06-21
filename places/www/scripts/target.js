var placesFin;
(function (placesFin) {
    var x = document.getElementById("ausgabe");
    document.addEventListener("DOMContentLoaded", init);
    var poi = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald", "Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    let poiToCoord = [[]];
    function init() {
        for (let x = 0; x < poi.length; x++) {
            setTimeout(geocode(x), (x * 1000));
        }
        //        console.log("geocode finished");
        //        for (let i: number = 0; i < poiToCoord.length; i++) {
        //            console.log(poiToCoord);
        //        }
        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });
    }
    function geocode(_zahl) {
        console.log("bla");
        let xhr = new XMLHttpRequest();
        xhr.open("POST", "https://maps.googleapis.com/maps/api/geocode/json?address=" + poi[_zahl] + "&key=AIzaSyCvET66xGzrZGKTGrx9nQIH-Y7T2nnwxRk", false);
        xhr.addEventListener("readystatechange", function (_event) {
            let xhr = _event.target;
            if (xhr.readyState == XMLHttpRequest.DONE) {
                //                poiToCoord[_zahl][1] = xhr.response.results.geometry.location.lat;
                //                poiToCoord[_zahl][2] = xhr.response.results.geometry.location.lng;
                //                let lng: any = xhr.response.results[0].geometry.location.lat();
                //                console.log(lng);
                console.log(_event);
                console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
                console.log("response: " + xhr.response);
            }
        });
        xhr.send();
    }
    function onSuccess(position) {
        console.log('Latitude: ' + position.coords.latitude + '<br />' +
            'Longitude: ' + position.coords.longitude + '<br />' +
            '<hr />');
    }
    function onError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }
})(placesFin || (placesFin = {}));
//# sourceMappingURL=target.js.map