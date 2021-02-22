import React from 'react';
import { FormatNumberAndCurrency } from '../../../helpers/FormatData';
import { dataOperations } from '../../../helpers/dataOperation';
import './ModalDetails.css';

const ModalDetails = ({ cartItems = [] }) => {

    const result = dataOperations(cartItems);
    return (
        <div>
            {cartItems.map((item, key) => {
                return <div key={key} className='modal-details'>
                    <div className='modal-details-left'>{item.name}: </div>
                    <div className='modal-details-right'>{item.price} X {item.qty}</div>
                </div>;
            })}
            {typeof result === 'object' 
                ? <span>
                    <div className='modal-details'>Total Tax Rate: {result.totalTaxAmount} %</div>
                    <div className='modal-details-info-bottom'>Total:  {<FormatNumberAndCurrency value={result.cartPrice} currency='INR' />}</div>
                </span> 
            : null}
            {typeof result === 'number'
                ? <div className='modal-details-info-bottom'>Total:  {<FormatNumberAndCurrency value={result} currency='INR' />}</div>
            : null}
        </div>
    );
}

export default ModalDetails;