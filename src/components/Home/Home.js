import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRecycle, faShippingFast, faTruck, faUmbrella } from '@fortawesome/free-solid-svg-icons';






const Home = () => {



    return (
        <div className='home-body'>
            <div className='offer-banner'>


            </div>
            <div className='ourItems'>

            </div>
            <div className='exclusive-items'>

            </div>
            <div className='why-we-are-best'>

            </div>
            <div className='client-review'>

            </div>
            <div className='before-footer-area'>
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

        </div>
    );
};

export default Home;