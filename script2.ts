namespace places {
    var x: HTMLElement = document.getElementById("ausgabe");
    document.addEventListener("DOMContentLoaded", init);
    var poi: string[] = ["Robert-Gerwig-Platz 1, 78120 Furtwangen im Schwarzwald", "Friedrichstrasse 17, 78120 Furtwangen im Schwarzwald", "Marktpl. 9, 78120 Furtwangen im Schwarzwald", "Colnestrasse 6, 78120 Furtwangen im Schwarzwald"];
    var oldRange: number = 99999999999999999;
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



    function geocodeMe(): void {
        var geocoder: any = new google.maps.Geocoder();
        var address: string = poi[0];

        geocoder.geocode({ "address": address }, function(results: any, status: any): void {

            if (status == google.maps.GeocoderStatus.OK) {

                let lat: string = results[0].geometry.location.lat();
                let lng: string = results[0].geometry.location.lng();

                if (navigator.geolocation) {
                    console.log("showPos");

                    var options = {
                        timeout: 1000,
                        enableHighAccuracy: true,
                        maximumAge: 1000
                    };

                    startWatch();
                    function startWatch(): void {
                        navigator.geolocation.getCurrentPosition(position, error, options);
                        setTimeout(endWatch, 1000);
                    }

                    let hoehe: number = 10;
                    function position(position) {
                        console.log(position);
                        console.log(lat);
                        console.log(lng);
                        var p1: any = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
                        var p2: any = new google.maps.LatLng(lat, lng);

                        let dist: any = google.maps.geometry.spherical.computeDistanceBetween(p1, p2).toFixed(2);

                        if (Math.sign(oldRange - dist)) {
                            navigator.vibrate(1000);
                            console.log("vibrate");
                        }
                        oldRange = dist;

                        //                        document.getElementById("ausgabe").innerHTML = "Accuracy " + position.coords.accur                        
                        document.getElementById("ausgabe").innerHTML += "Lat " + position.coords.latitude + "Long " + position.coords.longitude + "</br>";
                        hoehe = hoehe + 20;
                        document.getElementById("ausgabe").style.height = hoehe + "px";

                    }
                }

                function error(err: any): void {
                    console.log("bla");
                    console.log(err);
                }


                function endWatch(): void {
                    setTimeout(startWatch, 1000);
                }


            } else {
                x.innerHTML = "Geolocation is not supported by this browser.";
            }
        });

    }
}
