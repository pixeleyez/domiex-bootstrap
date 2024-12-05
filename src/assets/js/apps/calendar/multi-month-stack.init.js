document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('multiMonthStackCalendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'multiMonthYear',
      multiMonthMaxColumns: 1,
      editable: true,
    });
  
    calendar.render();
  });