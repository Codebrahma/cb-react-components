import React from 'react';
import { SelectField, Option } from 'react-mdl-extra';


const options=[{
  valueField : 'a',
  keyField : 'a',
  key: 'a',
  value: 'a',
}, {
  valueField : 'b',
  keyField : 'b',
  key: 'a',
  value: 'a',
}]

const SelectUI = (props) => (
  <SelectField label={'Select me'} value={3}>
  <Option value={1}>One</Option>
  <Option value={2}>Two</Option>
  <Option value={3}>Three</Option>
  <Option value={4}>Four</Option>
  <Option value={5}>Five</Option>
</SelectField>
);

export default SelectUI;