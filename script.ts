document.addEventListener('DOMContentLoaded', function() {

    function vibrate(): void {
        navigator.vibrate(500);
    }

    function giveLocation():void {
        var url = "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyCvET66xGzrZGKTGrx9nQIH-Y7T2nnwxRk";
        
        var give = $.ajax(
{           type : "POST",
            url : url,
            dataType: "json",
            
            success: function(data){
                console.log(give.responseText);
                var obj = JSON.parse(give.responseText);
                console.log(obj.location.lat)
                document.getElementById("wrapper").innerHTML=obj.lat;
                
                }

});  
        
   
        
    }
        document.getElementById("wrapper").addEventListener("click", giveLocation);

    
    });