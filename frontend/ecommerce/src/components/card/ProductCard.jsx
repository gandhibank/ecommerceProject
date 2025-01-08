import './productCard.css'
import {Link} from 'react-router-dom'

const ProductCard = function({product}){
    return (
        <div className="cardContainer p-1">
            <div className='card border'>
                <div className="cardImg rounded-2">
                    <img src={product.images[0].image} alt={product.name} width={'400px'} height={'400px'}/>
                </div>
                <div className="cardBody pt-1">
                    <p className='cardDescription'><Link to={'/product/'+product._id} className='removeLink'>{product.name}</Link></p>
                    <div className='cardProductDetails'>
                        <div className='cardPrice'>₹ {product.price}</div>
                        <div className='ratings'>
                            <div className="rating-outer">
                                <div className="rating-inner" style={{width: `${(product.ratings/5) * 100}%`}}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cardFooter">
                    <Link to={'/product/'+product._id} className='cardBtn rounded-1'>View Product</Link>
                </div>
                <div className='cardStock t-center p-1' style={{color: (product.stock == 0) ? 'var(--colora)' :'var(--colora2)'}}>{product.stock == 0 ? 'Out Of Stock' : 'In Stock'}</div>
            </div>
        </div>
    );
}

export default ProductCard;