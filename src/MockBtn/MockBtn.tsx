import React from 'react';
import './MockBtn.css';

type MockBtnProps = {
    clickEventHandler: () => void,
    text: string
};

function MockBtn({clickEventHandler, text}: MockBtnProps) {
    return (
    <button onClick={clickEventHandler}>{text}</button>
    );
}

export default MockBtn;