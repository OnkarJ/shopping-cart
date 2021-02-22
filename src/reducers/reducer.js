import { formatNumber } from '../helpers/FormatData';

const removeByAttr = function (arr, attr, value) {
    var i = arr.length;
    while (i--) {
        if (arr[i]
            && arr[i].hasOwnProperty(attr)
            && (arguments.length > 2 && arr[i][attr] === value)) {
            arr.splice(i, 1);
        }
    }
    return arr;
}

const calculateCartDetails = (state, action) => {
    const oldCartItems = state.cartItems;
    const newClickedItem = action.value;

    if (oldCartItems.length === 0) {
        const newItem = {
            ...newClickedItem,
            qty: newClickedItem.qty + 1,
            total: formatNumber((newClickedItem.qty + 1) * formatNumber(newClickedItem.price))
        };
        const newCartItems = [...oldCartItems, newItem];
        alert('Product added to cart !!!😊')
        return {
            ...state,
            cartItems: newCartItems
        }
    } else {
        const itemAlreadyExists = oldCartItems.some(el => el.id === newClickedItem.id);

        if (!itemAlreadyExists) {
            const newItem = {
                ...newClickedItem,
                qty: newClickedItem.qty + 1,
                total: formatNumber((newClickedItem.qty + 1) * formatNumber(newClickedItem.price))
            };
            const newCartItems = [...oldCartItems, newItem];
            alert('Product added to cart !!!😊')
            return {
                ...state,
                cartItems: newCartItems
            }
        } else {
            const thatObjectinArray = oldCartItems.filter((el) => el.id === newClickedItem.id);

            const newListWithDeletedPrevSameItem = removeByAttr(oldCartItems, 'id', newClickedItem.id);
            const updatedQty = {
                ...thatObjectinArray[0],
                qty: thatObjectinArray[0].qty + 1,
                total: formatNumber((thatObjectinArray[0].qty + 1) * formatNumber(thatObjectinArray[0].price))
            }

            const newCartItems = [...newListWithDeletedPrevSameItem, updatedQty];
            alert('Product added to cart !!!😊')
            return {
                ...state,
                cartItems: newCartItems
            }
        }
    }
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'cartModal':
            return {
                ...state,
                isCartModalOpen: action.value
            };
        case 'productRoute':
            return {
                ...state,
                products: action.value
            };
        case 'addToCart':
            return calculateCartDetails(state, action);
        default:
            return state;
    }
};

export { reducer };