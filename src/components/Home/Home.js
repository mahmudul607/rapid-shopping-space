import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera, faLaptop,  faMobileAndroidAlt, faRecycle, faShippingFast, faTruck, faUmbrella } from '@fortawesome/free-solid-svg-icons';
import NavTabs from '../NavTabs/NavTabs';






const Home = () => {
   

    

  



    return (
        <div className='home-body'>
            {/* Offer Banner */}
            <div className='offer-banner'>
            <NavTabs></NavTabs>

            </div>
            {/* Offer Banner */}

            {/* Our Items */}
            <div className='ourItems'>
                <div className='ourItems-top-text'>
                    <h4>Our Collections</h4>
                    
                </div>
                <div className='items'>
                    <div className='item'>
                        <div className='item-icon'>
                            <FontAwesomeIcon icon={faCamera}></FontAwesomeIcon>
                        </div>
                        <div className='item-name'>
                        <h5>Camera</h5>
                        </div>
                        
                    </div>
                    <div className='item'>
                        <div className='item-icon'>
                            <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                        </div>
                        <div className='item-name'>
                        <h5>Laptop</h5>
                        </div>
                        
                    </div>
                    <div className='item'>
                        <div className='item-icon'>
                            <FontAwesomeIcon icon={faMobileAndroidAlt}></FontAwesomeIcon>
                        </div>
                        <div className='item-name'>
                        <h5>Android</h5>
                        </div>
                        
                    </div>
                    
                </div>

            </div>
            {/* Our Items */}

            <div className='exclusive-items'>

            </div>
            <div className='why-we-are-best'>

            </div>
            <div className='client-review'>

            </div>
            {/* before-footer-area */}
            <div className='before-footer-area'>
                <div className='before-footer-area-header-text'>
                    <h3>Do You know</h3>
                    <h5>Why We Are Best For You</h5>
                </div>
                <div class="items">
                    <div class="item">
                        <div class="options"><div className='icon'>
                            <FontAwesomeIcon icon={faTruck} ></FontAwesomeIcon>
                        </div>
                            <div className='text-of-icon'>
                                <span>Free Shipping <br /> On All Order</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="options">
                            <div className='icon'>
                                <FontAwesomeIcon icon={faRecycle}></FontAwesomeIcon>
                            </div>
                            <div className='text-of-icon'>
                                <span>Money Back <br />Guaranty </span>
                            </div>
                        </div>

                    </div>
                    <div class="item">
                        <div class="options">
                            <div className='icon'>
                                <FontAwesomeIcon icon={faUmbrella}></FontAwesomeIcon>
                            </div>
                            <div className='text-of-icon'>
                                <span>Safe Shipping <br /> Guaranty</span>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="options">
                            <div className='icon'>
                                <FontAwesomeIcon icon={faShippingFast}></FontAwesomeIcon>
                            </div>
                            <div className='text-of-icon'>
                                <span>Quick Delivery <br />To Any Place</span>
                            </div></div>
                    </div>
                </div>

            </div>
             {/* before-footer-area */}

        </div>
    );
};

export default Home;