import { SET_PRODUCT_LIST} from "./constant"

export const ProductData = (product = [], action) => {
    switch (action.type) {
        // case PRODUCT_LIST:
        //     // add cart logic 
        //     console.log('PRODUCT_LIST Condition', action)
        //     //  console.warn(action.length)

        //     return {product:[action.product]};

        case SET_PRODUCT_LIST:
            // add cart logic 
            console.log('SET_PRODUCT_LIST Condition', action)
            //  console.warn(product.length)
            
            return [action.product];
            // return{product: [...action.product]};



        default:
            // no case matches
            return product;
    }
}