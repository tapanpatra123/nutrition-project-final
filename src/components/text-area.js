import React from 'react';

const TextArea = function(props){
return <div className="textField">
            <span>{props.label} <span style={{color:"red"}}> {props.isRequired !== undefined && props.isRequired ? "*" : "" }</span></span>
            <textarea 
                placeholder = {props.placeholder}
                onChange = {props.onChange}
                name={ props.field }
            />
        </div>
  }

  export default TextArea