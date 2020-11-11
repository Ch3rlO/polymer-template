import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import {
  setPassiveTouchGestures,
  setRootPath,
} from '@polymer/polymer/lib/utils/settings.js'
import '@polymer/app-route/app-location.js'
import '@polymer/app-route/app-route.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-selector/iron-selector.js'
import '@polymer/paper-icon-button/paper-icon-button.js'
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js'
import '@polymer/app-layout/app-drawer/app-drawer.js'
import '@polymer/app-layout/app-scroll-effects/app-scroll-effects.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js'
import '@polymer/app-layout/app-toolbar/app-toolbar.js'
import '@polymer/app-layout/demo/sample-content.js'

import { routeGenerate, routes } from '../routes.js'

// Widget - [side-bar-widget]
import '~Widgets/Nav/SideNavBar.js'

setPassiveTouchGestures(true)
setRootPath(MyAppGlobals.rootPath)

class RootLayout extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          --app-primary-color: #4285f4;
          --app-secondary-color: black;

          display: block;
        }
        mx-4 {
          margin-left: 2rem;
          margin-right: 2rem;
        }
      </style>
      <app-location route="{{route}}" url-space-regex="^[[rootPath]]">
      </app-location>
      <app-drawer-layout>
        <app-drawer slot="drawer">
          <app-toolbar>IQ ONLINE TEMPLATE</app-toolbar>
          <iron-selector
            selected="[[page]]"
            attr-for-selected="name"
            class="drawer-list"
            role="navigation"
          >
        <side-nav-bar-layout></side-nav-bar-layout>
        </app-drawer>
        <app-header-layout>
          <app-header slot="header" reveals effects="waterfall">
            <app-toolbar>
              <paper-icon-button icon="menu" drawer-toggle></paper-icon-button>
              <div main-title>Title</div>
            </app-toolbar>
          </app-header>
          <app-route
            route="{{route}}"
            pattern="[[rootPath]]:page"
            data="{{routeData}}"
            tail="{{subroute}}"
          >
          </app-route>

          <iron-pages selected="[[page]]" attr-for-selected="name" role="main">
            ${html(
              routes.map(
                (link) =>
                  `<${link.name}-page name="${link.name}"></${link.name}-page>`
              )
            )}
            <not-found-page name="not-found"></not-found-page>
          </iron-pages>
        </app-header-layout>
      </app-drawer-layout>
    `
  }

  static get properties() {
    return {
      page: {
        type: String,
        reflectToAttribute: true,
        observer: '_pageChanged',
      },
      links: {
        type: Array,
        value: () => routes,
      },
      routeData: Object,
      subroute: Object,
    }
  }

  static get observers() {
    return ['_routePageChanged(routeData.page)']
  }

  _routePageChanged(page) {
    if (page) {
      const route = routes.find((link) => link.page === page) || 'not-found'
      this.page = route
    } else this.page = 'home'
  }

  _pageChanged(page) {
    routeGenerate(page)
  }
}

window.customElements.define('my-app', RootLayout)
