document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('weekNumberCalendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      initialView: 'dayGridMonth',
      weekNumbers: true
    });
  
    calendar.render();
  });