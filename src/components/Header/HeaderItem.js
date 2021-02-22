import React from 'react';

const HeaderItem = ({ categories, onItemClick }) => {
    return (
        <React.Fragment key='header-item'>
            {
                categories && categories.length > 0
                    ? categories.map((item) => {
                        return <li data-testid='data-list-li' className='header-categories-item-li' key={item.id}>
                            <a
                                tabIndex='0'
                                className='header-categories-item'
                                onClick={() => onItemClick(item)}
                                aria-label='category items'
                                onKeyPress={(e) => e.key === 'Enter' ? onItemClick(item) : null}
                                data-testid='data-list-a'
                            >
                                {item.name}
                            </a>
                        </li>
                    })
                    : null
            }
        </React.Fragment>
    );
}

export default HeaderItem;