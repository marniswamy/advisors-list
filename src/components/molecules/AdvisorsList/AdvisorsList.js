import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    height: 140
  },
  control: {
    padding: theme.spacing(2)
  }
}));

/**
 * AdvisorsList holds the list of all advisors
 *
 * @returns {*} a React Stateless Functional Component
 */
export const AdvisorsList = props => {
  const classes = useStyles();
  return (
    <Container maxWidth="sm" className="advisor-list-container">
      <Grid container justify="center" spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6].map(value => (
          <Grid xs={12} key={value} item>
            <Paper className={classes.paper} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}