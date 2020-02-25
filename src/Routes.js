import React, { lazy, Suspense } from 'react';
import PropTypes from 'prop-types';
import { Switch, Route, Redirect } from 'react-router-dom';

import PageLoader from './components/ui/PageLoader';
// Components
const Home = lazy(() => import('./pages/Home'));
const NewsDetailPage = lazy(() => import('./pages/NewsDetailPage'));

const Routes = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/post/:id" component={NewsDetailPage} />
        <Redirect to="/" />
      </Switch>
    </Suspense>
  );
};

Routes.propTypes = {
  location: PropTypes.object, // React Router Passed Props
};

export default Routes;
