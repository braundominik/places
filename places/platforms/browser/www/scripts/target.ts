namespace placesFin {
    var x: HTMLElement = document.getElementById("ausgabe");
    document.addEventListener("DOMContentLoaded", init);
    var poi: string[] = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald", "Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    let poiToCoord: string[][] = [];

    function init(): void {
        for (let x: number = 0; x < poi.length; x++) {
            setTimeout(geocode(x), (x * 1000));
        }

        //        console.log("geocode finished");
        //        for (let i: number = 0; i < poiToCoord.length; i++) {
        //            console.log(poiToCoord);
        //        }

        var watchID = navigator.geolocation.watchPosition(onSuccess, onError, { timeout: 30000, enableHighAccuracy: true });
    }

    function geocode(_zahl: number): void {
        console.log("bla");
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("POST", "https://maps.googleapis.com/maps/api/geocode/json?address=" + poi[_zahl] + "&key=AIzaSyCvET66xGzrZGKTGrx9nQIH-Y7T2nnwxRk", false);
        xhr.addEventListener("readystatechange", function(_event: ProgressEvent) {
            let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
            if (xhr.readyState == XMLHttpRequest.DONE) {
                let antwort: JSON = JSON.parse(xhr.response);
                poiToCoord[_zahl][1] = "bla";
                //poiToCoord[_zahl][2] = xhr.response.results.geometry.location.lng;
                console.log(poiToCoord);
                console.log(antwort.results[0].geometry.location.lat);
                console.log("ready: " + xhr.readyState, " | type: " + xhr.responseType, " | status:" + xhr.status, " | text:" + xhr.statusText);
                console.log(antwort);
            }
        });
        xhr.send();
    }


    function onSuccess(position) {
        console.log('Latitude: ' + position.coords.latitude + '<br />' +
            'Longitude: ' + position.coords.longitude + '<br />' +
            '<hr />')
    }

    function onError(error) {
        console.log('code: ' + error.code + '\n' +
            'message: ' + error.message + '\n');
    }






}
