import { connect } from 'react-redux';
import { AdvisorsList } from '../../../components/molecules/AdvisorsList';
import { sortedAdvisorsListSelector } from '../../../selectors/sortedAdvisorsListSelector';
import { maxAllowedAdvisorsSelector } from '../../../selectors/maxAllowedAdvisorsSelector';
import { fetchAdvisorsListAction } from '../../../actions/fetchAdvisorsListAction/fetchAdvisorsListAction';

export const mapStateToProps = state => ({
  advisors: sortedAdvisorsListSelector(state),
  hasMore: maxAllowedAdvisorsSelector(state)
});

export const mapDispatchToProps = (dispatch) => ({
  getAdvisorsList: (response) => {
    dispatch(fetchAdvisorsListAction(response));
  }
});

export const AdvisorsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvisorsList);
