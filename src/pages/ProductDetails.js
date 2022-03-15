import React from 'react';
import Header from '../components/Header';
import { useParams } from 'react-router-dom';
import allCategories from '../data/allCategories';



export default function ProductDetails (props){
    const { productId } = useParams();
    const selectedProduct = allCategories.find((product) => product.id === productId);
    const [selectedPicture, setSelectedPicture] = React.useState();




    const {
        category,
        id,
        gallery,
        name,
        description,
        about,
        price
    } = selectedProduct;
    
    React.useEffect(() => {
        setSelectedPicture(gallery[0]);
      },[]);
    
    return <div>
        <main className="main-container-product">
            <div className="sidebar sidebar-gallery">
                <div className="left-gallery">
                    <ul>
                        {
                            gallery.map((picture)=>(<li className="left-picture">
                                <img src={picture} alt='product' onClick={()=>setSelectedPicture(picture)}/>
                            </li>))
                        }
                    </ul>
                </div>
                <div className="selected-picture">
                    <img src={selectedPicture} alt="" />
                </div>
            
            </div>
            <div className="">
                <h4>{name}</h4>
                Price: {price}

                About this item <br />
                <ul className='about-list'>
                    {
                        about.map((item)=>(<li className="left-picture">
                            {item}
                        </li>))
                    }
                </ul>
                <button onClick={()=>props.addItem(selectedProduct)}>
                    Add to cart 
                </button>

            </div>
        </main>    </div>
}