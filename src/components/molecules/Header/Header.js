import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const Header = props => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="h6">
        Advisors List
    </Typography>
    </Toolbar>
  </AppBar>
);
