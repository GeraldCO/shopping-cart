import React from 'react';
import classes from './ProductCard.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-solid-svg-icons'



export default function ProductCard(props){
    const element = <FontAwesomeIcon icon={faFacebook} />
    const {name, gallery, price} = props.product;
    return(
        <div className={classes.productCardContainer + " container"}>

            <div className={classes.productPictureContainer + ' d-flex justify-content-center' }>
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
            <div className={classes.divPrice}>
                <span>US$ {price}.00 </span>
            </div>
            <div className={classes.rating}>
                {element}
                <FontAwesomeIcon icon={faFacebook} />
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star checked"></span>
                <span class="fa fa-star"></span>
                <span class="fa fa-star"></span>
                <span>1866</span>
            </div>
        </div>
        
    );
}