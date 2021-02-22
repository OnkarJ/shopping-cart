import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import HeaderItem from './HeaderItem';

afterEach(cleanup);

describe('<HeaderItem />', () => {
    it('renders without crashing', () => {
        render(<HeaderItem />)
    });

    it('renders nothing when categories props length is not satisfied', () => {
        const { queryByTestId } = render(<HeaderItem categories={[]} />);
        expect(queryByTestId('data-list')).toBe(null);
    });

    it('renders the <li /> item correctly', () => {
        const { queryByTestId } = render(<HeaderItem categories={[{a: '1'}]} onItemClick={jest.fn()} />);
        expect(queryByTestId('data-list-li')).toBeInTheDocument();
    });

    it('calls the respective function when clicked', () => {
        const click = jest.fn();
        const { queryByTestId } = render(<HeaderItem categories={[{a: '1'}]} onItemClick={click} />);
        const anchorTag = queryByTestId('data-list-a');
        fireEvent.click(anchorTag);
        expect(click).toBeCalled();
    });
});