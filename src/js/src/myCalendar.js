(function () {
  var data = [
    {
      title: 'All Day Event',
      start: '2015-02-01'
    },
    {
      title: 'Long Event',
      start: '2015-02-07',
      end: '2015-02-10'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2015-02-09T16:00:00'
    },
    {
      id: 999,
      title: 'Repeating Event',
      start: '2015-02-16T16:00:00'
    },
    {
      title: 'Conference',
      start: '2015-02-11',
      end: '2015-02-13'
    },
    {
      title: 'Meeting',
      start: '2015-02-12T10:30:00',
      end: '2015-02-12T12:30:00'
    },
    {
      title: 'Lunch',
      start: '2015-02-12T12:00:00'
    },
    {
      title: 'Meeting',
      start: '2015-02-12T14:30:00'
    },
    {
      title: 'Happy Hour',
      start: '2015-02-12T17:30:00'
    },
    {
      title: 'Dinner',
      start: '2015-02-12T20:00:00'
    },
    {
      title: 'Birthday Party',
      start: '2015-02-13T07:00:00'
    },
    {
      title: 'Click for Google',
      url: 'https://google.com/',
      start: '2015-02-28'
    }
  ]

  var newData = [
    {
      title: 'stuff',
      start: '2015-03-01'
    },
    {
      title: 'stuff',
      start: '2015-03-02'
    }
  ]
  var popTemplate = [
    '<div class="popover" style="max-width:600px;" >',
    '<div class="arrow"></div>',
    '<div class="popover-header">',
    '<button id="closepopover" type="button" class="close" aria-hidden="true">&times;</button>',
    '<h3 class="popover-title"></h3>',
    '</div>',
    '<div class="popover-content"></div>',
    '</div>'
  ].join('')
  var popoverElement
  var calendarSelectStart
  var calendarSelectEnd

  $(document).ready(function(){
    var savePopoverDom = document.getElementById('savePopover')
    var calendarDom = document.getElementById('calendar')

    $(calendarDom).fullCalendar({
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },
      defaultDate: '2015-02-12',
      navLinks: true, // can click day/week names to navigate views
      selectable: true,
      selectHelper: true,
      select(start, end, jsEvent) {
        closePopovers()

        popoverElement = $(jsEvent.target)
        $(jsEvent.target)
          .popover({
            title: 'the title',
            content() {
              return (
                '<div class="popoverContent">' +
                '  <input type="text" class="form-control" id="popoverContentInput"/>' +
                '  <button type="button" class="btn btn-primary" id="savePopover">儲存</button>' +
                '</div>'
              )
            },
            template: popTemplate,
            placement: 'left',
            html: 'true',
            trigger: 'click',
            animation: 'true',
            container: 'body'
          })
          .popover('show')
        calendarSelectStart = start
        calendarSelectEnd = end
      },
      eventClick(calEvent, jsEvent, view) {
        popoverElement = $(jsEvent.currentTarget)
      },
      eventRender(event, element) {
        element.append('<span class=\'closeon fc-devare\'>X</span>')
        element.find('.closeon').click(function(){
          if (confirm('確認刪除?')) {
            $('#calendar').fullCalendar('removeEvents', event._id)
          }
        })
      },
      editable: true,
      eventLimit: true,
      events: data
    })

    $(calendarDom).on('click', '.fc-next-button', function(){
      // alert('clicked');
      $(calendarDom).fullCalendar('removeEvents')
      $(calendarDom).fullCalendar('addEventSource', newData)
    })
    $(calendarDom).on('click', '.fc-prev-button', function(){
      // alert('clicked');
      $(calendarDom).fullCalendar('removeEvents')
      $(calendarDom).fullCalendar('addEventSource', data)
    })

    $(document).on('click', '#savePopover', function(e) {
      var popoverContentInputDom = document.getElementById(
        'popoverContentInput'
      )
      if (popoverContentInputDom.value) {
        $(calendarDom).fullCalendar(
          'renderEvent',
          {
            title: popoverContentInputDom.value,
            start: calendarSelectStart,
            end: calendarSelectEnd
          },
          true
        ) // stick? = true
      }
      $(calendarDom).fullCalendar('unselect')
      closePopovers()
    })

    $('body').on('click', function(e) {
      // close the popover if: click outside of the popover || click on the close button of the popover
      if (
        popoverElement &&
        (!popoverElement.is(e.target) &&
          popoverElement.has(e.target).length === 0 &&
          $('.popover').has(e.target).length === 0 ||
          popoverElement.has(e.target) && e.target.id === 'closepopover')
      ) {
        // / $('.popover').popover('hide'); --> works

        closePopovers()
      }
    })

    function closePopovers() {
      $('.popover')
        .not(this)
        .popover('hide')
    }
  })
}())
