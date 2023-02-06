import React, { useState, useEffect, useRef } from 'react';
import fakeData from '../../fakeData';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';


const Carousel = () => {
  const [index, setIndex] = useState(0);
  const take = fakeData.slice(0, 30);
    const [product] =  useState(take)
    const autoPlay = true;
  const images = product.map(pd => pd.img)
  const [intervalId, setIntervalId] = useState(null);
  const imagesLength = useRef(images.length);
  const intervalIdRef = useRef(intervalId);

  const handlePrev = () => {
    clearInterval(intervalIdRef.current);
    setIndex(index === 0 ? imagesLength.current - 1 : index - 1);
  };

  const handleNext = () => {
    clearInterval(intervalIdRef.current);
    setIndex(index === imagesLength.current - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    imagesLength.current = images.length;
    intervalIdRef.current = intervalId;
    if (autoPlay) {
      const id = setInterval(() => {
        setIndex(index === imagesLength.current - 1 ? 0 : index + 1);
      }, 3000);
      setIntervalId(id);
    }
    return () => clearInterval(intervalIdRef.current);
  }, [autoPlay, index]);

  return (
    <div className="carousel">
      <div className="carousel__image-container">
        <div className="carousel__image-slide">
            <div className='img-div'>
            <img src={images[index]} alt="Slide 1"/>
            </div>
            <div className='img-div'>
            <img src={images[index + 5]} alt="Slide 2"/>
            </div>
            <div className='img-div'>
            <img src={images[index + 10]} alt="Slide 3"/>
            </div>
          
          
         
        </div>
      </div>
            <div>
                <button className="carousel-button-carousel-button--prev" onClick={handlePrev}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
                <button className="carousel-button-carousel-button--next" onClick={handleNext}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            </div>
    </div>
  );
};

export default Carousel;
