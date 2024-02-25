import React, { useState } from 'react';
import '../../App.css';
import '../../global.css';
import NewsTicker from '../../ui/NewsTicker/NewsTicker';
import Photoshoots from '../../ui/Photoshoots/Photoshoots';
import Navbar from '../../ui/Navbar/Navbar';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import Articles from '../Articles/Articles';

function Home() {
    const [showMenu, setShowMenu] = useState(false);

    // Inside your App.tsx or wherever you handle your data
    const photoshootsData = [
        {
            title: 'Wherever you shoot, it looks good in Italy',
            date: '2023-08-16', // Adjust the date as needed
            photos: [
                { name: 'ItalyPictures (1).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (1).JPG' },
                { name: 'ItalyPictures (2).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (2).JPG' },
                { name: 'ItalyPictures (3).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (3).jpg' },
                { name: 'ItalyPictures (4).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (4).JPG' },
                { name: 'ItalyPictures (5).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (5).JPG' },
                { name: 'ItalyPictures (6).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (6).JPG' },
                { name: 'ItalyPictures (7).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (7).JPG' },
                { name: 'ItalyPictures (8).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (8).JPG' },
                { name: 'ItalyPictures (9).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (9).JPG' },
                { name: 'ItalyPictures (10).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (10).JPG' },
                { name: 'ItalyPictures (11).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (11).JPG' },
                { name: 'ItalyPictures (12).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (12).JPG' },
                { name: 'ItalyPictures (13).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (14).JPG' },
                { name: 'ItalyPictures (14).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (15).JPG' },
                { name: 'ItalyPictures (15).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (16).JPG' },
                { name: 'ItalyPictures (16).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (17).JPG' },
                { name: 'ItalyPictures (17).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (18).JPG' },
                { name: 'ItalyPictures (18).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (20).JPG' },
                // Import other images similarly for ItalyPictures (3), (4), ..., (33)
            ],
        },
        {
            title: 'Bilkent (to be continued)',
            date: '2023-11-29', // Adjust the date as needed
            photos: [
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (1).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (2).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (3).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (4).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (5).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (6).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (7).JPG' },
            ],
        },
    ];

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="App">

            <Photoshoots photoshoots={photoshootsData} />
        </div>
    );
}

export default Home;
