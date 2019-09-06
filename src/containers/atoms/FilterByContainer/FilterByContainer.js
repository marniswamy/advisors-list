import { connect } from 'react-redux';
import { FilterBy } from '../../../components/atoms/FilterBy';
import { filterByAction } from '../../../actions/filterByAction';

export const mapStateToProps = (state) => ({
  value: state.filterBy
});

export const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(
      filterByAction(event.target.value)
    )
  }
});

export const FilterByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterBy);
