import React from 'react';

const InfoItem = ({id, text}) => {

    return (
        <div className="right-side-info-list-item">
            <span>{id}</span>
            <p>{text}</p>
        </div>
    );
};

export default InfoItem;