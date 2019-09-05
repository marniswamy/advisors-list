import { connect } from 'react-redux';
import { FilterBy } from '../../../components/atoms/FilterBy';

export const mapStateToProps = (state, ownProps) => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

export const FilterByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterBy);
