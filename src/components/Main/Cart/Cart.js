import React from 'react';
import CartIcon from '../../../themes/icons/CartIcon';
import './Cart.css';

const Cart = ({ cartItems = [], onCartIconClick }) => {
    return (
        <div className='cart' onClick={onCartIconClick}>
            <CartIcon /> 
            {
                cartItems.length > 0
                    ? <span data-testid='cart-count' className='cart-count'>{cartItems.length}</span>
                    : null
            }
        </div>
    );
}

export default Cart;