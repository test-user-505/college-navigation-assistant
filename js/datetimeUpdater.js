$(function() {
    function updateDateTime() {
        var now = new Date();
        var dayOfWeek = now.toLocaleDateString('en', { weekday: 'long' });
        var date = now.toLocaleDateString('en', { month: 'long', day: 'numeric', year: 'numeric' });
        var time = now.toLocaleTimeString('en', { hour: 'numeric', minute: 'numeric', hour12: true });
        
        $("#day").text(dayOfWeek); 
        $("#date").text(date); 
        $("#time").text(time); 
    }
 
    updateDateTime();

    setInterval(updateDateTime, 1000);
});

