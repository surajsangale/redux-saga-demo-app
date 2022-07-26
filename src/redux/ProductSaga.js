import { takeEvery } from 'redux-saga/effects'
import { PRODUCT_LIST, SET_PRODUCT_LIST } from './constant';
import { put } from 'redux-saga/effects';


function* getProducts() {
    // let data = yield fetch('https://jsonplaceholder.typicode.com/users')  //contact API call here
    let apiData = yield fetch(`https://api.openweathermap.org/data/2.5/weather?q=mumbai&units=metric&appid=${process.env.REACT_APP_API_KEY}`)  //weather API call here
    apiData = yield apiData.json()
    // console.log("ProductList Action sucsessfully called : ",data)
    console.warn(apiData)
    yield put ({ type: SET_PRODUCT_LIST, apiData })
}
// function* testProducts() {
//     console.log('Call API Here')
// }

function* productSaga() {
    yield takeEvery(PRODUCT_LIST, getProducts)
    // takeEvery takes wants two messages(call when which type is called, which function to perform)
    // yield takeEvery(ADD_TO_CART, testProducts)

}

// function* setProductList(){

// }

export default productSaga;