import {useContext, useEffect, useMemo, useState} from 'react';
import './Navbar'
import { Link ,useNavigate} from 'react-router';
import { cartContext } from '../../App';

function NavbarMenu({visible, isMobile, setShowMenu}){

    const [isCaretup, setIsCartup] = useState(false);
    const cart = useContext(cartContext);
    const cartLength = useMemo(()=>{
        return cart.length;
    }, [cart]);
    const navigate = useNavigate();
    let show = useMemo(()=>{
        return (visible ==='yes') ? 'navbarMenuMobi show' : 'navbarMenuMobi'
    },[visible])

    function handelClosemenu(){
        setShowMenu((p)=> !p);
    }
    function handelcaret(){
        setIsCartup(!isCaretup);
    }

    useEffect(()=>{
        let helpDd = document.getElementById('helpDropdown');
        if(helpDd === null){
            return;
        }
        if(isCaretup){
            helpDd.style.height = helpDd.scrollHeight + 'px';
        }else{
            helpDd.style.height = '0px';
        }
    }, [isCaretup])

    return (
        <>
        {Boolean(isMobile) ?
         
        (<div className={show} id='mobileMenu'>
            <button type='button' className='btn responsiveBarMobi' onClick={handelClosemenu}>
                <i className='fa fa-xmark'></i>
            </button>
            <ul className='mobiMenu'>
                <li className='mobimenuItem'><a onClick={
                    ()=>{
                        navigate('/');
                        handelClosemenu();
                        }
                }>Home</a></li>
                <li className='mobimenuItem'><a onClick={()=>{
                    handelClosemenu();
                    navigate('/shop');
                    }}>Shop</a></li>
                <li className='mobimenuItem'><a href="#">Gifts</a></li>
                <li className='mobimenuItem'>
                    <a href="#" type='button' onClick={handelcaret}>Help &nbsp;
                        {isCaretup ? <i className="fa-solid fa-caret-up"></i>: <i className='fa fa-caret-down'></i>}
                    </a>
                    <div className={'mobimenuDropdown'} id="helpDropdown">
                        <p className='mobidropitem'><a href="#">Toy Care</a></p>
                        <p className='mobidropitem'><a href="#">Assembly guides</a></p>
                        <p className='mobidropitem'><a href="#">Shipping</a></p>
                        <p className='mobidropitem'><a href="#">Policies</a></p>
                        <p className='mobidropitem'><a href="#">Contact</a></p>
                    </div>
                </li>
                <li className='mobimenuItem'><a href="#">Blog</a></li>
                <li className='mobimenuItem'><Link to={'/upcoming'} id='mobiupcoming'>Upcoming</Link></li>
                <li className='mobimenuItem' id='social'>
                    <a href="#" title='Cart' onClick={
                    ()=>{
                        handelClosemenu();
                        navigate('/Cart');
                        }
                }><i className='fa fa-cart-shopping'></i> {cartLength}</a>&nbsp;
                    <a type='button' title='Account'><i className='fa fa-user'></i></a>&nbsp;
                    <a href="#" title='Search' onClick={
                    ()=>{
                        handelClosemenu();
                        navigate('/shop');
                        setTimeout(()=>document.getElementById('searchInput').focus(), 500);
                        }
                }><i className="fa-solid fa-magnifying-glass"></i></a>&nbsp;
                </li>
            </ul>
        </div>) 
        
        : 
        
        (<ul className='navbarMenu'>
                <li className='navbarMenuItem'><a onClick={
                    ()=>{
                        navigate('/');
                        }
                }>Home</a></li>
                <li className='navbarMenuItem'><a onClick={
                    ()=>{
                        navigate('/shop');
                        }
                }>Shop</a></li>
                <li className='navbarMenuItem'><a href="#">Gifts</a></li>
                <li className='navbarMenuItem' id='dropdownToggle'>
                    <a href="#" type='button'>Help <i className="fa-solid fa-caret-down"></i></a>
                    <div className='menuDropdown rounded-1'>
                        <p className='dropdownItem'><a href="#">Toy Care</a></p>
                        <p className='dropdownItem'><a href="#">Assembly guides</a></p>
                        <p className='dropdownItem'><a href="#">Shipping</a></p>
                        <p className='dropdownItem'><a href="#">Policies</a></p>
                        <p className='dropdownItem'><a href="#">Contact</a></p>
                    </div>
                </li>
                <li className='navbarMenuItem'><a href="#">Blog</a></li>
                <li className='navbarMenuItem'><Link to={'/upcoming'} className='upcoming'>Upcoming</Link></li>
                <li className='navbarMenuItem'>|</li>
                <li className='navbarMenuItem' title='cart'><Link to={'/cart'}><i className='fa fa-cart-shopping'></i> {cartLength}</Link></li>
                <li className='navbarMenuItem' title='Account'><Link to={'/account'}><i className='fa fa-user'></i></Link></li>
                <li className='navbarMenuItem' title='search'><a href="#" onClick={
                    ()=>{
                        navigate('/shop');
                        setTimeout(()=>document.getElementById('searchInput').focus(), 500);
                        }
                }><i className="fa-solid fa-magnifying-glass"></i></a></li>
        </ul>)
        }
        </>
    );
}

export default NavbarMenu;

