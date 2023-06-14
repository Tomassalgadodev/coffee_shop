import React, { useState } from "react";
import './PhotoCarousel.css';

import carouselImage1 from '../assets/carousel-image1.jpeg';
import carouselImage2 from '../assets/carousel-image2.jpeg';
import rightArrow from '../assets/right-arrow.png';
import leftArrow from '../assets/left-arrow.png';

const PhotoCarousel = () => {
    const [currentPhoto, setCurrentPhoto] = useState(carouselImage1);
    const currentPhotos = [];

    const changePhoto = () => {
        currentPhoto === carouselImage1 ? setCurrentPhoto(carouselImage2) : setCurrentPhoto(carouselImage1);
    }

    return (
        <div className="carousel-container">
            <div className="carousel">
                <div className="photo-container" style={{ backgroundImage: `url(${currentPhoto})`, backgroundSize: 'contain' }}>
                    <div className="left-arrow"
                        onClick={changePhoto}
                    >
                        <img className="carousel-arrow" src={leftArrow} />
                    </div>
                    <div className="right-arrow"
                        onClick={changePhoto}
                    >
                        <img className="carousel-arrow" src={rightArrow} />
                    </div>
                </div>
                <div className="selectors-container">
                    <img style={{ opacity: currentPhoto === carouselImage1 ? '.5' : '1' }} className="selector-image" src={carouselImage1}/>
                    <img style={{ opacity: currentPhoto === carouselImage2 ? '.5' : '1' }} className="selector-image" src={carouselImage2}/>
                </div>
            </div>
        </div>
    )
}

export default PhotoCarousel;