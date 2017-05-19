var places;
(function (places) {
    var x = document.getElementById("ausgabe");
    document.addEventListener("DOMContentLoaded", init);
    var poi = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    var oldRange = 99999999999999999;
    var bla;
    var latyay;
    var lngyay;
    function init() {
        document.getElementById("wrapper").addEventListener("click", geocodeMe);
    }
    function vibrate() {
        navigator.vibrate(500);
        console.log("vibrate");
    }
    function getLocation(lat, lng) {
        lat = lat;
        lng = lng;
        console.log(latyay);
        console.log(lngyay);
        if (navigator.geolocation) {
            console.log("showPos");
            navigator.geolocation.watchPosition(calcDistance);
        }
        else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }
    function calcDistance(position) {
        var p1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var p2 = new google.maps.LatLng(lat, lng);
        document.getElementById("ausgabe").innerHTML = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    }
    function geocodeIt() {
        var geocoder = new google.maps.Geocoder();
        var address = "new york";
        geocoder.geocode({ "address": address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                getLocation(results[0].geometry.location.lat(), results[0].geometry.location.lng());
            }
        });
    }
    function geocodeMe() {
        var geocoder = new google.maps.Geocoder();
        var address = poi[0];
        geocoder.geocode({ "address": address }, function (results, status) {
            if (status == google.maps.GeocoderStatus.OK) {
                let lat = results[0].geometry.location.lat();
                let lng = results[0].geometry.location.lng();
                if (navigator.geolocation) {
                    console.log("showPos");
                    startWatch();
                    function startWatch() {
                        console.log("startWatch");
                        navigator.geolocation.watchPosition(function (position) {
                            console.log(lat);
                            console.log(lng);
                            var p1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                            var p2 = new google.maps.LatLng(lat, lng);
                            let dist = google.maps.geometry.spherical.computeDistanceBetween(p1, p2).toFixed(2);
                            if (oldRange < dist) {
                                navigator.vibrate(1000);
                                console.log("vibrate");
                            }
                            oldRange = dist;
                            document.getElementById("ausgabe").innerHTML = (dist);
                            setTimeout(endWatch, 1000);
                        });
                    }
                    function endWatch() {
                        console.log("endWatch");
                        startWatch();
                    }
                }
                else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            }
        });
    }
})(places || (places = {}));
//# sourceMappingURL=script2.js.map