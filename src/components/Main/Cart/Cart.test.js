import { render, cleanup } from '@testing-library/react';
import React from 'react';
import CartIcon from '../../../themes/icons/CartIcon';
import Cart from './Cart';

afterEach(cleanup);

describe('<Cart />', () => {
    it('When length of cartItems is zero then render nothing', () => {
        const { queryByTestId } = render(<Cart cartItems={[]} onCartIconClick={jest.fn()} />);
            expect(queryByTestId('cart-count')).toBe(null);
    
    });
    
    it('When component mounts CartIcon should also be rendered', () => {
        const { queryByTestId } = render(<CartIcon />);
        expect(queryByTestId('cart-icon')).toBeInTheDocument();
    });
});