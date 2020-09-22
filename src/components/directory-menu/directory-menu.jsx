import React, {useState} from 'react';
import MenuItem from '../menu-item/menu-item';

import './directory-menu.scss';

const DirectoryMenu = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            image: 'https://picsum.photos/id/300/500',
            title: 'Hats',
            url: ''
        },
        {
            id: 2,
            image: 'https://picsum.photos/id/400/500',
            title: 'Jackets',
            url: ''
        },
        {
            id: 3,
            image: 'https://picsum.photos/id/500/500',
            title: 'Sneakers',
            url: ''
        },
        {
            id: 4,
            image: 'https://picsum.photos/id/100/500',
            title: 'Mens',
            large: true,
            url: 'hats'
        },
        {
            id: 5,
            image: 'https://picsum.photos/id/200/500',
            title: 'Womens',
            large: true,
            url: ''
        },
    ])

    return (
        <div className='directory-menu'>
            {
                items.map(item => <MenuItem key={item.id} {...item} />)
            }
        </div>
    );
}

export default DirectoryMenu;
