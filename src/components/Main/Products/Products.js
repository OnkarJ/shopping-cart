import React, { useState, useEffect, useReducer } from 'react';
import { reducer } from '../../../reducers/reducer';
import ProductItem from './ProductItem';
import data from '../../../data/data';
import Cart from '../Cart/Cart';
import CartModal from '../../Cart/CartModal/CartModal';

const Products = (props) => {

    const selectedProduct = data[props.match.params.productParamId];
    const initialState = {
        products: selectedProduct,
        isCartModalOpen: false,
        cartItems: []
    };

    const [products, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        dispatch({ type: 'productRoute', value: selectedProduct });
    }, [selectedProduct]);

    return (
        <main className=''>

            <Cart 
                cartItems={products.cartItems}
                onCartIconClick={() => dispatch({ type: 'cartModal', value: true })} 
            />

            <ProductItem
                products={products.products}
                onAddButtonClick={(item) => dispatch({ type: 'addToCart', value: item })}
            />

            {
                products.isCartModalOpen
                    ? <CartModal
                        role='dialog'
                        cartItems={products.cartItems}
                        onCartCloseClick={() => dispatch({ type: 'cartModal', value: false })}
                    />
                    : null
            }
        </main>
    );
}

export default Products;