import React from 'react'
import './SearchPage.css'
import {Button} from '@material-ui/core'
import SearchResult from './SearchResult'
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
            <SearchResult 
            img='https://a0.muscache.com/im/pictures/23191485-b4aa-41ad-9011-516cb50215d6.jpg?im_w=320'
            title='Munnar,Kerala'
            location='Kerala'
            description='Visit us to have a slow vacation. Spend your days lazing, watching the mist hovering over the mountains.'
            star='1'
            price='12,758'
            total='12,758'
            />
             <SearchResult 
            img='https://a0.muscache.com/im/pictures/23191485-b4aa-41ad-9011-516cb50215d6.jpg?im_w=320'
            title='Munnar,Kerala'
            location='Kerala'
            description='Visit us to have a slow vacation. Spend your days lazing, watching the mist hovering over the mountains.'
            star='1'
            price='12,758'
            total='12,758'
            />
        </div>
    )
}

export default SearchPage


