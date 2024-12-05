document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('dayGridViewCalendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'dayGridWeek',
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridWeek,dayGridDay'
      },
      editable: true,
    });
  
    calendar.render();
  });