import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './Sidebar';
import './Navbar.css';
import './style.css';
import {IconContext} from 'react-icons';

function NavHome() {

    const[sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color:"#fff"}}>
            <div className = 'navbar'>
                <Link to='#' className='menu-button'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bar'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) =>{
                        return(
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                {item.icon}
                                <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    
    );
    
};
export default NavHome;