import React from 'react';

const TextField = function(props){
return <div className="textField">
            <span>{props.label} <span style={{color:"red"}}> {props.isRequired !== undefined && props.isRequired ? "*" : "" }</span></span>
            <input 
                type = {props.type} 
                placeholder = {props.placeholder}
                onChange = {props.onChange}
                name={ props.field }
            />
            {props.validation !== "" ? <div style={{color:"red", fontSize:"13px"}}>{props.validation}</div> : "" }
        </div>
  }

  export default TextField