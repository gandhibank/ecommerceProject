import './nodata.css'
const NoDataFound = function({msg}){
    return (
        <div className='noDataFound t-center'>
                    <img src='../../src/assets/images/nodata.png' className='noDataImage d-block' alt="No Data Found Image" height={'400px'} width={'400px'} />
                    <h4 className='noDataText'>{msg}</h4>
        </div>
    )
}

export default NoDataFound;