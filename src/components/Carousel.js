import React, {useEffect, useState} from 'react';
import M from "materialize-css";

const Carousel = () => {
    let [counter, setCounter] = useState(0);
    const [isVisible, setVisible] = useState(false)
    useEffect(() => {
          var elems = document.querySelectorAll('.carousel');
          M.Carousel.init(elems, { duration: 1000, onCycleTo: () => {setCounter(counter++); if(counter === 6 ) setPopUp(true)}});
          // eslint-disable-next-line 
        }, []);
      
    const setPopUp = (val) => {
      setVisible(val);
    }
    
    return (
      <>
        <div className="carousel">
          <a className="carousel-item" value="1" href="#one!"><img src="/images/karuzela_1.jpg" alt=""/></a>
          <a className="carousel-item" value="2" href="#two!"><img src="/images/karuzela_2.jpg" alt=""/></a>
          <a className="carousel-item" value="3" href="#three!"><img src="/images/karuzela_1.jpg" alt=""/></a>
          <a className="carousel-item" value="4" href="#four!"><img src="/images/karuzela_2.jpg" alt=""/></a>
          <a className="carousel-item" value="5" href="#five!"><img src="/images/karuzela_1.jpg" alt=""/></a>
        </div>
        <div className={`pop-up ${isVisible ? "on": "off"}`}>
            <span>Pop'up</span>
            <button onClick={() => setPopUp(false)}>Close</button>
        </div>
      </>
    );
};

export default Carousel;