import { connect } from 'react-redux';
import { Selector } from '../../../components/atoms/Selector';
import { filterByAction } from '../../../actions/filterByAction'

export const mapStateToProps = (state) => ({
  value: state.selectedStatus
});

export const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(
      filterByAction({
        selectedStatus: event.target.value
      })
    )
  }
});

export const FilterByStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Selector);

FilterByStatusContainer.defaultProps = {
  label: 'By Status',
  options: [
    {
      label: 'Active',
      value: 0
    },
    {
      label: 'Inactive',
      value: 1
    }
  ]
}
