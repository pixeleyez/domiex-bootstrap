document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('timelineCalendar');
  
    var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'UTC',
      headerToolbar: {
        left: 'today prev,next',
        center: 'title',
        right: 'resourceTimelineDay,resourceTimelineTenDay,resourceTimelineMonth,resourceTimelineYear'
      },
      initialView: 'resourceTimelineDay',
      scrollTime: '08:00',
      aspectRatio: 1.5,
      views: {
        resourceTimelineDay: {
          buttonText: ':15 slots',
          slotDuration: '00:15'
        },
        resourceTimelineTenDay: {
          type: 'resourceTimeline',
          duration: { days: 10 },
          buttonText: '10 days'
        }
      },
      editable: true,
      resourceAreaHeaderContent: 'Rooms',
      resources: 'https://fullcalendar.io/api/demo-feeds/resources.json?with-nesting&with-colors',
      events: 'https://fullcalendar.io/api/demo-feeds/events.json?single-day&for-resource-timeline'
    });
  
    calendar.render();
  });