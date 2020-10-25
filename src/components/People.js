import React from 'react';

const People = ({type, img, text}) => {
    const triangle = <> 
                        <span className="left-top"></span>
                        <span className="left-bottom"></span>
                        <span className="right-top"></span>
                        <span className="right-bottom"></span>
                    </>;
                  
    return (
        <>
            <div className={`people-box people-box-${type}`}>
                <div className="people-img">
                
                <img src={img} alt=""/>
                </div>
                {type === "circle" ? <span>{text}</span> : triangle}
                
            </div>
            
        </>
    );
};

export default People;