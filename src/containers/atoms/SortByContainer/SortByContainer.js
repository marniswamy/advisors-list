import { connect } from 'react-redux';
import { Selector } from '../../../components/atoms/Selector';
import { sortByAction } from '../../../actions/sortByAction';

export const mapStateToProps = (state, ownProps) => ({
  value: state.selectedSorting
});

export const mapDispatchToProps = (dispatch, ownProps) => ({
  handleChange: (event) => {
    dispatch(
      sortByAction({
        selectedSorting: event.target.value
      })
    )
  }
});

export const SortByContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Selector);

SortByContainer.defaultProps = {
  label: 'By Ratings',
  options: [
    {
      label: 'High - Low',
      value: 0
    },
    {
      label: 'Low - High',
      value: 1
    }
  ]
}
