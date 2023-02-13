import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp } from "@fortawesome/free-solid-svg-icons";
import './GoToTop.css'

function GoToTop() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > window.innerHeight * 0.05) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {showButton && (
        <div className="gotoTop-res" onClick={handleClick} style={{ position: "fixed", bottom: 0, right: 30, height:'40px',width:'40px' }}>
         <FontAwesomeIcon style={{color:'greenYellow',fontSize:'30px' }} icon={faArrowCircleUp} />
        </div>
      )}
    </>
  );
}

export default GoToTop;
