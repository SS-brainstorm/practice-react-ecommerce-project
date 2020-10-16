const INITIAL_STATE = {
    sections: [
        {
            id: 1,
            image: 'https://picsum.photos/id/300/500',
            title: 'Hats',
            url: 'shop/hats'
        },
        {
            id: 2,
            image: 'https://picsum.photos/id/400/500',
            title: 'Jackets',
            url: 'shop/jackets'
        },
        {
            id: 3,
            image: 'https://picsum.photos/id/500/500',
            title: 'Sneakers',
            url: 'shop/sneakers'
        },
        {
            id: 4,
            image: 'https://picsum.photos/id/100/500',
            title: 'Mens',
            large: true,
            url: 'shop/mens'
        },
        {
            id: 5,
            image: 'https://picsum.photos/id/200/500',
            title: 'Womens',
            large: true,
            url: 'shop/womens'
        },
    ]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        default:
            return state;
    }
}

export default directoryReducer;
