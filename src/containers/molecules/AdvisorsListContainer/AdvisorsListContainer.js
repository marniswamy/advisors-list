import { connect } from 'react-redux';
import { AdvisorsList } from '../../../components/molecules/AdvisorsList';
import { sortedAdvisorsListSelector } from '../../../selectors/sortedAdvisorsListSelector';

export const mapStateToProps = state => ({
  advisors: sortedAdvisorsListSelector(state)
});

export const AdvisorsListContainer = connect(
  mapStateToProps,
  null,
)(AdvisorsList);
