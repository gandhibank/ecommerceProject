import './leftRight.css'
import {Link} from 'react-router'

const LeftRight = function({content}){
    return <>
    <div className="leftAndRight p-1 mi-auto">
        <div className='leftImage'>
            <img src={content.imgURl} width="500px" height='auto' className='img-fluid upcome_border1' alt={content.header} />
        </div>
        <div className='rightContent p-1'>
            <h2 className='h2 pt-1'>{content.header}</h2>
            <p className='pt-1'>{content.para}</p>
            <Link tp={'/shop'} className="mt-2 leftRightBtn p-1 rounded-1">{content.btn}</Link>
        </div>
    </div>
    </>
}

export default LeftRight;