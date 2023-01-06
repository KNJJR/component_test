import React, { useState, useContext } from 'react';
import { UserInformationContext } from "./providers/UserInformationProvider";
import 'bulma/css/bulma.css';
import './input.css';

export const InputName = (props) => {

    const {userInformation, setUserInformation } = useContext(UserInformationContext);

    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
 
    const changeLastName = e => setLastName((lastName)=>(lastName=e.target.value));
    const changeFirstName = e => setFirstName((firstName)=>(firstName=e.target.value));
 
    const handleSubmit = e => {
      e.preventDefault(); //デプロイ時に消す
      if(lastName === "" || firstName === ""  ){
        return
      }
        setUserInformation((userInformation) => ({ ...userInformation, name: `${lastName}　${firstName}`}));
        setLastName('');
        setFirstName('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label className="input-label"><span className="required">必須</span>氏名 </label>
          <p><input id="last-name" name="last-name" placeholder="氏" value={lastName} onChange={changeLastName} />&emsp;<input id="first-name" name="first-name" placeholder="名" value={firstName} onChange={changeFirstName} /></p>
          <p>{ userInformation.name }</p>
        </div>
        <div>
        <button type="submit">送信</button>
        </div>
      </form>
      );

}