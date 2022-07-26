import React from 'react';
// import '../App.css';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux/es/exports';


function Header() {
    const result = useSelector(state => state.cartData)
    console.log('redux data in header', result)
    
    // const dispatch = useDispatch()
    return (
        <div className="app">
            <div className='header'>
                <div className="icon">
                    <span>{result.length}</span>
                    <img src="https://cdn-icons.flaticon.com/png/512/2252/premium/2252291.png?token=exp=1658229621~hmac=094d5fdbd219b9d09373d12ceb28b1d6" alt="" />
                </div>
            </div>
            {/* <div>
                <button onClick={() => dispatch(console.clear())}>Clear Console</button>

            </div> */}

        </div>


    )
}

export default Header;