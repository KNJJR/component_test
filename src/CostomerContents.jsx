import React, { useState } from 'react';
import { InputName } from "./InputName"
import { Popup } from "./Popup"
import reactImage from './logo.svg';
import orangeImage from './orange.jpg';


export const CostomerContents = () => {

    const [name, setName] = useState("");
    const getName = newName => {
        setName(newName);
        console.log(newName);
    } 

    const [popupTimes,setpopupTimes] = useState(0)

    const numberOfPopup = 2;
    const popupText = {
        next:"次へ",
        finish:"終了"
    };

    const imageFile = {
        react:reactImage,
        orange:orangeImage
    }

    const countUpPopupTimes = () => {
        setpopupTimes(popupTimes => popupTimes+1)
    }

    const finishPopup = () => {
        setpopupTimes(popupTimes => popupTimes = 0)
    }

    return (
        <div>
            <InputName getName = {getName} />
            <button onClick={countUpPopupTimes}>show popup</button>
            <Popup text={popupText} imageFile={imageFile}  countUpPopupTimes = {countUpPopupTimes} finishPopup = {finishPopup} popupTimes={popupTimes} numberOfPopup={numberOfPopup} />
        </div>
    )

    
}