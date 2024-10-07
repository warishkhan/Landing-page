import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './Navbar.css'; // Ensure your CSS file is included

const Navbar = () => {
    const [visible, setVisible] = useState(true);
    const [activeLink, setActiveLink] = useState('/');
    const location = useLocation();

    let lastScrollY = 0;

    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > lastScrollY) {
            // Scrolling down
            setVisible(false);
        } else {
            // Scrolling up
            setVisible(true);
        }
        lastScrollY = currentScrollY;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        setActiveLink(location.pathname); // Update active link based on route
    }, [location]);

    return (
        <nav className={`navbar ${visible ? 'visible' : 'hidden'}`}>
            <div className='navbar-flex-container'>
                <div>
                   <Link className='navbar1_logo-link w-nav-brand w--current'>
                   <img src='https://cdn.prod.website-files.com/666285153da630124c201ec0/6668c55d3098c52eb3a33ef6_3rd%20(1).svg' loading='lazy' alt='logo' className='navbar1_logo'/>
                   </Link>
                </div>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className={`navbar1_link ${activeLink === '/' ? 'active' : ''}`}
                            onClick={() => setActiveLink('/')}
                        >
                            Creator
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/brand"
                            className={`navbar1_link ${activeLink === '/brand' ? 'active' : ''}`}
                            onClick={() => setActiveLink('/brand')}
                        >
                            Brand
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/about"
                            className={`navbar1_link ${activeLink === '/about' ? 'active' : ''}`}
                            onClick={() => setActiveLink('/about')}
                        >
                            About Us
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="#"
                            className={`navbar2_link`}
                            onClick={() => setActiveLink('#')}
                        >
                            Get Started
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
