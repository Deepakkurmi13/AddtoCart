import React ,{useState , useEffect} from 'react';
import ContextCart from './ContextCart';
import { useSelector , useDispatch } from 'react-redux';

const Cart = () => {

    const products = useSelector((store) => store.AddToCart);

     const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type:"ALL_ITEMS" });
    }, [products.items]);

    return (
        <>
            <ContextCart Data={products.items} totalItems={products.totalItems} totalAmount={products.totalAmount} />
        </>
    )
}

export default Cart;
