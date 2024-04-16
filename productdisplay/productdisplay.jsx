import React, { useContext } from 'react';
import './productdisplay.css';
import start_icon from '../assets/star_icon.png';
import star_dull_icon from '../assets/star_dull_icon.png';
import { shopcontext } from '../../context/shopcontext';

const Productdisplay = (props) => {
    const { product } = props;
    const {addtocart}=useContext(shopcontext);

    if (!product) {
        return <div>No product found.</div>; // Or handle this case accordingly
    }

    return (
        <div className='productdisplay'>
            <div className='productdisplay-left'>
                <div className='productdisplay-img-list'>
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                </div>
                <div className='productdisplay-img'>
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className='productdisplay-right'>
                <h1>{product.name}</h1>
                <div className='productdisplay-right-star'>
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={start_icon} alt="" />
                    <img src={star_dull_icon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='productdisplay-right-prices'>
                    <div className='productdisplay-right-price-old'>${product.old_price}</div>
                    <div className='productdisplay-right-price-new'>${product.new_price}</div>
                </div>
                <div className='productdisplay-right-description'>
                A fashion brand combines symbolism, style, and experiential elements, and it needs to differentiate its products and coordinate its supply chain to succeed in the market. Consumers commonly employ brands as a means of expressing either their genuine identity or an idealized self-image that they aspire to achieve.
                </div>
                <div className='productdisplay-right-size'>
                    <h1>Select Size</h1>
                    <div className='productdisplay-right-sizes'>
                        <div>S</div>
                        <div>M</div>
                        <div>L</div>
                        <div>XL</div>
                        <div>XXL</div>
                    </div>
                </div>
                <button onClick={()=>{addtocart(product.id)}}>ADD TO CART</button>
                <p className='productdisplay-right-category'><span>Category :</span>Women, T-Shirt, Crop Top</p>
                <p className='productdisplay-right-category'><span>Tags :</span>Modern, Latest</p>

            </div>
        </div>
    );
}

export default Productdisplay;
