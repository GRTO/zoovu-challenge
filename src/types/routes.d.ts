interface IAppRoute {
  component: Component;
  isExact?: boolean;
  isProtected: boolean;
  path: string | string[];
  slug: string;
  title: string;
  redirectTo?: string;
  routes?: RouteConfig[];
}
