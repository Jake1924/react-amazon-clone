import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import { ShoppingBasket } from "@mui/icons-material";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{basket,user}] = useStateValue();

  const handleAuthentication =()=>{
    if(user){
      auth.signOut();
    }
  }

  return (
    <nav className="header">
      {/* logo on the left
            search box
            3 links
            basket icon with number */}
      <Link to="/">
        <img
          className="header_logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>
        <div className="header_search">
          <input type="text" className="header_searchInput" />
        <SearchIcon className="header_searchIcon" color="primary"/>
        </div>
        
        <div className="header_nav">
          {/* 1st link */}
          <Link to="/login" className="header_link">
            <div onClick={handleAuthentication} className="header_option">
              <span className="header_optionLineOne">Hello </span>
              <span className="header_optionLineOne"> {user?.email} </span>
              <span className="header_optionLineTwo">{user ? 'Sign Out':'Sign In'}</span>
            </div>           
          </Link>
          {/* 2nd link */}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>           
          </Link>
          {/* 3rd link */}
          <Link to="/" className="header_link">
            <div className="header_option">
              <span className="header_optionLineOne">Your</span>
              <span className="header_optionLineTwo">Prime</span>
            </div>           
          </Link>
         
          {/* 4rd link */}
          <Link to="/checkout" className="header_link">
            <div className="header_optionBasket">
              {/* Shopping basket icon */}
              <ShoppingBasket/>
              {/* Number of items in the basket */}
              <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
            </div>           
          </Link>
        </div>
    
      
      </nav>
  );
}

export default Header;
