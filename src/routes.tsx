import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';

const Routes: React.FC = () => {
  const DashboardView = lazy(() => import('./views/Dashboard'));
  const PostView = lazy(() => import('./views/Post'));

  return (
    <Suspense fallback={<p>Loading</p>}>
      <Switch>
        <Route path="/" exact component={DashboardView} />
        <Route path="/post/:postId" exact component={PostView} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
