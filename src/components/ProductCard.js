import React from 'react'

export default function ProductCard(props){
    const {name, gallery, price} = props.product;
    return(
        <div class="card" style={{width: '18rem'}} >
            <div id='picture-container'  style={{height: '200px'}} >
            <img src={gallery[0]} alt="shop product" className='card-img-top' width='10px' />
            </div>
            
            <div className='card-body'>
                <h5 className='card-title'>{name}</h5>
                <p className='card-text'>
                    {price}
                </p>
            </div>          


{/* 
            <div class="d-flex justify-content-center container mt-5">
        <div class="card p-3 bg-white"><i class="fa fa-apple"></i>
            <div class="about-product text-center mt-2"><img src={gallery[0]} alt={name} width="300" />
                <div>
                    <h6 class="mt-0 text-black-50">{name}</h6>
                </div>
            </div>
            <div class="stats mt-2">
                <div class="d-flex justify-content-between p-price"><span> {price} </span></div>
            </div>
        </div>
    </div> */}


        </div>
        
    );
}