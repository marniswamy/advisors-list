import { connect } from 'react-redux';
import { AdvisorsList } from '../../../components/molecules/AdvisorsList';

export const mapStateToProps = (state, ownProps) => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

export const AdvisorsListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(AdvisorsList);
