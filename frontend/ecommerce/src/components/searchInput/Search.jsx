import { useState } from 'react';
import './search.css'
import { useNavigate } from 'react-router';

const Search = function(){
    const [keyword, setKeyword] = useState('');
    const navi = useNavigate();
    const searchHandler = function(e){
        e.preventDefault();
        navi('/search?keyword='+keyword);
    }
    return <>
    <div className='searchContainer p-1 t-center'>
        <form action="#" onSubmit={searchHandler}  id='searchProductForm' className='p-1 rounded-1'>
            <input type="text" className='border-none' onBlur={searchHandler} value={keyword} onInput={(e)=> setKeyword(e.target.value)} placeholder='Enter Toy Name' id="searchInput"/>
            <div>
                <button type='submit' id='searchBtn' className='btn btn-primary'><i className='fa-solid fa-search'></i></button>
            </div>
        </form>
    </div>
    </>
}

export default Search;