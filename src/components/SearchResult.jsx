import React from 'react'
import './SearchResult.css'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import StarIcon from '@material-ui/icons/Star';
const SearchResult = ({img,location,title,description,star,price,total}) => {
    return (
        <div className='searchResult'>
            <img src={img} alt='image' />
            <FavoriteBorderIcon className='searchResult_heart'/>
            <div className="searchResult_info">
                <div className="serachResult_info_top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>___</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult_info_bottom">
                    <div className="searchResult_star">
                        <StarIcon  className='searchResult_star' / >
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult_price">
                        <p>{price}</p>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult 
