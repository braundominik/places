namespace places {
    var x: HTMLElement = document.getElementById("ausgabe");
    document.addEventListener("DOMContentLoaded", init);
    var poi: string[] = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    var oldRange: number = 99999999999999999;
    var bla: any[];
    var latyay: any;
    var lngyay: any;

    function init(): void {

        document.getElementById("wrapper").addEventListener("click", geocodeMe);
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



    function geocodeMe(): void {
        var geocoder: any = new google.maps.Geocoder();
        var address: string = poi[0];

        geocoder.geocode({ "address": address }, function(results: any, status: any): void {

            if (status == google.maps.GeocoderStatus.OK) {

                let lat: string = results[0].geometry.location.lat();
                let lng: string = results[0].geometry.location.lng();

                if (navigator.geolocation) {
                    console.log("showPos");
                    startWatch();
                    function startWatch(): void {
                        console.log("startWatch");
                        navigator.geolocation.watchPosition(function(position: any): void {
                            console.log(lat);
                            console.log(lng);
                            var p1: any = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                            var p2: any = new google.maps.LatLng(lat, lng);

                            let dist: any = google.maps.geometry.spherical.computeDistanceBetween(p1, p2).toFixed(2);

                            if (oldRange < dist) {
                                navigator.vibrate(1000);
                                console.log("vibrate");
                            }
                            oldRange = dist;

                            document.getElementById("ausgabe").innerHTML = (dist);
                            setTimeout(endWatch, 1000);

                        });
                    }

                    function endWatch(): void {
                        console.log("endWatch");
                        startWatch();
                    }


                } else {
                    x.innerHTML = "Geolocation is not supported by this browser.";
                }
            }

        });
    }

}