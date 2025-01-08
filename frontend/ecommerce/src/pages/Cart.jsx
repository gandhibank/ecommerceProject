import { Fragment, useState, useEffect, useMemo } from "react";
import {Link} from 'react-router'
import NoDataFound from "../components/noData/NoData";
import {toast} from 'react-toastify';

const Cart = function({cartItems, setCartItems}){
    const [notes, setNotes] = useState(false);
    const [orderComplete, setOrderComplete] = useState(false);

    const totalAmount = useMemo(()=>{
        return cartItems.reduce((acc,item)=> acc + (item.product.price * item.quantity), 0)
    }, [cartItems]);

    useEffect(()=>{
        const note = document.getElementById('cartNotesbox');
        if(note === null){
            return;
        }
        if(notes){
            note.style.height = note.scrollHeight + 'px';
        }else{
            note.style.height = '0px';
        }
    }, [notes])

    function increaseCartQty(item){     
        if(item.product.stock == item.quantity){
            return;
        }
        else{
            const updatedItems = cartItems.map((i)=>{
                if(i.product._id === item.product._id){
                    i.quantity++;
                }
                return i;
            })
            setCartItems(updatedItems);
        }
    }
    function decreaseCartQty(item){
        if(item.quantity > 1){
            const updatedItems = cartItems.map((i)=>{
                if(i.product._id === item.product._id){
                    i.quantity--;
                }
                return i;
            })
            setCartItems(updatedItems);
        }
    }
    function removeCartItem(item){     
        const updatedItems = cartItems.filter((i) => i.product._id !== item.product._id);
        setCartItems(updatedItems)
    }
    function handelePlaceOrder(){
        fetch(import.meta.env.VITE_API_URL+'/order', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(cartItems)
        }).then(()=> {
            setCartItems([]);
            setOrderComplete(true);
            toast.success('order success ✌🏽');
        }).catch((error) => console.log('something went wrong ' + error.message));
    }

    return (
    (cartItems.length > 0 ? <Fragment>
        <div className="cartContainer p-2">
            <div className="row p-1">
                <div className="cartLeft col-2 p-1">
                    <div className="cartHeader p-1 row">
                        <span className="para">Cart({cartItems.length})</span>
                        <Link to={'/shop'} className="btn d-block removeLink continueShop">Continue Shopping</Link>
                    </div>
                    <hr />
                    {cartItems.map((item)=>
                        (<Fragment key={item.product._id}>
                        <div className="cartBody row mb-1 align-item">
                            <div className="cartImage col-25">
                                <img src={item.product.images[0].image} className="o-fit d-block image-fluid mi-auto" alt={item.product.name} width='100px' height='auto'/>
                            </div>
                            <div className="cartDescription row rowGap colgap justifyCenter align-item col-75">
                                <Link to={`/product/${item.product._id}`} className="t-center removeLink">{item.product.name}</Link>
                                <p className="t-center">INR {item.product.price}/toy</p>
                                <div className="cartController">
                                <button type="button" className="btn bg-danger" onClick={()=>decreaseCartQty(item) }>-</button>
                                <span className="productQuantity p-i">{item.quantity}</span>
                                <button type="button" className="btn bg-cool" onClick={()=>increaseCartQty(item)}>+</button>
                                </div>
                                <span type="button" className="cartDeleteBtn" onClick={()=>removeCartItem(item)}><i className="fa-solid fa-trash"></i></span>
                            </div>
                        </div>
                        <hr />
                    </Fragment>)
                    )}
                </div>
                <div className="cartRight col-2 p-1">
                <div className="cartFooter p-1">
                        <span className="para">Subtotal: INR {totalAmount}</span>
                        <hr />
                        <button type="button" className="btn" id="addNotes" onClick={()=>setNotes(!notes)}>Add order notes <i className={notes ? "fa-solid fa-caret-up" : "fa-solid fa-caret-down"}></i></button>
                        <div id="cartNotesbox">
                            <label className=" d-block p-b">Leave a note about your order</label>
                            <input type="text" id="notes" className="d-block p-1 w-100" placeholder="write something"/>
                        </div>
                        <hr />
                        <button type="button" className="btn btnSecondary w-100 checkoutBtn" onClick={handelePlaceOrder}>Place Order</button>
                        <p className="mb-1"><i>Shipping, taxes, and discount codes are calculated at checkout</i></p>
                </div>
                </div>
            </div>
        </div>
    </Fragment> : (!orderComplete ? <Fragment>
        <div className="cartContainer p-2 row justifyCenter">
        <NoDataFound msg='Your Cart is Empty!'/>
        </div>
    </Fragment> : <Fragment>
    <div className="cartContainer p-2 row justifyCenter">
        <h2>order Placed 😎</h2>
    </div>
    </Fragment>)
    
    )
    );
}

export default Cart;