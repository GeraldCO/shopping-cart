import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage(){
    return(
        <div>
            Home Page <br/>
            < Link  to='products'> Store </Link> <br />
            < Link  to='/car'> car </Link>
        </div>
    )
}