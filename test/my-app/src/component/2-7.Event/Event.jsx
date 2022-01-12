import React from 'react'

export default function Event() {
    const handleButtonClick = (e) => {
        // console.dir(e);
        console.log("handleButtonClick");
    }
    const handleClickCapture = (e) => {
        // console.dir(e);
        console.log("handleClickCapture");
    }
    const handleMouseLeave = (e) => {
        console.dir(e);
        console.log("handleMouseLeave");
    }
    const handleClickCapture2 = () => {
        console.log("handleClickCapture2");
    }
    const handlClickBubble = () => {
        console.log("handlClickBubble");
    }
    return (
        <div onClickCapture={handleClickCapture}>
            <div onClickCapture={handleClickCapture2} onClick={handlClickBubble}>
                <button onClick={handleButtonClick} onMouseLeave={handleMouseLeave}>Button</button>
            </div>
        </div>
    )
}
