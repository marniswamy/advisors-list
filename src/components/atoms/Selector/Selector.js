import * as React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const Selector = ({
  label,
  options,
  value,
  handleChange
}) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>{label}</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          {
            options.map(option =>
              <MenuItem
                key={option.value}
                value={option.value}
              >
                {option.label}
              </MenuItem>)
          }
        </Select>
      </FormControl>
    </div>
  );
}


Selector.propTypes = {
  label: PropTypes.string,
  option: PropTypes.array,
  value: PropTypes.string,
  handleChange: PropTypes.func
};

Selector.defaultProps = {
  label: '',
  options: [],
  value: '',
  handleChange: () => null
};
