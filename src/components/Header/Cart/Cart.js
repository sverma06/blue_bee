import React, { useState, useEffect } from 'react';

const url="/cart";

const Cart = () => {

const [cartList, setCartList] = useState([]);

const fetchCartList = async () => {
try{
    const response = await fetch(url);
    const json = await response.json();
    console.log(json);
    setCartList(json);
}
catch (error) {
    console.log("error", error);
}
}

useEffect(() => {
    fetchCartList()
}, []);

const body = cartList.map((item) => {
    return (
        <ul>
            {item.name}
        </ul>
    )
})
    return body;
};

export default Cart;
