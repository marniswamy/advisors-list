import React from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { AdvisorCard } from "../../organisms/AdvisorCard";

/**
 * AdvisorsList holds the list of all advisors
 *
 * @returns {*} a React Stateless Functional Component
 */
export const AdvisorsList = ({ advisors }) => (
  <Container maxWidth="sm" className="advisor-list-container">
    <Grid container justify="center" spacing={2}>
      {advisors.map(advisor => (
        <Grid xs={12} key={advisor.name} item>
          <AdvisorCard
            advisor={advisor}
          />
        </Grid>
      ))}
    </Grid>
  </Container>
);