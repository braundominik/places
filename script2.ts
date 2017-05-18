namespace places {
    var x: HTMLElement = document.getElementById("ausgabe");
    document.addEventListener("DOMContentLoaded", init);
    var poi: string[] = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    var oldRange: number = 99999999999999999;
    var bla: any[];
    var latyay: any;
    var lngyay: any;

    function init(): void {

        document.getElementById("wrapper").addEventListener("click", geocodeIt);
    }


    function vibrate(): void {
        navigator.vibrate(500);
        console.log("vibrate");
    }

    function getLocation(lat: any, lng: any): void {
        lat = lat;
        lng = lng;
        console.log(latyay);
        console.log(lngyay);
        if (navigator.geolocation) {
            console.log("showPos");
            navigator.geolocation.watchPosition(calcDistance);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function calcDistance(position): void {
        var p1: any = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var p2: any = new google.maps.LatLng(lat, lng);
        document.getElementById("ausgabe").innerHTML = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    }

    function geocodeIt() {
        var geocoder = new google.maps.Geocoder();
        var address = "new york";

        geocoder.geocode({ "address": address }, function(results, status) {

            if (status == google.maps.GeocoderStatus.OK) {
                getLocation(results[0].geometry.location.lat(), results[0].geometry.location.lng());
            }
        });
    }
}