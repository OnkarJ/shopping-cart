import { formatNumber } from "../helpers/FormatData";
import data from '../data/data';

function calculateCommonProductsWithSameOffer(items, offer) {
    return items.filter((item) => item.offer === offer);
}

function calculateTotalTaxAmount(items, taxRate = 1) {
    let sumOfAllTaxAmt = 0.00, perElementRate = 0.00, result = 0.00;
    for (let index = 0; index < items.length; index++) {
        const element = items[index];
        // for-loop for qty
        for (let i = 0; i < element.qty; i++) {
            perElementRate = (element.price * taxRate) / 100;
            sumOfAllTaxAmt = sumOfAllTaxAmt + perElementRate;
        }
    }
    result = formatNumber((sumOfAllTaxAmt));
    return result;
}

function calculateTotalOfQty(items) {
    return formatNumber(items.reduce(function(total, itr) {
        return Number(total) + Number(itr.total);
    }, 0))
}

function calcutateCartPrice(totalOfQty, totalTax) {
    let calc, result;
        calc = Number(totalOfQty) + Number(totalTax);
        result = formatNumber(calc);
    return result;
}

function calculateSpecialPrice(unitPrice, qty, totalTaxAmount) {
    return ((unitPrice * qty) / 2) + totalTaxAmount;
}

function calculations(offer, productsWithSameOffer) {
    if(offer === data.offers.noOffer) {
        const totalTaxAmount = calculateTotalTaxAmount(productsWithSameOffer, data.taxRate.noOffer);
        const totalOfQty = calculateTotalOfQty(productsWithSameOffer);
        const cartPrice = calcutateCartPrice(totalOfQty, totalTaxAmount);

        return {
            totalTaxAmount: totalTaxAmount,
            totalOfQty: totalOfQty,
            cartPrice: cartPrice
        };
    }

    if(offer === data.offers.b2g1) {
        const unitPrice = productsWithSameOffer.find(obj => obj.price)  // done {...}
        const totalTaxAmount = calculateTotalTaxAmount(productsWithSameOffer, data.taxRate.b2g1);    // done
        const totalOfQty = calculateTotalOfQty(productsWithSameOffer);
        const cartPrice = calcutateCartPrice(totalOfQty, totalTaxAmount);

        return {
            totalTaxAmount: totalTaxAmount,
            totalOfQty: totalOfQty,
            cartPrice: cartPrice - unitPrice.price
        };
    }

    if(offer === data.offers.b1g50) {
        const totalTaxAmount = calculateTotalTaxAmount(productsWithSameOffer, data.taxRate.b1g50);    //done
        const totalOfQty = calculateTotalOfQty(productsWithSameOffer);  //done
        const specialPrice = calculateSpecialPrice(39.99, 2+1, totalTaxAmount);
        const cartPrice = calcutateCartPrice(specialPrice, totalTaxAmount);
        
        // return {
        //     totalTaxAmount: totalTaxAmount,
        //     totalOfQty: totalOfQty,
        //     cartPrice: cartPrice - formatNumber(39.99/2)
        // };
    }
}

function calculatevaluesWithAllTypeOfOffers(type = false, diffResult1 = {}, diffResult2 = {}) {
    let result = {};

    if(type) {
        result.totalTaxAmount = diffResult1.totalTaxAmount;
        result.totalOfQty = diffResult1.totalOfQty;
        result.cartPrice = diffResult1.cartPrice;

        return result;
    } else {
        result.totalTaxAmount = diffResult1.totalTaxAmount + diffResult2.totalTaxAmount;
        result.totalOfQty = diffResult1.totalOfQty + diffResult2.totalOfQty;
        result.cartPrice = diffResult1.cartPrice + diffResult2.cartPrice;

        return result;
    }
}

function dataOperations(items) {

    const typesFromSelectedItems = [...new Set(items.map(item => item.type))];
    const offersFromSelectedItems = [...new Set(items.map(item => item.offer))];
    let onlyNoOffer = false, noOffersResult = {}, offersResult = {};

    if((typesFromSelectedItems.length > 1) || !offersFromSelectedItems.includes(data.offers.noOffer)) {

        if(offersFromSelectedItems.includes(data.offers.b2g1)) { // for b2g1 offer in the cart

            onlyNoOffer = false;            
            noOffersResult = calculations(data.offers.noOffer, calculateCommonProductsWithSameOffer(items, data.offers.noOffer));
            offersResult = calculations(data.offers.b2g1, calculateCommonProductsWithSameOffer(items, data.offers.b2g1));
            
            return calculatevaluesWithAllTypeOfOffers(onlyNoOffer, noOffersResult, offersResult);

        } else if(offersFromSelectedItems.includes(data.offers.b1g50)) {    // for b1g50 offer in the cart

            onlyNoOffer = false;
            noOffersResult = calculations(data.offers.noOffer, calculateCommonProductsWithSameOffer(items, data.offers.noOffer));
            offersResult = calculations(data.offers.b1g50, calculateCommonProductsWithSameOffer(items, data.offers.b1g50));
            
            return calculatevaluesWithAllTypeOfOffers(onlyNoOffer, noOffersResult, offersResult);

        } else {    // for no-offer only

            onlyNoOffer = true;
            noOffersResult = calculations(data.offers.noOffer, calculateCommonProductsWithSameOffer(items, data.offers.noOffer));
            
            return calculatevaluesWithAllTypeOfOffers(onlyNoOffer, noOffersResult);
        }
    } else if((typesFromSelectedItems.length === 1) && offersFromSelectedItems[0] === data.offers.noOffer) {    // for only single type of products, here no complex calculations
        return calculateTotalOfQty(items);
    }
}

export { dataOperations, calcutateCartPrice, calculateTotalOfQty };