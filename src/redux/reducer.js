import { ADD_TO_CART, EMPTY_CART } from "./constant"
import { REMOVE_FROM_CART } from "./constant";

export const cartData = (product = [], action) => {
    // console.log('Reduser called sucsessfully', action)
    // return 'abc'
    // if (action.type ==='Add_To_CART'){
    //     console.log("Add_To_CART sucsessfully called ", action);
    //     return action.product
    // }
    // else{
    //     return "No Action Matched "
    // }
    switch (action.type) {
        case ADD_TO_CART:
            // add cart logic 
            console.log('ADD_TO_CART Condition', action)
            //  console.warn(product.length)
            return [action.product, ...product];

        case REMOVE_FROM_CART:
            // add cart logic 
            console.log('REMOVE_TO_CART condition', action)
            // console.warn(product.length)
            product.length = product.length ? product.length - 1 : [];
            return [...product];

        case EMPTY_CART:
            console.log('EMPTY_CART Action Called sucsessfully')
            product = []
            return [...product];

        default:
            // no case matches  
            return product;





    }


}