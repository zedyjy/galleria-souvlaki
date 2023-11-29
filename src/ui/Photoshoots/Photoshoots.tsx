// Photoshoots.tsx

import React, { useState } from 'react';
import './Photoshoots.css';

interface Photoshoot {
    title: string;
    date: string;
    photos: { name: string; url: string }[];
}

interface Photoshoot {
    title: string;
    date: string;
    photos: { name: string; url: string }[];
}

interface PhotoshootsProps {
    photoshoots: Photoshoot[];
}

const Photoshoots: React.FC<PhotoshootsProps> = ({ photoshoots }) => {
    const [selectedPhoto, setSelectedPhoto] = useState<string | null>(null);

    const handlePhotoClick = (photoUrl: string) => {
        setSelectedPhoto(photoUrl);
    };

    return (
        <div className="photoshoots">
            {photoshoots.map((shoot, index) => (
                <div key={index} className="photoshoot">
                    <h1>{shoot.title}</h1>
                    <div className="photoshoot-info">
                        <p>{shoot.date}</p>
                    </div>
                    <div className="photos">
                        {shoot.photos.map((photo, photoIndex) => (
                            <div className="box">
                            <img
                                key={photoIndex}
                                src={photo.url} // Use the provided URL
                                alt={photo.name}
                                onClick={() => handlePhotoClick(photo.url)}
                            /></div>
                        ))}
                    </div>
                </div>
            ))}
            {selectedPhoto && (
                <div className="overlay" onClick={() => setSelectedPhoto(null)}>
                    <img src={selectedPhoto} alt="Selected" />
                </div>
            )}
        </div>
    );
};

export default Photoshoots;