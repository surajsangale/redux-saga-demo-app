import React from 'react';
import '../App.css';

import { AddToCart, RemoveFromCart, EmptyCart } from '../redux/action';
import { useDispatch } from 'react-redux';
import { ProductList } from '../redux/ProductAction';
import { useSelector } from 'react-redux/es/exports';

function Main() {
    const data = useSelector((state) => state.productData)
    console.log('data in main.js ', data)
    const dispatch = useDispatch();
    const product = {
        name: 'Apsra',
        type: 'Pencile',
        colour: 'Silver x Black',
        price: 10

    }


    return (
        <>

            <div>
                <button onClick={() => dispatch(AddToCart(product))}> Add to Cart</button>
            </div>
            
            <div>
                <button onClick={() => dispatch(RemoveFromCart(product))}> Remove From Cart</button>
            </div>

            <div>
                <button onClick={() => dispatch(EmptyCart(product))} >Empty Cart</button>
            </div>

            <div>
                <button onClick={() => dispatch(ProductList())}>Get Product List</button>
            </div>
            <div className="productContainer">
                <p>Name:- {process.env.REACT_APP_NAME}</p>
                {/* { 
                data.map((item)=><div `key={data.id}`  className='proctItem'>
                    <div>Name:-{data.name}</div>
                </div>
                )} */}
            </div>

        </>


    )
}

export default Main;