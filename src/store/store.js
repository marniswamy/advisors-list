import { createStore, compose } from 'redux';
import { persistStore } from 'redux-persist';
import { advisorsListReducer } from "../reducers/advisorsListReducer"

// Store configuration
function configureStore() {
    const enhancer = compose(window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    const store = createStore(
        advisorsListReducer,
        enhancer
    );
    persistStore(store);

    return store;
}

export default configureStore();