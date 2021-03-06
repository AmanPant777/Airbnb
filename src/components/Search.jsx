import React, { useState } from 'react'
import './Search.css'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DateRangePicker } from 'react-date-range'
import { Button } from '@material-ui/core'
import PeopleIcon from '@material-ui/icons/People'
//DATE PICKER COMPONENT
const Search = () => {
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())

    const selectionRange = {
        startDate: startDate,
        endDate: endDate,
        key: 'selection',
    }
    function HandleSelect(range) {
        setStartDate(range.selection.startDate)
        setEndDate(range.selection.endDate)
    }
    return (
        <div className='search'>
            <DateRangePicker ranges={selectionRange} onClick={HandleSelect} />
            <h2>Number Of Guest <PeopleIcon /></h2>
            <input type="number" defaultValue={2} />
            <Button>Search Airbnb</Button>
        </div>
    )
}
export default Search
