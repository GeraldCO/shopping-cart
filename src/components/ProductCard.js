import React from 'react';
import classes from './ProductCard.module.css';



export default function ProductCard(props){
    const {name, gallery, price} = props.product;
    return(
        <div className={classes.productCardContainer + " container"}>

            <div className={classes.productPictureContainer}>
                <img src={gallery[0]} alt={name} />
            </div>
            <div className='d-flex'>
                <span className="btn btn-dark">
                    Black Friday
                </span>
                <span className='btn btn-outline-success ms-1'>
                    Free Shipping 
                </span>
            </div>
            <div>
                <h4>{name}</h4>
            </div>
            <div className='div-price'>
                <span>{price}</span>
            </div>
        </div>
        
    );
}