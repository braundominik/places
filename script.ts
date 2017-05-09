
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
        navigator.geolocation.watchPosition(checkRange);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position): void {
    console.log("inshowpos");
    console.log(position.coords.latitude);
    document.getElementById("ausgabe").innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

//function giveLocation() {
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(giveRange);
//    } else {
//        document.getElementById("wrapper").innerHTML = "Geolocation is not supported by this browser.";
//    }
//}

function generatePoi(): String {

    console.log(poiString);
    return poiString;
}

function checkRange(position): void {
    var origin1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    var des1 = poi[0];

    var service = new google.maps.DistanceMatrixService();
    service.getDistanceMatrix(
        {
            origins: [origin1],
            destinations: [des1],
            travelMode: 'WALKING',
        }, callback);

    function callback(response, status) {
        if (oldRange < response.rows[0].elements[0].distance.value) {
            navigator.vibrate(1000);
            console.log("vibrate");
        }
        oldRange = response.rows[0].elements[0].distance.value;
        document.getElementById("ausgabe").innerHTML = response.rows[0].elements[0].distance.value;
        console.log(response.rows[0].elements[0].distance.value);
        console.log(status);
    }
}



function giveRange(position): void {

    for (var x: number = 0; x < poi.length; x++) {

        var origin1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix(
            {
                origins: [origin1],
                destinations: [poi[x]],
                travelMode: google.maps.TravelMode.DRIVING,
            }, callback);

        function callback(response, status) {
            if (status == google.maps.DistanceMatrixStatus.OK) {
                var origins = response.originAddresses;
                var destinations = response.destinationAddresses;

                for (var i: number = 0; i < origins.length; i++) {
                    var results = response.rows[i].elements;
                    for (var j = 0; j < results.length; j++) {

                        var element = results[j];
                        var distance = element.distance.text;
                        var duration = element.duration.text;
                        var from = origins[i];
                        var to = destinations[j];
                        var og = new google.maps.adress(destinations[j]);
                        console.log(og);
                        console.log(distance);
                        console.log(origins[i]);
                        console.log(destinations[j]);
                        var show = document.getElementById("ausgabe")
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


