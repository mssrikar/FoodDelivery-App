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

const RestaurantCard = ({ resData }) => {
    // ✅ DECLARE imgUrl FIRST
    const imgUrl = `https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${resData.cloudinaryImageId}`;
    
    return (
        <div className="restaurant-card" >
            <div>
            
                <span>⭐ {resData.name}</span>
                <span>• {resData.cuisines}</span>
            </div>
        </div>
    )
}




const resList = [
    {
        id: 1,
        name: "KFC",
        cuisines: ["Burgers", "Fast Food", "Chicken"],
        rating: 4.2,
        cloudinaryImageId: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fglobal.kfc.com%2Fpress-releases%2Fkfc-r-begins-its-comeback-era-issues-come-back-call-to-fried-chicken-fans-with-free-bucket-on-us-offer&psig=AOvVaw33LogmQxERDbj6a7Yb-nA-&ust=1767104494833000&source=images&cd=vfe&opi=89978449&ved=2ahUKEwiT3Oqu_-KRAxWiwDgGHYePC10QjRx6BAgAEBo", // Real KFC
        area: "Madhapur"
    },
    {
        id: 2,
        name: "Meghana Foods",
        cuisines: ["Biryani", "North Indian"],
        rating: 4.5,
        cloudinaryImageId: "vph3r5m7k9n2p4q6r8s0", // Real Meghana Biryani
        area: "Hitech City"
    },
    {
        id: 3,
        name: "Pizza Hut",
        cuisines: ["Pizza", "Italian"],
        rating: 4.1,
        cloudinaryImageId: "t3u5v7w9x1y3z5a7b9c1", // Real Pizza Hut
        area: "Gachibowli"
    },
    {
        id: 4,
        name: "Burger King",
        cuisines: ["Burgers", "Fast Food"],
        rating: 4.3,
        cloudinaryImageId: "m4n6p8r0t2v4w6x8y0z2", // Real Burger King
        area: "Kukatpally"
    },
    {
        id: 5,
        name: "Dominos Pizza",
        cloudinaryImageId: "89xx90z1a2b3c4d5e6f7",
        cuisines: ["Pizza", "Fast Food"],
        rating: 4.0,
        deliveryTime: "30-35 mins"
    },
    {
        id: 6,
        name: "McDonald's",
        cloudinaryImageId: "gh12ij34kl56mn78op90",
        cuisines: ["Burgers", "Fast Food"],
        rating: 4.3,
        deliveryTime: "20-25 mins"
    },
    {
        id: 7,
        name: "Paradise Biryani",
        cloudinaryImageId: "qr34st56uv78wx90yz12",
        cuisines: ["Biryani", "Hyderabadi"],
        rating: 4.4,
        deliveryTime: "30-35 mins"
    },
    {
        id: 8,
        name: "Chili's",
        cloudinaryImageId: "ab56cd78ef90gh12ij34",
        cuisines: ["American", "Mexican"],
        rating: 4.2,
        deliveryTime: "40-45 mins"
    },
    {
        id: 9,
        name: "Subway",
        cloudinaryImageId: "kl78mn90op12qr34st56",
        cuisines: ["Sandwich", "Healthy"],
        rating: 4.1,
        deliveryTime: "20-25 mins"
    },
    {
        id: 10,
        name: "Nirvana 9",
        cloudinaryImageId: "uv90wx12yz34ab56cd78",
        cuisines: ["Biryani", "Mughlai"],
        rating: 4.6,
        deliveryTime: "35-40 mins"
    },
    {
        id: 11,
        name: "Barbeque Nation",
        cloudinaryImageId: "ef12gh34ij56kl78mn90",
        cuisines: ["BBQ", "North Indian"],
        rating: 4.3,
        deliveryTime: "45-50 mins"
    },
    {
        id: 12,
        name: "Cafe Coffee Day",
        cloudinaryImageId: "op34qr56st78uv90wx12",
        cuisines: ["Beverages", "Snacks"],
        rating: 4.0,
        deliveryTime: "15-20 mins"
    },
    {
        id: 13,
        name: "Shakti Waters",
        cloudinaryImageId: "yz56ab78cd90ef12gh34",
        cuisines: ["South Indian", "Healthy"],
        rating: 4.4,
        deliveryTime: "25-30 mins"
    },
    {
        id: 14,
        name: "Punjab Grill",
        cloudinaryImageId: "ij78kl90mn12op34qr56",
        cuisines: ["North Indian", "Tandoor"],
        rating: 4.2,
        deliveryTime: "35-40 mins"
    },
    {
        id: 15,
        name: "Starbucks",
        cloudinaryImageId: "st90uv12wx34yz56ab78",
        cuisines: ["Beverages", "Desserts"],
        rating: 4.3,
        deliveryTime: "20-25 mins"
    }
];

const Body = () => {
    return (
        <div className="body">
            <div className="search"><p>🔍 Search</p></div>
            <div className="restaurant-container" style={{display: "flex", flexWrap: "wrap", gap: "20px"}}>
                {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.id} resData={restaurant} />
                ))}
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

        