import './advisors-list-page.css';
import * as React from 'react';
import { Header } from '../../components/molecules/Header';
import { SortAndFilterByMenu } from '../../components/molecules/SortAndFilterByMenu';
import { AdvisorsListContainer } from '../../containers/molecules/AdvisorsListContainer/AdvisorsListContainer';

/**
 * AdvisorsListPage
 *
 * @param {*} props - a descriptions of what props is
 * @returns {*} a React Stateless Functional Component
 */
export const AdvisorsListPage = props => (
  <React.Fragment>
    <Header />
    <SortAndFilterByMenu />
    <AdvisorsListContainer />
  </React.Fragment>
);
