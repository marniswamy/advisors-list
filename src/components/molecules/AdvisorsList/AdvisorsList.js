import React from "react";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import { AdvisorCard } from "../../organisms/AdvisorCard";

/**
 * AdvisorsList holds the list of all advisors
 *
 * @returns {*} a React Stateless Functional Component
 */
export class AdvisorsList extends React.PureComponent {

  async componentDidMount() {
    try {
      const response = await axios.get('/advisors');
      return this.props.getAdvisorsList(response);
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const { advisors } = this.props;
    return (
      <Container maxWidth="sm" className="advisor-list-container">
        <Grid container justify="center" spacing={2}>
          {
            !advisors.length ?
              <Typography color="textSecondary" className="no-data-text">
                No advisors found
              </Typography>
              :
              advisors.map(advisor => (
                <Grid xs={12} key={advisor.name} item>
                  <AdvisorCard
                    advisor={advisor}
                  />
                </Grid>
              ))
          }
        </Grid>
      </Container>
    );
  }
}