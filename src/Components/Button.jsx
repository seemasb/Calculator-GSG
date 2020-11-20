import React from 'react';
import './Button.css';
function Button(props) {
  // const {Action} = props
  return (
    <div>
      <button
        onClick={() => props.myAction(props.children)}
        className={` ${
          isNumber(props.children)
            ? 'Button_design'
            : `${isClear(props.children) ? 'light_blue' : 'Operator'}`
        } `}
      >
        {props.children}
      </button>
    </div>
  );
}
const isNumber = (val) => {
  return !isNaN(val) || val === '.';
};
const isClear = (val) => {
  return val === 'AC' || val === '+/-' || val === '%';
};
export default Button;
