const categories = [
    {
        id: 1,
        name: 'Soaps',
        link: '/product/soaps'
    },
    {
        id: 2,
        name: 'Deodrants',
        link: '/product/deodrants'
    },
    {
        id: 3,
        name: 'Mobiles',
        link: '/product/mobiles'
    }
];

const offers = {
    noOffer: 'no offer',
    b2g1: 'buy 2 get 1 offer',
    b1g50: 'buy 1, get 50% discount on next one'
};

const productSoaps = {
    'cinthol': {
        id: 1,
        name: 'Cinthol',
        units: 20,
        price: 40.01,
        currency: 'INR',
        image: 'cinthol',
        alternateText: 'Cinthol Soap Image',
        qty: 0,
        offer: offers.noOffer,
        type: 'soap'
    },
    'dove': {
        id: 2,
        name: 'Dove',
        units: 20,
        price: 39.99,
        currency: 'INR',
        image: 'dove',
        alternateText: 'Dove Soap Image',
        qty: 0,
        offer: offers.noOffer,
        type: 'soap'
    },
    'santoor': {
        id: 3,
        name: 'Santoor',
        units: 0,
        price: 31.11,
        currency: 'INR',
        image: 'santoor',
        alternateText: 'Santoor Soap Image',
        qty: 0,
        offer: offers.noOffer,
        type: 'soap'
    },
}

const productDeodrants = {
    'axe': {
        id: 4,
        name: 'Axe',
        units: 20,
        price: 99.99,
        currency: 'INR',
        image: 'axe',
        alternateText: 'Axe Deaodrant Image',
        qty: 0,
        offer: offers.noOffer,
        type: 'deodrant'
    },
    'wildStone': {
        id: 5,
        name: 'Wild Stone',
        units: 20,
        price: 89.99,
        currency: 'INR',
        image: 'wildstone',
        alternateText: 'Wild Stone Deaodrant Image',
        qty: 0,
        offer: offers.noOffer,
        type: 'deodrant'
    },
    'nivea': {
        id: 6,
        name: 'Nivia',
        units: 20,
        price: 91.00,
        currency: 'INR',
        image: 'nivea',
        alternateText: 'Nivea Deaodrant Image',
        qty: 0,
        offer: offers.noOffer,
        type: 'deodrant'
    },
}

const productMobiles = {};

// const taxRate = {
//     noOffer: 12.50,
//     b2g1: 8.33,
//     b1g50: 9.40
// };

const taxRate = {
    noOffer: 12.50,
    b2g1: 8.33,
    b1g50: 9.40
};

export default {
    categories: categories,
    soaps: productSoaps,
    deodrants: productDeodrants,
    mobiles: productMobiles,
    taxRate: taxRate,
    offers: offers
};
