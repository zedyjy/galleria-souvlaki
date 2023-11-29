import React, { useState } from 'react';
import './App.css';
import './global.css';
import NewsTicker from './ui/NewsTicker/NewsTicker';
import Photoshoots from './ui/Photoshoots/Photoshoots'; // Adjust the path based on your actual structure
// Import other images similarly for ItalyPictures (3), (4), ..., (33)

function App() {
    const [showMenu, setShowMenu] = useState(false);

    // Inside your App.tsx or wherever you handle your data
    const photoshootsData = [
        {
            title: 'Wherever you shoot, it looks good in Italy',
            date: '2023-08-16', // Adjust the date as needed
            photos: [
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (17).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (23).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (18).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (19).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (20).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (21).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (22).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (24).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (25).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (26).jpg' },
                { name: 'ItalyPictures (1).jpg', url: '/ItalyPictures/ItalyPictures (1).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (2).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (3).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (4).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (5).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (6).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (7).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (8).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (9).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (10).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (11).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (12).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (13).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (14).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (15).jpg' },
                { name: 'ItalyPictures (2).jpg', url: '/ItalyPictures/ItalyPictures (16).jpg' },


                // Import other images similarly for ItalyPictures (3), (4), ..., (33)
            ],
        },
        {
            title: 'Bilkent (to be continued)',
            date: '2023-11-29', // Adjust the date as needed
            photos: [
                { name: 'CampusPictures (2).jpg', url: '/CampusPictures/CampusPictures (1).jpg' },
                { name: 'CampusPictures (2).jpg', url: '/CampusPictures/CampusPictures (2).jpg' },
                { name: 'CampusPictures (2).jpg', url: '/CampusPictures/CampusPictures (3).jpg' },
                { name: 'CampusPictures (2).jpg', url: '/CampusPictures/CampusPictures (4).jpg' },
                { name: 'CampusPictures (2).jpg', url: '/CampusPictures/CampusPictures (5).jpg' },
                { name: 'CampusPictures (2).jpg', url: '/CampusPictures/CampusPictures (6).jpg' },
                { name: 'CampusPictures (2).jpg', url: '/CampusPictures/CampusPictures (7).jpg' },
            ],
        },
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <body>
        <div className="App">
            {/* Menu button for smaller screens */}

            {/* Navbar */}
            <div className={`topnav ${showMenu ? 'show-menu' : ''}`}>
                <a href="#home" className="active">
                    Home
                </a>
                <a href="https://open.spotify.com/user/214kruqj72y3b4tstdaqzebcy?si=7034449d8b86420c">Spotify</a>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=zeynep.dellal@gmail.com">Contact</a>
            </div>

            {/* Header */}
            <header className="App-header">
                Art & Life
            </header>

            <NewsTicker />

            <Photoshoots photoshoots={photoshootsData} />
        </div>
        </body>
    );
}

export default App;
