import React, { useEffect, useRef } from 'react';
import $ from 'jquery';
import 'owl.carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Banner = ({ images }) => {
  const bannerRef = useRef(null);
 

  useEffect(() => {
    const $banner = window.$(bannerRef.current);

    $banner.owlCarousel({
      loop: true,
      margin: 10,
      nav: true,
      items: 1,
      autoplay: true,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      dots: true,
      dotsEach: 1,
    });

    // set dot content based on images
    $banner.on('initialized.owl.carousel', () => {
        console.log('Initialized Owl Carousel');
      const $dots = $banner.find('.owl-dot');
      images.forEach((image, index) => {
        
        const $img = $(`<img src="${image}" alt="Banner ${index + 1} Preview" />`);
        $dots.eq(index).html($img);
      });
    });
  }, []);

  return (
    <div className="owl-carousel owl-theme" ref={bannerRef}>
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Banner ${index + 1}`} />
      ))}
    </div>
  );
};

export default Banner;
