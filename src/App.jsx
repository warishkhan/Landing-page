import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  { useState, useEffect } from 'react';
import Home from './pages/home/Home';
import About from './pages/about/AboutUs';
import Brand from './pages/brand/Brand';
import Navbar from './components/navbar/Navbar';
import MobileNav from './components/mobilenav/MobileNav';

const App = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <Router>
            {isMobile ? <MobileNav /> : <Navbar />}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/brand" element={<Brand />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
