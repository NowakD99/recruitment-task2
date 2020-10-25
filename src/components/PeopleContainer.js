import React from 'react';
import People from './People';

const PeopleContainer = props => {
    const peopleTable = [
        {key: "1", img: "/images/kids-1.jpg", type: "polygon", text: ""},
        {key: "2", img: "/images/kids-2.jpg", type: "polygon", text: ""},
        {key: "3", img: "/images/men-1.jpg", type: "circle", text: "Box caption"},
        {key: "4", img: "/images/women-2.jpg", type: "circle", text: "Box caption"},
      ];
      
    return (
        <div className="people-container"> 
              {peopleTable.map(({key, type, img, text}) => 
                <People key={key} type={type} img={img} text={text}/>
              )}
          </div>
    );
};

export default PeopleContainer;