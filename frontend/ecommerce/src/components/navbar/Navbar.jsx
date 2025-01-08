import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router';
import NavbarMenu from './NavbarMenu.jsx';
import ResponsiveBar from './ResponsiveBar.jsx';
import './Navbar.css';

function Navbar(){
    const [showMenu, setShowMenu] = useState(false);
    const [isMobile, setIsMobile] = useState(window.matchMedia('(max-width: 800px)').matches);
    const navigation = useNavigate();
    
    useEffect(()=>{
        window.matchMedia('(max-width:800px)').addEventListener('change', (ev)=> {
            setIsMobile(ev.matches);
            setShowMenu(!ev.matches);
        });
    }, []);

    return (
        <div className='navbar'>
            <div className='navbarLogo'><p className='logoName cursor-point' onClick={(e)=>navigation('/')}>Toy Store</p></div>
            <NavbarMenu visible={showMenu ? 'yes' : 'no'} isMobile={isMobile ? 1 : 0} setShowMenu={setShowMenu}/>
            <ResponsiveBar setShowMenu={setShowMenu} showMenu={showMenu ? 1 : 0}/>
        </div>
    );
}

export default Navbar;