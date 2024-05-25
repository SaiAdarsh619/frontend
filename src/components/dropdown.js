import React from "react";

export function Dropdown(props){

    return (
        <div>
            <label for="drop">Choose your {props.title}</label>
            <select id="drop">
                <option value="" disabledselected>Select</option>
                
                <option>Delhi</option>
                <option>Mumbai</option>
                <option>Kolkata</option>
                <option>Hyderabad</option>
                <option>Chennai</option>

            </select>
    </div>
);

};