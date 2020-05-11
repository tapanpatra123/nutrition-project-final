import React from 'react';

const Button = function(props){
return <button style= {props.style} onClick={props.onClick} >
            {props.btnText}
        </button>
  }

  export default Button
  