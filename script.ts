document.addEventListener('DOMContentLoaded', function() {

    var poi: String[] = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    function vibrate(): void {
        navigator.vibrate(500);
    }

    function giveLocation(): void {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(giveRange);
        } else {
            document.getElementById("wrapper").innerHTML = "Geolocation is not supported by this browser.";
        }
    }



    function giveRange(position: any): void {

        for (var x: number = 0; x < poi.length; x++) {

            var origin1: any = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

            var service: any = new google.maps.DistanceMatrixService();
            service.getDistanceMatrix(
                {
                    origins: [origin1],
                    destinations: [poi[x]],
                    travelMode: google.maps.TravelMode.DRIVING
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
                            console.log(og);
                            var show = document.getElementById("ausgabe")
                            show.innerHTML = show.innerHTML + distance + "|" + origins[i] + "|" + destinations[j] + "<br>";


                        }

                    }
                }
            }
        }
    }
    
    function giveLoc(){
    var geoloc = new google.maps.Geocoder();
        geoloc.getGeocoder(
        {
                adress: [poi[1]]
                }, callback);

            function callback(response, status) {
                var test = response.results;
//        var destinationLatitude = 48.861519;
//        var destinationLongitude = 2.3345495;
        }
        }

    //Berechne Pfeilrichtung

    function calculateArrowRotation(location) {
        // Point from here (Arc de Triomph, Paris)
        // var phoneLatitude = 48.873934;
        // var phoneLongitude = 2.2949;

        // Point from here (Gare du Nord, Paris)
        var phoneLatitude = 48.87977;
        var phoneLongitude = 2.355752;

        // Point to here (Musée du Louvre, Place du Carrousel, Paris, France)
        

        var arrowAngle = bearing(phoneLatitude, phoneLongitude, destinationLatitude, destinationLongitude);

        var element = document.getElementById('arrow');
        element.style['transform'] = 'rotate(' + arrowAngle + 'deg)';

        var info = document.getElementById("info");
        info.innerHTML = "Longitude = " + phoneLongitude + "<br/>Latitude = " + phoneLatitude + "<br/>Arrow angle = " + arrowAngle;
    }

    function bearing(lat1, lng1, lat2, lng2) {
        var dLon = (lng2 - lng1);
        var y = Math.sin(dLon) * Math.cos(lat2);
        var x = Math.cos(lat1) * Math.sin(lat2) - Math.sin(lat1) * Math.cos(lat2) * Math.cos(dLon);
        var rad = Math.atan2(y, x);
        var brng = toDeg(rad);
        return 360 - ((brng + 360) % 360);
    }

    function toRad(deg) {
        return deg * Math.PI / 180;
    }

    function toDeg(rad) {
        return rad * 180 / Math.PI;
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

    document.getElementById("wrapper").addEventListener("click", giveLoc);


});