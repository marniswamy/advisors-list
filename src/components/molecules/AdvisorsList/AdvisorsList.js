import React from "react";
import axios from 'axios';
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from '@material-ui/core/Typography';
import { AdvisorCard } from "../../organisms/AdvisorCard";
import InfiniteScroll from 'react-infinite-scroll-component';

/**
 * AdvisorsList holds the list of all advisors
 *
 * @returns {*} a React Stateless Functional Component
 */
export class AdvisorsList extends React.PureComponent {
  state = {
    itemsLength: 10,
  }

  async componentDidMount() {
    this.getAdvisorsFromApi();
  }

  getAdvisorsFromApi = async () => {
    try {
      const response = await axios.get(`/advisors?itemLength=${this.state.itemsLength}`);
      return this.props.getAdvisorsList(response);
    } catch (error) {
      console.log(error);
    }
  }

  /**
 * This function is used to fetch more records from the server.
 */
  fetchMoreAdvisorsList = async () => {
    await this.setState({
      itemsLength: this.state.itemsLength + 10
    });
    await this.getAdvisorsFromApi();
  };


  render() {
    const { advisors, hasMore } = this.props;
    return (
      <Container maxWidth="sm" className="advisor-list-container">
        <InfiniteScroll
          dataLength={advisors.length}
          next={this.fetchMoreAdvisorsList}
          hasMore={hasMore}
          loader={<h4 className='text-center'>Loading...</h4>}
          endMessage={<h4 className='text-center'>No More Results</h4>}
          className='infinite-scroll'
        >
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
        </InfiniteScroll>
      </Container>
    );
  }
}