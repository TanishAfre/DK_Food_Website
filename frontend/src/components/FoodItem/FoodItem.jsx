import React, { useContext} from 'react';
import './FoodItem.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id , name , price1, price2 ,description , image}) => {
    const {cartItems , addToCart , removeFromCart} = useContext(StoreContext)
    return (
        <>
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt="image food"/>
                {!cartItems[id]
                ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="add"/>
                :<div className='food-item-counter'>
                    <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="remove"/>
                    <p>{cartItems[id]}</p>
                    <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt='add button'/>
                </div>
                }
            </div>
            <div className='food-item-info'>
                <div className='food-item-name-rating'>
                    <p>{name}</p>
                    <img src={assets.rating_starts} alt="rating starts" />
                </div>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>
                <span className='price-range'>
                {price2 !== null ? (
                        <>
                            <span className='price-min'>€{price1}</span>
                            <span className='price-separator'>-</span>
                            <span className='price-max'>€{price2}</span>
                        </>
                    ) : (
                        <span className='price-single'>€{price1}</span>
                    )}
                </span>
                </p>
            </div>
        </div>
        </>
    );
}

export default FoodItem;