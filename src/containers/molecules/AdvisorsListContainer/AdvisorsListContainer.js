import { connect } from 'react-redux';
import { AdvisorsList } from '../../../components/molecules/AdvisorsList';
import { filteredAdvisorListSelector } from '../../../selectors/filteredAdvisorListSelector';

export const mapStateToProps = state => ({
  advisors: filteredAdvisorListSelector(state)
});

export const AdvisorsListContainer = connect(
  mapStateToProps,
  null,
)(AdvisorsList);
