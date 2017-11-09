import React from 'react';
import BasicInput from './BasicInput.js';

const InputTextWithLabel = ({ label, ...props}) => (
    <div>
        <label>{label}</label>
        <BasicInput
           {...props} 
        />
    </div>
)

export default InputTextWithLabel;