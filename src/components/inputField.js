import React from "react";

export function InputField(props){
    return (
    <div>
    <label for="giveText">{props.title}</label>
    <input type="text" id="giveText" placeholder={props.placeHld}></input>
    </div>
    );
};