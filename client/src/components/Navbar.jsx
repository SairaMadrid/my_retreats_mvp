import React, { useState } from 'react';
import { Link } from 'react-router-dom';


 function Navbar() {
    const [click, setClick] = useState(false);
  
    const handleClick = () => setClick(!click);
  
const closeMobileMenu = () => setClick(false);
    return (
        <>
    <nav className="navbar">
        <div className="navbar-container">
<Link to="/" className="navbar-logo">
    Lotus
</Link>
<div className='menu-icon' onClick={handleClick}>
    <i className={ click ? 'fas fa-times' : 'fas fa-bars'} /> 
</div>
<ul className={click ? 'nav-menu active' : 'nav-menu'}>
<li className='nav-item'>
    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Home
</Link>
</li>
    <li className='nav-item'>
    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Favourites
</Link>
</li>
<li className='nav-item'>
    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
        Currency
</Link>
</li>
<li className='nav-item'>
    <Link to='/sign-up-newsletter' className='nav-links-mobile' onClick={closeMobileMenu}>
        Newsletter
</Link>
</li>
</ul>
</div>
    </nav> 
    </>   
  )
}

export default Navbar;
