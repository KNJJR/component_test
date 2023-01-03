import { useState } from "react";
import { createContext } from "react";

const initialUserInformation = {
    name : "山田　太郎",
    nameOfKatakana : "ヤマダ　タロウ",
    sex : "male",
    birthDay : 19850412,
    job : "engineer"
}

export const UserInformationContext = createContext({}) 

export const UserInformationProvider = props => {

    const [userInformation, setUserInformation] = useState({initialUserInformation})

    console.log(userInformation.name)

    return (
        <UserInformationContext.Provider value = {{userInformation, setUserInformation}}>
            {props.children}
        </ UserInformationContext.Provider>
    );

}