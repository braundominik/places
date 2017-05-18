var places;
(function (places) {
    var x = document.getElementById("ausgabe");
    document.addEventListener('DOMContentLoaded', init);
    var poi = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    var oldRange = 99999999999999999;
    function init() {
        document.getElementById("wrapper").addEventListener("click", getLocation);
    }
    function vibrate() {
        navigator.vibrate(500);
        console.log("vibrate");
    }
    function getLocation() {
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
        var p2 = poi[0];
        document.getElementById("ausgabe").innerHTML = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
    }
    function geocodeIt() {
        var toGC = poi[0];
        var geocoder = new google.maps.Geocoder();
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [poi[x]],
            travelMode: google.maps.TravelMode.DRIVING,
        }, callback);
        function callback(response, status) {
        }
    }
})(places || (places = {}));
//# sourceMappingURL=script2.js.map