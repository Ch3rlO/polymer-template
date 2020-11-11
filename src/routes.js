export const routes = [
  {
    path: '',
    name: 'home',
    iso: 'home',
    page: 'home',
    title: 'Home',
    visible: true,
  },
  {
    path: 'about-us',
    name: 'AboutUs',
    iso: 'about-us',
    page: 'about-us',
    title: 'About Us',
    visible: true,
  },
  {
    path: 'not-found',
    name: 'NotFound',
    iso: 'not-found',
    page: 'not-found',
    title: 'Not Found',
    visible: false,
  },
];

export const routeGenerate = (routeName = 'not-found') =>
  import(`./pages/${routeName}.js`);
