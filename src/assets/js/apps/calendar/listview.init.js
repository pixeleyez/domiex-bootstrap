document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('listViewCalendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      initialView: 'listWeek',
      events: [
        { title: 'Meeting', start: new Date() },
        { title: 'Update Weekly', start: new Date() }
    ]
    });
  
    calendar.render();
  });