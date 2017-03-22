document.addEventListener('DOMContentLoaded', function() {

    function vibrate(): void {
        navigator.vibrate(500);
    }

    document.getElementById("wrapper").addEventListener("click", vibrate);

});