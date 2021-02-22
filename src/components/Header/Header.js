import React from 'react';
import { useHistory } from "react-router-dom";
import HeaderItem from './HeaderItem';
import './Header.css';

const Header = ({ brandName, categories }) => {

    const history = useHistory();

    const handleCategoryItemClick = (item) => {
        history.push(item.link);
    }

    return (
        <header className='header'>
            <a
                tabIndex='0'
                aria-label='Shopping Cart Logo'
                className="header-logo"
                onClick={() => handleCategoryItemClick(categories[0])}
                onKeyPress={(e) => e.key === 'Enter' ? handleCategoryItemClick(categories[0]) : null}
            >
                {brandName}
            </a>

            <ul className='header-categories'>
                <HeaderItem categories={categories} onItemClick={handleCategoryItemClick} />
            </ul>

        </header>
    );
}

export default (Header);