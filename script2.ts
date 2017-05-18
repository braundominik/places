namespace places {
var x: HTMLElement = document.getElementById("ausgabe");
document.addEventListener('DOMContentLoaded', init);
var poi: String[] = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
var oldRange: number = 99999999999999999;

function init(): void {

    document.getElementById("wrapper").addEventListener("click", getLocation);
}


function vibrate(): void {
    navigator.vibrate(500);
    console.log("vibrate")
}

function getLocation(): void {
    if (navigator.geolocation) {
        console.log("showPos");
        navigator.geolocation.watchPosition(calcDistance);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function calcDistance(position): void {
    var p1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var p2 =  poi[0];
    document.getElementById("ausgabe").innerHTML = (google.maps.geometry.spherical.computeDistanceBetween(p1, p2) / 1000).toFixed(2);
}
    

function geocodeIt(): void {
    var toGC = poi[0];
    var geocoder = new google.maps.Geocoder();
        service.getDistanceMatrix(
            {
                origins: [origin1],
                destinations: [poi[x]],
                travelMode: google.maps.TravelMode.DRIVING,
            }, callback);

        function callback(response, status) {
        }
    }
}