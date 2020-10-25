import React from 'react';
import InfoItem from './InfoItem';


const RightSideInfo = props => {
    const listTable = [
        {key: "1", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {key: "2", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {key: "3", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {key: "4", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {key: "5", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"},
        {key: "6", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna"}
      ];
      
    return (
        <div className="right-side-info">
            <div className="right-side-info-header">
                <img src="/images/icon-1.png" alt="icon"/>
                <h2>Title</h2>
            </div>

            <div className="right-side-info-list">
            {listTable.map(({key, text}) => 
                <InfoItem  key={key} id={key} text={text} />
            )}
            </div>
        </div>
    );
};

export default RightSideInfo;