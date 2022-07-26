import { PRODUCT_LIST } from "./constant"


export const ProductList =  ()=>{
    // let data = 'Hello world'
    
    // export const ProductList = async ()=>{
    // let data = await  fetch ('https://jsonplaceholder.typicode.com/users')  //API call here
    // data = await data.json()
    // console.log("ProductList Action sucsessfully called : ",data)
    return {
        // product,
        type :PRODUCT_LIST
        
    }
}

// export const setProductList = (product) =>{
//     console.log('setProductList Action called')
//     return {
//         product ,
//         type :SET_PRODUCT_LIST
//     }
// }
