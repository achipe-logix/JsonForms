import * as React from 'react';
import { withJsonFormsControlProps } from '@jsonforms/react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';

const radioRenderer = ({schema, label, required, data, handleChange, path}) => {
  const onChange = event => handleChange(path, event.target.value);
  const el = schema.enum.map((item, i) => (
    <span key={i}>
      <FormControlLabel value={item} control={<Radio />} label={item} />
    </span>
  ));
  return (
    <FormControl component="fieldset">
      <FormLabel component="legend" required={required} error={data === undefined}>{label}</FormLabel>
      <RadioGroup row aria-label="gender" name="gender1" value={data} onChange={onChange}>
        {el}
      </RadioGroup>
    </FormControl>
  )
}

export default withJsonFormsControlProps(radioRenderer);
