import React from 'react';

const Arrows = ({id}) => {

    return (
        <div className={`arrows arrows-${id}`}>
            <div className={`arrow arrow-l`}></div>
            <div className={`arrow arrow-r`}></div>
        </div>
    );
};

export default Arrows;