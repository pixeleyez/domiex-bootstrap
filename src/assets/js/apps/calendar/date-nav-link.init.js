document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('dateNavLinkCalendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      navLinks: true,
      headerToolbar: {
        left: 'prev,next today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay'
      },
      events: 'https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline'
    });
  
    calendar.render();
  });