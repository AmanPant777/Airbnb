import React, { useState } from "react";
import "./Banner.css";
import { Button } from "@material-ui/core";
import Search from "./Search";
import { useHistory } from "react-router";
const Banner = () => {
  const history=useHistory()
  const [showSearch, setShowSearch] = useState(false);

  return (
    <div>
        <div className="banner_search">
          {showSearch && (
            <h1>
              <Search />
            </h1>
          )}
          <Button
            onClick={() => setShowSearch(!showSearch)}
            className="banner_searchbutton"
            variant="outlined"
          >
            Search Dates
          </Button>
        </div>
      <div className="banner">
        
        <div className="banner_info">
          <h1>Get out and stretch your imagination</h1>
          <h5>
            Plan a different kind of gateway to uncover the hidden gems near you
          </h5>
          <Button onClick={()=>history.push('/search')} variant="outlined">Explore Nearby</Button>
        </div>
      </div>
    </div>
  );
};
export default Banner;
