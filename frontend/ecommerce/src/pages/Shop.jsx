import { useEffect, useState } from 'react'
import ProductCard from '../components/card/ProductCard.jsx';
import Search from '../components/searchInput/Search'
import { useSearchParams } from 'react-router';
import NoDataFound from '../components/noData/NoData.jsx';

const Shop = function(){
    const [products, setProducts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    useEffect(()=>{
    fetch(import.meta.env.VITE_API_URL+'/products?'+searchParams)
    .then(res => res.json())
    .then(res => setProducts(res.products))
    .catch(error => console.error('Error fetching products:', error));
  }, [searchParams]);

    return (
        <>
        <Search />
        <div className='row p-1 justifyCenter'>
            {
            (products.length) > 0 ? (products.map((product)=>{
            return <ProductCard  key={product._id} product={product}/>;
            }) ) : (<NoDataFound msg='No Data Found'/>)
            }

        </div>
        </>
    )
}
export default Shop;