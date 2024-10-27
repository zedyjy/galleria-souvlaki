import React, { useState } from 'react';
import '../../App.css';
import '../../global.css';
import NewsTicker from '../../ui/NewsTicker/NewsTicker';
import Photoshoots from '../../ui/Photoshoots/Photoshoots';
import Navbar from '../../ui/Navbar/Navbar';
import {BrowserRouter as Router, Route, Link} from "react-router-dom";
import Articles from '../Articles/Articles';

// Sample article data
const articles = [
    {
        title: 'Capturing Moments: A Journey Through Italy',
        date: '2023-08-15',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. ...',
    },
    // Add more articles as needed
];

function Home() {
    const photoshootsData = [
        {
            title: 'Bilkent (to be continued)',
            date: '2023-11-29', // Adjust the date as needed
            photos: [
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (1).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (4).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (6).JPG' },
                { name: 'CampusPictures (2).jpg', url: '/galleria-souvlaki/CampusPictures/CampusPictures (7).JPG' },
            ],
        },
        {
            title: 'Wherever you shoot, it looks good in Italy',
            date: '2023-08-16',
            photos: [
                { name: 'ItalyPictures (3).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (3).JPG' },
                { name: 'ItalyPictures (3).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (10).JPG' },
                { name: 'ItalyPictures (3).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (12).JPG' },
                { name: 'ItalyPictures (3).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (18).JPG' },
                { name: 'ItalyPictures (3).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (4).JPG' },
                { name: 'ItalyPictures (3).jpg', url: '/galleria-souvlaki/ItalyPictures/ItalyPictures (20).JPG' }
                // Add more photos as needed
            ],
        },
        // Add more photoshoots as needed
    ];

    return (
        <div className="App">
            {/* Header */}
            <header className="App-header">
                Art & Life
            </header>

            <NewsTicker />

            <h1 className="exhibition-title">Exhibitions</h1>

            <Photoshoots photoshoots={photoshootsData} />

            { /*<Articles />*/}
        </div>
    );
};

export default Home;
