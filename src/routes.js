/**
 * All your routes should be registered here 🤟
 * Object DESCRIPTION
 *    - path    => with out the '/' ()
 *    - name    => your page name (should be unique)
 *    - iso     => to check what route you're currently in 🏁
 *    - page    => the page name (that should be placed in pages)
 *    - title   => the title for your page that's appear to the user (you could use iso to support multi language projects)
 *    - visible => if you want the user to see it could be e
 *
 */

export const routes = [
  {
    path: '',
    name: 'home',
    iso: 'home',
    page: 'home',
    title: 'Home',
  },
]

export const routeGenerate = (routeName = 'not-found') =>
  import(`./pages/${routeName}.js`)
