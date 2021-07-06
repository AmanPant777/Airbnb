import React from 'react'
import './SearchPage.css'
import {Button} from '@material-ui/core'
const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className="searchPage_info">
                <p>62 stays. 26 August to 24 November</p>
                <h1>Stays Nearby</h1>
                <Button variant='outlined'>
                  Cancellation flexiblity
                </Button>
                <Button variant='outlined'>
                 Type of place
                </Button>
                <Button variant='outlined'>
                   Price
                </Button>
                <Button variant='outlined'>
                  Rooms and Beds 
                </Button>
                <Button variant='outlined'>
                    More Filters
                </Button>
            </div>
        </div>
    )
}

export default SearchPage


