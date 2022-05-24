import '../styles/Navbar.css'
import React,{Fragment} from 'react';
import logo from '../images/logo.png'


const Navbar = () => {
    return ( 
        <>
        <nav className="navBar">
            <section>
            <img src={logo} alt="logo" />
            <span>Soundwaves</span>
            </section>
            <ul>
                <li>Discover</li>
                <li>Join</li>
            </ul>
        </nav>


        </>
     );
}
 
export default Navbar;