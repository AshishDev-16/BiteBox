import React, { useContext, useState } from 'react'
import "./Header.css";
const Header = () => {
  const [menu,setMenu] = useState("menu ");
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order Your Favourite Food Here</h2>
        <p>
        Craving delicious food but stuck at work or home? We deliver restaurant meals straight to your door. Order from your favorite spots, enjoy a variety of cuisines, and skip the cooking - all with a few taps.</p>
        <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu"?"active":""}>Menu</a>
      </div>
    </div>
  );
};

export default Header;
