import React from 'react';
import { FormatNumberAndCurrency } from '../../../helpers/FormatData';
import './Product.css'

const ProductItem = ({ products = {}, onAddButtonClick }) => {

    if(Object.keys(products).length === 0) {
        return <h2>No Data Available 😢</h2>;
    }

    return (
        <div className='products'>
            {
                Object.entries(products).map((item, key) => {
                    const isAddButtonVisible = item[1].units === 0;
                    return (
                        <div className='product' key={key}>
                            <div className='product-info-center'>
                                <img src={`${process.env.PUBLIC_URL}/productImages/${item[1].image}.jpg`} alt={item[1].alternateText} />
                            </div>
                            
                            <div className='product-info-details'>
                                <span className='product-info-details-left'>
                                    {item[1].name}
                                </span>
                                <span className='product-info-details-right'>
                                    <FormatNumberAndCurrency value={item[1].price} currency={item[1].currency} />
                                </span>
                            </div>
                            
                            <div className='product-info-bottom'>
                                {item[1].units > 0 ? `Units: ${item[1].units}` : 'Out of stock 😢'}
                            </div>
                            
                            {
                                !isAddButtonVisible 
                                    ? <button className="product-info-action" disabled={isAddButtonVisible} onClick={() => onAddButtonClick(item[1])}>
                                        Add to Cart
                                    </button> 
                                    : null
                            }

                        </div>
                    )
                })
            }
        </div>
    );
}

export default ProductItem;