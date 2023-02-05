import React, { useState, useEffect } from 'react';
import fakeData from '../../fakeData';
import './Carousel.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

const Carousel = () => {
    const take = fakeData.slice(0, 19);
    const take1 = fakeData.slice(20, 49);
    const take2 = fakeData.slice(50, 80);
    const [product] = useState(take);
    const [product1] = useState(take1);
    const [product2] = useState(take2);



    const images = product.map(pd => pd.img)
    const images1 = product1.map(pd => pd.img)
    const images2 = product2.map(pd => pd.img)

    const autoPlay = true;
    const [index, setIndex] = useState(0);
    const [index1, setIndex1] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [intervalId, setIntervalId] = useState(null);


    const handlePrev = () => {
        clearInterval(intervalId);
        setIndex(index === 0 ? images.length - 1 : index - 1);
        setIndex1(index1 === 0 ? images1.length - 1 : index1 - 1);
        setIndex2(index2 === 0 ? images2.length - 1 : index2 - 1);
    };

    const handleNext = () => {
        clearInterval(intervalId);
        setIndex(index === images.length - 1 ? 0 : index + 1);
        setIndex1(index1 === images1.length - 1 ? 0 : index1 + 1);
        setIndex2(index2 === images2.length - 1 ? 0 : index2 + 1);
    };

    useEffect(() => {
        if (autoPlay) {
            const id = setInterval(() => {
                setIndex(index === images.length - 1 ? 0 : index + 1);
                setIndex(index === images1.length - 1 ? 0 : index1 + 1);
                setIndex(index === images2.length - 1 ? 0 : index2 + 1);
            }, 9000);
            setIntervalId(id);
        }
        return () => clearInterval(intervalId);
    }, [autoPlay, images.length, images1.length, images2.length, index, index1, index2, intervalId]);

   

    const imgDivStyle ={
        width: '25%', 
        height: '250px',
        margin: 'auto',
        justifyContent: 'center',
        padding:'5%'

       
        

    }

    return (
        <div className="carousel">
            <div style={{display:'flex', height:'210px', paddingBottom:'20px'}} className="carousel__image-container">
                <div style={imgDivStyle}>
                <img  src={images[index]} alt="Slide" />
                </div>
                <div style = {imgDivStyle}>
                <img  src={images1[index]} alt="Slide" />
                </div>
                <div style = {imgDivStyle} >
                <img src={images2[index]} alt="Slide" />
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
