import React, { useState, useContext } from 'react';
import { InputName } from "./InputName"
import { Popup } from "./Popup"
import { ShowPDF } from "./ShowPDF"
import reactImage from './images/logo.svg';
import orangeImage from './images/orange.jpg';
import usagiImage from './images/atataka__kakizome.jpg'
import testPDF from 'file:///C:/Users/USER/Desktop/component_test/src/components/images/test.pdf'


export const CostomerContents = () => {

    const imageFile = [usagiImage,orangeImage,reactImage];

    const pdfFile = {
        myPDF : testPDF
    }

    const [popup, setPopup] = useState(false);

    const switchPopup = () => {
        setPopup(popup => !popup)
    }

    return (
        <div>
            <InputName/>
            <button onClick={switchPopup}>show popup</button>
            { popup ? <Popup switchPopup={switchPopup} imageFile={imageFile} /> : <ShowPDF myPDF = {pdfFile.myPDF}/> }      
        </div>
    )

    
}