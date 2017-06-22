namespace placesFin2 {
    var x: HTMLElement = document.getElementById("ausgabe");
    document.addEventListener("DOMContentLoaded", init);
    var poi: string[] = ["Unterallmendstraﬂe 21, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald", "Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    let latu: number = 48.0497798;
    let lngu: number = 8.210321;


    function init(): void {
        //        for (let x: number = 0; x < poi.length; x++) {
        //            setTimeout(geocode(x), (x * 1000));
        //        }


        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 5000, enableHighAccuracy: true });
    }

    function geocode(_zahl: number): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("POST", "https://maps.googleapis.com/maps/api/geocode/json?address=" + poi[_zahl] + "&key=AIzaSyCvET66xGzrZGKTGrx9nQIH-Y7T2nnwxRk", false);
        xhr.addEventListener("readystatechange", function(_event: ProgressEvent) {
            let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let antwort: JSON = JSON.parse(xhr.response);
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


    function giveRangeBetween(_positionLat: any, _positionLng: any): void {
        let org = new google.maps.LatLng(_positionLat, _positionLng);
        let dest = new google.maps.LatLng(latu, lngu);
        let range = (google.maps.geometry.spherical.computeDistanceBetween(org, dest)).toFixed(0);
        document.getElementById("showRange").innerHTML = range + "m";

        if (range < 20) {
            window.location.href = "ibau.html";

        }
    }






}
