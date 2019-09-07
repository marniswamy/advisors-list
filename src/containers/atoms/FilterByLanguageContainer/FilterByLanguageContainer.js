import { connect } from 'react-redux';
import { Selector } from '../../../components/atoms/Selector';
import { filterByAction } from '../../../actions/filterByAction';
import { languageOptionsSelector } from '../../../selectors/languageOptionsSelector';

export const mapStateToProps = (state) => ({
  value: state.selectedLangauge,
  options: languageOptionsSelector(state)
});

export const mapDispatchToProps = (dispatch) => ({
  handleChange: (event) => {
    dispatch(
      filterByAction({
        selectedLangauge: event.target.value
      })
    )
  }
});

export const FilterByLanguageContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Selector);

FilterByLanguageContainer.defaultProps = {
  label: 'By Language',
  options: []
}

