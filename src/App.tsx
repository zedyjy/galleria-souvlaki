// App.tsx
import React, { useState } from 'react';
import './App.css';
import './global.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articles from './pages/Articles/Articles';
import Home from './pages/Home/Home';
import Navbar from './ui/Navbar/Navbar';
import Footer from './ui/Footer/Footer';
import Exhibitions from './pages/Exhibitions/Exhibitions';


function App() {
    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <Router>
            {/* Navbar */}
            <Navbar />

            {/* Wrapper for content */}
            <div className="wrapper">
                {/* Routes */}
                <Routes>
                    <Route path="/galleria-souvlaki" element={<Home />} />
                    <Route path="/" element={<Home />} />
                    <Route path="/articles" element={<Articles />} />
                    <Route path="/exhibitions" element={<Exhibitions />} />
                </Routes>
            </div>

            {/* Footer */}
            <Footer />
        </Router>
    );
}

export default App;
