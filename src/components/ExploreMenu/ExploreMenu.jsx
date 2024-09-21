import React from 'react'
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"

const ExploreMenu = ({category,setCategory}) => {

  return (
    <div className='explore-menu' id='explore-menu'>
      <h1>Explore Menu</h1>
      <p className='explore-menu-text'>           Hunger pangs attacking? Our food delivery service is your hero!
            Order from a vast selection of restaurants, indulge in global
            flavors, and have a satisfying meal delivered in no time. Order now
            - your taste buds will thank you!</p>
      
      <div className='explore-menu-list'>
        {menu_list.map((item,index)=>{
          return (
            <div onClick={()=>{setCategory(prev=>prev===item.menu_name?"All":item.menu_name)}} key={index} className='explore-menu-list-item'>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreMenu
