import * as React from 'react';
import * as PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  card: {
    display: 'flex',
    minHeight: 150
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 185,
    minWidth: 170
  }
}));

/**
 * A description explaining what we use this component for
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const AdvisorCard = ({ advisor }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.cover}
        image={advisor.image}
        alt={advisor.name}
        title={advisor.name}
      />
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {advisor.name}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            {advisor.jobTitle}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Company: {advisor.company}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Langauge: {advisor.language}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Reviews: {advisor.reviews}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary">
            Status: {advisor.status}
          </Typography>
        </CardContent>
      </div>
    </Card>
  );
}

AdvisorCard.propTypes = {
  advisor: PropTypes.object
};

AdvisorCard.defaultProps = {
  advisor: {}
};
