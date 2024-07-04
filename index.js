document.addEventListener("DOMContentLoaded", function() {
    function updateDateTime() {
        const now = new Date();
        const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        const currentDate = `${days[now.getDay()]}, ${now.toLocaleDateString()}`;
        const currentTime = now.toUTCString().split(' ')[4];

        document.getElementById('currentTimeUTC').textContent = `Time: ${currentTime}UTC`;
        document.getElementById('currentDay').textContent = `Day: ${currentDate}`;
    }

    setInterval(updateDateTime, 1000);
    updateDateTime();
});
