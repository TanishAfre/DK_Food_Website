import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";
const ExploreMenu = ({category , setCategory}) => {
  return (
    <>
      <div className="explore-menu" id="explore-menu">
        <h1>Explore our options</h1>
        <p className="explore-menu-text">Discover a world of mobile solutions with our comprehensive selection of products and services. From buying and selling phones to expert repairs, stylish accessories, and protective covers, we’ve got everything you need to stay connected. Plus, explore our exclusive range of vapes. Your mobile experience starts here!</p>
        <div className="explore-menu-list">
          {menu_list.map((item , index)=>{
            return(
              <div key={index} onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className="explore-menu-list-item">
                <img src={item.menu_image} className={category===item.menu_name?"active":""} alt="image"/>
                <p>{item.menu_name}</p>
              </div>
            )
          })}
        </div>
        <hr/>
        
      </div>
    </>
  );
};

export default ExploreMenu;