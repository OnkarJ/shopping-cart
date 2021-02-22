import React from 'react';
import CloseIcon from '../../../themes/icons/CloseIcon';
import ModalDetails from '../ModalDetails/ModalDetails';
import './CartModal.css';

const CartModal = ({ cartItems = [], onCartCloseClick }) => {

    const modalHeading = cartItems.length > 0 
    ? 'Here is your load of happiness 😍' 
    : 'Add our exciting products to your cart 😊';

    return (
        <div>
            <div className="cart-popup">
                <div className="cart-popup-inner">
                    <span 
                        tabIndex='0' 
                        onClick={onCartCloseClick}
                        className='cart-popup-close'
                    >
                        <CloseIcon />
                    </span>
                    {<h1>{modalHeading}</h1>}
                    {cartItems.length > 0 ? <ModalDetails cartItems={cartItems} /> : null}
                </div>
            </div>
        </div>
    );
}

export default CartModal;