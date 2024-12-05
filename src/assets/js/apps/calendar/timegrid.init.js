document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('listViewCalendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'timeGridWeek',
      headerToolbar: {
        left: 'prev,next',
        center: 'title',
        right: 'timeGridWeek,timeGridDay'
      },
    });
  
    calendar.render();
  });