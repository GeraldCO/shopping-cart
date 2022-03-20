import React from 'react';
import { gsap } from "gsap";

function Cart (props) {
    const showingClass = props.showingCart ? '' : 'hide';

    const isCartEmpty = function (cart){
        if (cart.length === 0  ){
            return (
                <span> Your shopping cart is empty </span>
            )
        }
    }

    const shoppingCartItem = function(item){
        return(
            <div className='cart-item'>
                <img src={item.gallery[0]} alt="" />
                <div>
                    <h4>{item.name}</h4>
                    <p>{item.about[0]}</p>
                </div>
                <div className='item-item-price'>{item.price}</div>
            </div>
        )
    }    

    const style={
        opacity: !props.showingCart ? "0" : "1",
        transition: "all 0.5s",
        visibility: !props.showingCart ? "hidden" : "visible",
      }

    return (
        <div style={style} className={'cart-container menu '+ showingClass} ref={props.divEl} >
            <button type='button' className='close-cart' onClick={()=>props.changeCartVisiility(false)} >x</button>
            <h3>
            Your shopping cart
            </h3>
            <p>
            {
                 isCartEmpty(props.cart)
            }
            </p>
            {
                props.cart.map((item)=>{
                    return shoppingCartItem(item)
                })
            }
            <p>Subtotal: {props.totalPrice}</p>
            <button className='checkout-button'> Checkout </button>
            <button className='checkout-button' onClick={()=>props.changeCartVisiility(false)} > Continue buying </button>
        </div>
    );
}

export default Cart;