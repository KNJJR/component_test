import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './input.css'

export const InputName = (props) => {

    // stateを作成
    const [text, setText] = useState('');
 
    //入力値をtextに反映
    const handleChange = e => setText(e.target.value);
 
    // 送信ボタン押下時、ToDoに追加
    const handleSubmit = e => {
        // CostomerContentsの「getName」関数を実行
        props.getName(text);
        setText('');
    };

    return (
      <form onSubmit={handleSubmit}>
        <div>
        <label className="input-label">氏名 <span className="required">必須</span></label>
          <input id="name" name="name" value={text} onChange={handleChange} />
        </div>
        <div>
          <button type="submit">送信</button>
        </div>
      </form>
      );

}