import { ADD_TO_CART, REMOVE_FROM_CART,EMPTY_CART } from "./constant"


export const AddToCart =(product)=>{
    console.log("Action sucsessfully called and the product details is as follows : ", product)
    return {
        product ,
        type :ADD_TO_CART // this type called and send to reducer.js  and perform the operation which is defined
        
    }
}

export const RemoveFromCart =(product)=>{
    console.log("Remove Action sucsessfully called and one item is removed from ",product)
    return {
        product ,
        type :REMOVE_FROM_CART   // this type called and send to reducer.js  and perform the operation which is defined
        
    }
}

export const EmptyCart =(product)=>{
    console.log(" Empty Action sucsessfully called ")
    return{
        product,
        type : EMPTY_CART   // this type called and send to reducer.js  and perform the operation which is defined
    }
}
