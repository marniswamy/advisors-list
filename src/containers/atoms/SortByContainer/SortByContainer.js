import { connect } from 'react-redux';
import { SortBy } from '../../../components/atoms/SortBy';
import { sortByAction } from '../../../actions/sortByAction';

export const mapStateToProps = (state, ownProps) => ({
  value: state.sortBy
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: (event) => {
    dispatch(
      sortByAction(event.target.value)
    )
  }
});

export const SortByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SortBy);
