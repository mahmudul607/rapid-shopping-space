import React, { useEffect, useState } from 'react';
import './NavTabs.css';
import offerImg1 from '../../images/1.jpg';
import offerImg2 from '../../images/1.png';

const NavTabs = () => {
    const [activeTab, setActiveTab] = useState(1)

    const handelOpenTab = (indexTab) => {
        setActiveTab(indexTab)
    }
    useEffect(() => {
        const intervalId = setInterval(() => {
          setActiveTab(activeTab === 5 ? 1 : activeTab + 1);
        }, 3000);
        return () => clearInterval(intervalId);
      }, [activeTab]);


    return (
        <div className='navTab-body'>
            <div className='nav-bar'>
                        <ul>
                            
                        
                        <li className={activeTab === 1 ? 'active tabs ' : ''}
                            onClick={() => handelOpenTab(1)}>
                                    <img src={offerImg1} alt="" title='Scroll For More Offer'/>
                            </li>
                            
                      
                        
                        <li className={activeTab === 2 ? 'active tabs' : ''}
                            onClick={() => handelOpenTab(2)}>
                                  <img src={offerImg2} alt="" title='Scroll For More Offer'/>

                            </li>
                       
                        <li className={activeTab === 3 ? 'active tabs' : ''}
                            onClick={() => handelOpenTab(3)}>
                                 <img src={offerImg1} alt="" title='Scroll For More Offer'/>
                            </li>
                           
                        
                        <li className={activeTab === 4 ? 'active tabs' : ''}
                            onClick={() => handelOpenTab(4)}>
                                <img src={offerImg1} alt="" title='Scroll For More Offer'/>
                            </li>
                        
                        <li className={activeTab === 5 ? 'active tabs' : ''}
                            onClick={() => handelOpenTab(5)}>
                                <img src={offerImg1} alt="" title='Scroll For More Offer'/>
                            </li>
                        
                      </ul>
            </div>

            <div className='tab-content'>
                {activeTab === 1 && <div className='active-content'>tap 1 content
                    <img src={offerImg1} alt=""/>
                </div>}
                {activeTab === 2 && <div className='active-content'>tap 2 content
                <img src={offerImg2} alt=""/>
                </div>}
                {activeTab === 3 && <div className='active-content'>tap 3 content
                <img src={offerImg1} alt=""/></div>}
                {activeTab === 4 && <div className='active-content'>tap 4 content
                <img src={offerImg2} alt=""/></div>}
                {activeTab === 5 && <div className='active-content'>tap 5 content
                <img src={offerImg1} alt=""/></div>}

            </div>


        </div>
    );
};

export default NavTabs;