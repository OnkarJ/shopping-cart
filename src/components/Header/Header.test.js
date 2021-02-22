import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Header from './Header';

afterEach(cleanup);

describe('<Header />', () => {
    it('renders without crashing', () => {
        render(<Header />)
    });

    it('renders the brand name correctly', () => {
        const { getByText } = render(<Header brandName='My Cart' />);
        getByText(/My Cart/);
    });
});