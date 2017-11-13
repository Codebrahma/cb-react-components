import React from 'react';
import PropTypes from 'prop-types';

import map from 'lodash/map';
import concat from 'lodash/concat';
import isUndefined from 'lodash/isUndefined';
import compact from 'lodash/compact';
import InputSelect from '../components/StyledComponents/InputSelect.js';
import Label from '../components/StyledComponents/Label.js';

const SimpleInputSelect = ({ input: { onChange, ...input }, meta, options, ...props }) => {
  const handleChange = ({ currentTarget: { value } }) => {
    onChange(isUndefined(value) ? null : value);
  };

  const selectOptions = compact(concat([!input.value && { label: 'Select...' }], options));
  return (
    <div>
      <Label>
        {props.label}
      </Label>
      <InputSelect
        {...input}
        {...props}
        onChange={handleChange}
      >
        {map(selectOptions, ({ value, label }) => <option value={value} key={Math.random()}>{label}</option>)}
      </InputSelect>
    </div>
  );
};

export default SimpleInputSelect;
