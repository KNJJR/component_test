import './input.css'

export const Popup = (props) => {
  

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


    if (props.popupTimes == 0){
        return null
    }else if(props.popupTimes < props.numberOfPopup) {
        return <PopupDisplay text={props.text.next} imageFile={props.imageFile.orange} actPopup={props.countUpPopupTimes}/>
    }else{
        return <PopupDisplay text={props.text.finish} imageFile={props.imageFile.react} actPopup={props.finishPopup}/>
    }

}