import * as React from 'react';
import Game from 'app/views/game/Game';
import Welcome from 'app/views/welcome/Welcome';
import { Redirect, Route, RouteComponentProps, Switch } from 'react-router-dom';
import { useStoreContext } from 'store';

export const ROUTES_URLS = {
  WELCOME_PATH: '/welcome',
  GAME_PATH: '/game',
};

export const routes: IAppRoute[] = [
  {
    component: Welcome,
    isProtected: false,
    path: ROUTES_URLS.WELCOME_PATH,
    slug: 'WELCOME_SCREEN',
    title: 'Welcome',
  },
  {
    component: Game,
    isProtected: true,
    path: ROUTES_URLS.GAME_PATH,
    slug: 'GAME_SCREEN',
    title: 'Game',
  },
];

interface IProtectedRoute {
  Component: React.FC<RouteComponentProps>;
  path: string | string[];
  exact?: boolean;
}

const ProtectedRoute: React.FC<IProtectedRoute> = ({ Component, path, exact = false }) => {
  const { User } = useStoreContext();
  const isAuthorized = User.isUserLogged();
  console.log('isAuthorized', isAuthorized);
  const message = 'Routing to Welcome Screen';
  return (
    <Route
      exact={exact}
      path={path}
      render={(props: RouteComponentProps) => {
        return isAuthorized ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: ROUTES_URLS.WELCOME_PATH,
              state: {
                message,
                requestedPath: path,
              },
            }}
          />
        );
      }}
    />
  );
};

export const AppRouter: React.FC = () => (
  <Switch>
    {console.log('Here')}
    {routes.map((route: IAppRoute) => {
      return route.isProtected ? (
        <ProtectedRoute key={route.slug} exact path={route.path} Component={route.component} />
      ) : (
        <Route key={route.slug} exact path={route.path} component={route.component} />
      );
    })}
    <Route component={() => <Redirect to={ROUTES_URLS.WELCOME_PATH} />} />
  </Switch>
);
