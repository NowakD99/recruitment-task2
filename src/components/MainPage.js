import React from 'react';
import PeopleContainer from './PeopleContainer';
import Photo from './Photo';
import BoxContainer from './BoxContainer';
import RightSideInfo from './RightSideInfo';

const MainPage = () => {

    return (
        <>
            <div className="box-section">
                <BoxContainer />
            </div>
            <div className="section-container-2 row">
                <img src="/images/bg-img.jpg" className="col s12" alt=""/>
                <div className="section-content col s12 m12 xl10 offset-xl1">
                <PeopleContainer />
                    <div className="bottom-section">
                        <Photo site="l" id="1"/> 
                        <Photo site="r" id="2"/>
                        <RightSideInfo />
                    </div>
                </div>
            </div>
        </>
    );
};

export default MainPage;