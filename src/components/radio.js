import React from "react";

export function Radio(props){

    return (
        <div>
    <input type="radio" id="gender"></input>
    <label for="gender">{props.title}</label><br></br>
    </div>
);

};

/*import React, { useState } from "react";

export function Radio({ title, name }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleClick = () => {
        setIsChecked(!isChecked);
    };

    return (
        <div>
            <input
                type="radio"
                id={title}
                name={name}
                checked={isChecked}
                onChange={handleClick}
            />
            <label htmlFor={title}>{title}</label><br />
        </div>
    );
}
*/