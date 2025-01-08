import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";

const ProductDetail = function({cartItems, setCartItems}){
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const {id} = useParams();
    useEffect(()=>{
        fetch(import.meta.env.VITE_API_URL + '/product/'+id)
        .then(res => res.json())
        .then(res => setProduct(res.product)).catch(error => console.error('Error fetching product:', error));
    }, []);

    function handleAddtoCart(){
        const existItem = cartItems.find((item) => item.product._id === product._id);
        if(!existItem){
            const newItem = {product, quantity};
            setCartItems((state)=> [...state, newItem]);
            toast.success('👍🏼 Cart Item Added Succesfully');
        }
    }
    function increaseQty(){
        if(product.stock == quantity || product.stock == 0){
            return;
        }else{
            setQuantity((state) => state + 1);
        }
    }
    function decreaseQty(){
        if(quantity > 1){
            setQuantity((state) => state - 1);
        }
    }
    return <>
       {product && (<div className="productContainer p-1">
        <div className="row">
            <div className="productCol productImage col-2">
                <img src={product.images[0].image} className="img-fluid rounded-2" alt={product.name} width='500px' height='500px'/>
            </div>
            <div className="productCol productDescription col-2 p-1">
                <h2 className="h2">{product.name}</h2>
                <p className="para">{product.description}</p>
                <div className='ratingAndPrice row'>
                        <div className='productPrice pt-1 pr-1'>Price: ₹ {product.price}</div>
                        <div className='ratings pt-1'>
                            Reviews:&nbsp;
                            <div className="rating-outer">
                                <div className="rating-inner" style={{width: `${(product.ratings / 5 )* 100}%`}}></div>
                            </div>
                        </div>
                </div>
                <div className="productCart row">
                    <div className="row colgap align-item pt-1 pr-1">
                    <button type="button" onClick={decreaseQty} className="btn bg-danger">-</button>
                    <span className="productQuantity p-i">{quantity}</span>
                    <button type="button" onClick={increaseQty} className="btn bg-cool">+</button>
                    </div>
                    <div className="addToCartBtn pt-1">
                    <button type="button" disabled={product.stock == 0} onClick={handleAddtoCart} className="btn">Add to Cart</button>
                    </div>
                </div>
                <hr />
                <div className="productStock row">
                    <p className="pt-1 pr-1">Status: <span className={product.stock > 0 ? 'text-cool' : 'text-danger'}>{product.stock > 0 ? 'In Stock' : 'Out Of Stock'}</span></p>
                    <p className="pt-1">Product Id: {product._id}</p>
                </div>
                <hr />
                <div className="productType">
                    <p>Baby Age: {product.category}</p>
                </div>
            </div>
        </div>
       </div>)}
    </>
}

export default ProductDetail;
