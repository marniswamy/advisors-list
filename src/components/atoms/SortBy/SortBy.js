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
 * SortBy component holds the select component that sorts the advisor list
 * based on reviews
 *
 * @returns {*} a React Stateless Functional Component
 */
export const SortBy = ({
  value,
  handleChange
}) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl className={classes.formControl}>
        <InputLabel>Sort By Rating</InputLabel>
        <Select
          value={value}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value={1}>High - Low</MenuItem>
          <MenuItem value={2}>Low - High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

SortBy.propTypes = {};

SortBy.defaultProps = {};
