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
export const FilterBy = ({
  value,
  handleChange
}) => {
  const classes = useStyles();
  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Filter Advisors</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={1}>Status</MenuItem>
          <MenuItem value={2}>Language</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

FilterBy.propTypes = {};

FilterBy.defaultProps = {};
