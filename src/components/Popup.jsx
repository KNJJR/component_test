import { useState } from 'react';
import './input.css'

export const Popup = (props) => {

    const popupText = {
        next:"次へ",
        finish:"終了"
    };

    const numberOfPopup = props.imageFile.length;

    const [popupTimes,setPopupTimes] = useState(0);

    const countUpPopupTimes = () => {
        setPopupTimes(popupTimes => popupTimes+1);
    }

    const finishPopup = () => {
        setPopupTimes(popupTimes => popupTimes = 0);
        props.switchPopup();
    }

    const PopupDisplay = (props) => {

        return(
            <div className='popup'>
            <div className='popup_inner'>
            <img className="fit-picture" src={props.imageFile} alt="アイコン"></img>
            <button onClick={props.actPopup}>{props.text}</button>
            </div>
            </div>
        )

    }

    let normalDisplay = <PopupDisplay text={popupText.next} imageFile={props.imageFile[popupTimes]} actPopup={countUpPopupTimes}/>
    let lastDisplay = <PopupDisplay text={popupText.finish} imageFile={props.imageFile[popupTimes]} actPopup={finishPopup}/>

    return (<div>{popupTimes >= 0 ? (popupTimes < numberOfPopup-1 ? normalDisplay : lastDisplay ) : null}</div>)


}