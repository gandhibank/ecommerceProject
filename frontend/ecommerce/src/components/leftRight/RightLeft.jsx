import './leftRight.css'
import {Link} from 'react-router'

const RightLeft = function({content}){
    return <>
    <div className="leftAndRight p-1 mi-auto">
        <div className='leftContent p-1'>
            <h2 className='h2 pt-1'>{content.header}</h2>
            <p className='pt-1'>{content.para}</p>
            <Link tp={'/shop'} className="mt-2 leftRightBtn p-1 rounded-1">{content.btn}</Link>
        </div>
        <div className='rightImage'>
            <img src={content.imgURl} width="500px" height='auto' className='img-fluid upcome_border2' alt={content.header} />
        </div>
    </div>
    </>
}

export default RightLeft;