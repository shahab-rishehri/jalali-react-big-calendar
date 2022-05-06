import React from 'react'
import BigCalendar from 'react-big-calendar'
import events from '../events'

let MyOtherNestedComponent = () => <div>NESTED COMPONENT</div>

let MyCustomHeader = ({ label }) => (
  <div>
    CUSTOM HEADER:
    <div>{label}</div>
    <MyOtherNestedComponent />
  </div>
)

let CustomHeader = ({ localizer }) => (
  <BigCalendar
    events={events}
    localizer={localizer}
    defaultDate={new Date()}
    components={{
      day: { header: MyCustomHeader },
      week: { header: MyCustomHeader },
      month: { header: MyCustomHeader },
    }}
  />
)

export default CustomHeader
