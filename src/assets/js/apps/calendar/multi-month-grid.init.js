document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('multiMonthGridCalendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'multiMonthYear',
      editable: true,
    });
  
    calendar.render();
  });