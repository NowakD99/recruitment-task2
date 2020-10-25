import React, {useState} from 'react';
import Box from './Box';
import BoxInfo from './BoxInfo';

const BoxContainer = props => {
    let longTxt = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    Lorem ipsum dolor sit amet,`

    const initBoxTable = [
        {key: "1", text: "box name 1", color: "#fff", backgroundColor: "#428d9e", longText: longTxt, active: false},
        {key: "2", text: "box name 2", color: "#fff", backgroundColor: "#c43434", longText: longTxt, active: false},
        {key: "3", text: "box name 3", color: "#fff", backgroundColor: "#dfbb42", longText: longTxt, active: false},
        {key: "4", text: "box name 4", color: "#fff", backgroundColor: "#508b61", longText: longTxt, active: false},
      ]

    const [boxTable, setBoxTable] = useState(initBoxTable);

    const handleHover = (e) => {
        let boxId = e.currentTarget.getAttribute('value');
        const newBoxTable = boxTable.map((box) => {
            if(box.key === boxId) {
                let color = box.color;
                box.color = box.backgroundColor;
                box.backgroundColor = color;
                box.active = !box.active;
            }
            return box;
        })
        setBoxTable(newBoxTable);
    }

    return (
        <>
            <div className="box-container">
                {boxTable.map(({key,color,backgroundColor,text}) => 
                    <Box 
                    key={key} 
                    color={color} 
                    backgroundColor={backgroundColor} 
                    text={text} 
                    id={key}
                    onHover={handleHover}
                    />
                )}
            </div>

            {boxTable.filter(({active}) => active).map(({key, text, longText, color, backgroundColor}) => 
                <BoxInfo 
                    key={key} 
                    text={text} 
                    longText={longText} 
                    color={color} 
                    backgroundColor={backgroundColor}
                />
            )}
        </>
    );
};

export default BoxContainer;