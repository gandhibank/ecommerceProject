import {Link} from 'react-router'
const CarouselContent = function({content}){
    return <>
    <h1 className="pt-1">{content.heading}</h1>
    <p className="p-b">{content.para}</p>
    <Link to={'/shop'} className="btn btnPrimary">Shop</Link>
    </>
}

export default CarouselContent;