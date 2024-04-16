import React, { useContext } from 'react';
import './cartitems.css';
import { shopcontext } from '../../context/shopcontext';
import remove_icon from '../assets/cart_cross_icon.png';

const Cartitems = () => {
    const { gettotalcartamount,all_product, cartitem, removefromcart } = useContext(shopcontext);

    //console.log('Cart Items:', cartitem);

    return (
        <div className='cartitems'>
            <div className='cartitems-format-main'>
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr/>
            {all_product.map((e) => {
                const quantity = cartitem && cartitem[e.id] ? cartitem[e.id] : 0;
                //console.log('Product ID:', e.id);
                //console.log('Quantity:', quantity);

                if (quantity > 0) {
                    return (
                        <div key={e.id}>
                            <div className='cartitems-format cartitems-format-main'>
                                <img src={e.image} alt='' className='carticon-product-icon' />
                                <p>{e.name}</p>
                                <p>${e.new_price}</p>
                                <button className='cartitems-quantity'>{quantity}</button>
                                <p>${e.new_price * quantity}</p>
                                <img className='cartitems-remove-icon' src={remove_icon} onClick={() => removefromcart(e.id)} alt='' />
                            </div>
                            <hr/>
                        </div>
                    );
                }
                return null;
            })}
            <div className='cartitems-down'>
                <div className='cartitems-total'>
                    <h1>Cart Totals</h1>
                    <div>
                        <div className='cartitems-total-item'>
                            <p>Subtotal</p>
                            <p>${gettotalcartamount()}</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <p>Shipping Fee</p>
                            <p>Free</p>
                        </div>
                        <hr/>
                        <div className='cartitems-total-item'>
                            <h3>Total</h3>
                            <h3>${gettotalcartamount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className='cartitems-promocode'>
                    <p>If you have a promo code, Enter it here</p>
                    <div className='cartitems-promobox'>
                        <input type="text" placeholder='Promo Code'></input>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cartitems;
