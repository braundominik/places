document.addEventListener('DOMContentLoaded', function () {
    var poi = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald"];
    function vibrate() {
        navigator.vibrate(500);
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
        var origin1 = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        console.log(poi[1]);
        //        for(var i = 0; i<poi.length-1;i++){
        //                poiString += "`"+poi[i]+"`,"
        //            }
        //        poiStrinpo-1            
        var service = new google.maps.DistanceMatrixService();
        service.getDistanceMatrix({
            var: poiString, String: String = "poi[0]" + "," + "poi[1]",
            origins: [origin1],
            destinations: [poiString],
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
    document.getElementById("wrapper").addEventListener("click", giveLocation);
});
//# sourceMappingURL=script.js.map