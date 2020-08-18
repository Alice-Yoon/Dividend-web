import React from 'react'

import { Inject, ScheduleComponent, Day, Week, WorkWeek, Month, Agenda  } from '@syncfusion/ej2-react-schedule';

import "./CalendarCss.css"
// import 'https://cdn.syncfusion.com/ej2/material.css';

function Calendar() {
    return (
        <ScheduleComponent>
          <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/> 
        </ScheduleComponent>
    )
}

export default Calendar;