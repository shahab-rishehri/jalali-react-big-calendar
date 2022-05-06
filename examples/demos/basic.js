import React from 'react'
import BigCalendar from '../../src/index.js'
import events from '../events'
import dates from '../../src/utils/dates'

let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

let Basic = ({ localizer }) => (
  <BigCalendar
    events={events}
    views={allViews}
    step={60}
    showMultiDayTimes
    max={dates.add(dates.endOf(new Date(), 'day'), -1, 'hours')}
    defaultDate={new Date()}
    // localizer={localizer}
  />
)

export default Basic
