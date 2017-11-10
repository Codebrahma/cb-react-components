import { HOC } from 'formsy-react';

import InputTextUnbinded from './InputText.js';
import InputPasswordUnbinded from './InputPassword.js';
import InputCheckUnbinded from './InputCheckbox.js';

export const InputText = HOC(InputTextUnbinded);
export const InputPassword = HOC(InputPasswordUnbinded);
export const InputCheck = HOC(InputCheckUnbinded);