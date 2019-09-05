import { connect } from 'react-redux';
import { SortBy } from '../../../components/atoms/SortBy';

export const mapStateToProps = (state, ownProps) => ({});

export const mapDispatchToProps = (dispatch, ownProps) => ({});

export const SortByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortBy);
