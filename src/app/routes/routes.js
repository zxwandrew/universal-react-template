import CoreLayout from "../layouts/CoreLayout";
import HomeView from "../pages/HomeView";
import AboutPage from "../pages/AboutPage";

const routes = {
  path: '',
  component: CoreLayout,
  childRoutes: [
    {
      path: '/',
      component: HomeView
    },{
      path: '/about',
      component: AboutPage
    }
  ]
}

export { routes };
