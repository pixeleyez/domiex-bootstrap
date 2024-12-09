import { Draggable } from '@fullcalendar/interaction';

document.addEventListener('DOMContentLoaded', function() {
  var currentYear = new Date().getFullYear();
  var currentMonth = new Date().getMonth();

  // Initialize the FullCalendar
  var calendarEl = document.getElementById('calendar');

  var calendar = new FullCalendar.Calendar(calendarEl, {
      timeZone: 'America/New_York',
      initialView: 'dayGridMonth',
      events: [
          { id: 1, title: 'Meeting', end: new Date(currentYear, currentMonth, 1), start: new Date(currentYear, currentMonth, 1), extendedProps: { guests: [], location: "surat" }, classNames: ['bg-success', 'hover:bg-success', 'text-success', 'p-2', 'rounded-2'] },
          { id: 2, title: 'Update Weekly', end: new Date(currentYear, currentMonth, 7), start: new Date(currentYear, currentMonth, 7), extendedProps: { location: "surat" }, classNames: ['bg-primary', 'hover:bg-primary', 'text-primary', 'p-2', 'rounded-2'] },
          { id: 3, title: 'Family Dinner', end: new Date(currentYear, currentMonth, 14), start: new Date(currentYear, currentMonth, 14), extendedProps: { location: "surat" }, classNames: ['bg-secondary', 'hover:bg-secondary', 'text-secondary', 'p-2', 'rounded-2'] },
          { id: 4, title: 'School Reunion', end: new Date(currentYear, currentMonth, 10), start: new Date(currentYear, currentMonth, 10), extendedProps: { location: "surat" }, classNames: ['bg-info', 'hover:bg-info', 'text-info', 'p-2', 'rounded-2'] },
          { id: 5, title: 'Holiday Tour', end: new Date(currentYear, currentMonth, 14), start: new Date(currentYear, currentMonth, 14), extendedProps: { location: "surat" }, classNames: ['bg-success', 'hover:bg-success', 'text-success', 'p-2', 'rounded-2'] },
          { id: 6, title: 'Meeting', end: new Date(currentYear, currentMonth, 23), start: new Date(currentYear, currentMonth, 23), extendedProps: { location: "surat" }, classNames: ['bg-success', 'hover:bg-success', 'text-success', 'p-2', 'rounded-2'] },
          { id: 7, title: 'Marriage Function', start: new Date(currentYear, currentMonth, 18), end: new Date(currentYear, currentMonth, 18), extendedProps: { location: "surat" }, classNames: ['bg-secondary', 'hover:bg-secondary', 'text-secondary', 'p-2', 'rounded-2'] },
      ],
      editable: true,
      droppable: true, // Enable dropping
      eventContent: (info) => {
          const containerEl = document.createElement('div');
          const titleEl = document.createElement('div');
          titleEl.classList.add('fc-event-title', 'flex-grow-1', 'text-truncate', 'text-white', 'fs-sm');
          titleEl.innerText = info.event.title;
          containerEl.appendChild(titleEl);

          return { domNodes: [containerEl] };
      },
      dateClick: function() {
          var modal = new bootstrap.Modal(document.getElementById('addEventModal'));
          modal.show();
      },
      // Enabling the drag-and-drop functionality
      drop: function(info) {
          // Handle dropped events
          console.log("info", info)
          var draggedEvent = info.draggedEl; 
          var eventTitle = draggedEvent.querySelector('.fc-event-main').innerText; 
          var newEvent = {
              title: eventTitle,
              start: info.date,
              end: info.date,
              allDay: true
          };

          // Add the event to FullCalendar
          calendar.addEvent(newEvent);
      }
  });

  calendar.render();

  // Make the external events draggable
  var draggableEvents = document.querySelectorAll('.draggable-event');
  draggableEvents.forEach(function(event) {
      new Draggable(event, {
          eventData: function() {
            console.log("event", event)
              return {
                  title: event.querySelector('.fc-event-main') ? event.querySelector('.fc-event-main').innerText : event.parentElement.querySelector('.fc-event-main').innerText
              };
          }
      });
  });
});




// Payment Status Select
VirtualSelect.init({
  ele: "#ColorSelect",
  options: [
      { label: "Blue", value: "primary" },
      { label: "Green", value: "green" },
      { label: "Purple", value: "purple" }
  ],
});
