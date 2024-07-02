document.addEventListener('DOMContentLoaded', function() {
    // Update current time in UTC
    var currentTimeUTC = new Date().toUTCString();
    document.querySelector('[data-testid="currentTimeUTC"]').textContent = currentTimeUTC;

    // Update current day of the week
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var currentDayIndex = new Date().getUTCDay();
    var currentDayOfWeek = days[currentDayIndex];
    document.querySelector('[data-testid="currentDay"]').textContent = currentDayOfWeek;
});
