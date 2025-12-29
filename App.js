import React from "react";
import ReactDOM from "react-dom/client";

/* 
    Header
        - Logo
        - NavItems
    Body
        - Search
        - RestaurantContainer
        -RestaurantCard   =====> 1)img
                            2)Name of the restaurant
                            3)cuisines
                            4)Rating
                            5)delivary time
    Footer

 */

    const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="data:image/png;base64,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" />
                     
            </div>
           <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact US</li>
                <li>Cart</li>
            </ul>

           </div>
            
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurant-card" style={{backgroundColor:"#f0f0f0"}}> 
        <img className="res-logo"
         alt="res-logo" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_292,h_300/TopPicks2024/13293077E.png" />
        <h3>Meghana Foods</h3>
        <p>Biryani, North Indian, Chinese</p>
        <span>4.5 ★  •  30 mins  •  ₹400 for two</span>
        
          </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">
                    <p>Search</p>
            </div>
            <div className="restaurant-container">

             {/* Restaurant Cards will go here */}
             <RestaurantCard />
             <RestaurantCard />
             <RestaurantCard />
             <RestaurantCard />
             <RestaurantCard />
             <RestaurantCard />

            </div>

        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);

        