import React from 'react';
import Input from './Input.js';


const InputTextWithLabel = ({ label, ...props}) => (
    <div>
        <label>{label}</label>
        <Input
           {...props} 
        />
    </div>
)

export default InputTextWithLabel;