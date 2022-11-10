import React from 'react';
import classes from './ProductCard.module.css';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faFacebook } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used




export default function ProductCard(props){
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
            <div className={classes.productName}>
                <span>{name}</span>
            </div>
            <div className={classes.divPrice}>
                <span>US$ {price}.00 </span>
            </div>
            <div className={classes.rating}>
                <FontAwesomeIcon icon={solid('star')} />
                <FontAwesomeIcon icon={solid('star')} />
                <FontAwesomeIcon icon={solid('star')} />
                <FontAwesomeIcon icon={regular('star')} />
                <FontAwesomeIcon icon={regular('star')} />
                <span>(1866)</span>
            </div>
            <p className={classes.deliveryBlock}>Receive it by tomorrow</p>
            <p className={classes.seller}>sold by <span>pc components</span></p>
        </div>
        
    );
}