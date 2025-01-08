import { useState } from "react";

const ResponsiveBar =({setShowMenu})=>{

    function handelShowMenu(){
        setShowMenu((p) => {
            return !p;
        });
    }

    return (
        <div className='responsive'>
            <button type='button' className='btn responsiveBar' onClick={handelShowMenu}>
                <i className='fa fa-bars'></i>
            </button>
        </div>
    )
}

export default ResponsiveBar;