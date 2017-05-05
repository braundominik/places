var x = document.getElementById("ausgabe");
document.addEventListener('DOMContentLoaded', init);
var poi = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
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
        navigator.geolocation.watchPosition(showPosition);
    }
    else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    console.log("inshowpos");
    console.log(position.coords.latitude);
    document.getElementById("ausgabe").innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
function giveLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(giveRange);
    }
    else {
        document.getElementById("wrapper").innerHTML = "Geolocation is not supported by this browser.";
    }
}
function generatePoi() {
    console.log(poiString);
    return poiString;
}
function giveRange(position) {
    for (var x = 0; x < poi.length; x++) {
        var origin1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            origins: [origin1],
            destinations: [poi[x]],
            travelMode: google.maps.TravelMode.DRIVING,
        }, callback);
        function callback(response, status) {
            if (status == google.maps.DistanceMatrixStatus.OK) {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;
                for (var i = 0; i < origins.length; i++) {
                    var results = response.rows[i].elements;
                    for (var j = 0; j < results.length; j++) {
                        var element = results[j];
                        var distance = element.distance.text;
                        var duration = element.duration.text;
                        var from = origins[i];
                        var to = destinations[j];
                        console.log(distance);
                        console.log(origins[i]);
                        console.log(destinations[j]);
                        var show = document.getElementById("ausgabe");
                        show.innerHTML = show.innerHTML + distance + "|" + origins[i] + "|" + destinations[j] + "<br>";
                    }
                }
            }
        }
    }
}
//      var url = "https://maps.googleapis.com/maps/api/distancematrix/json?origins=48.048245900000005,8.2089964&destinations=48.0510403,8.2083783&mode=walking&key=AIzaSyCvET66xGzrZGKTGrx9nQIH-Y7T2nnwxRk";
//        var give = $.ajax(
//{           type : "POST",
//            url : url,
//            dataType: "json",
//            radioType: "gsm",
//            considerIp: "true",
//            
//            success: function(data){
//                console.log(give.responseText);
//                var obj = JSON.parse(give.responseText);
//                console.log(obj.location.lat);
//                document.getElementById("wrapper").innerHTML=obj.location.lat+"lng"+obj.location.lng;
//                }
//
//});  
//# sourceMappingURL=script.js.map