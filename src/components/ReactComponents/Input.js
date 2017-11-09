import React from 'react';
import Input from '../StyledComponents/Input.js';
import Label from '../StyledComponents/Label.js';

const InputTextWithLabel = ({ label, type = "text", ...props}) => (
    <div>
        {
            label && (
                <Label>{label}</Label>
            )
        }
        <Input
           {...props} 
        />
    </div>
)

export default InputTextWithLabel;