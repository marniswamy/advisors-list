import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/store';
import { AdvisorsListPage } from '../pages/AdvisorsListPage/AdvisorsListPage';

const App = () => {
  return (
    <Provider store={store}>
      <AdvisorsListPage />
    </Provider>
  );
};

export default App;
