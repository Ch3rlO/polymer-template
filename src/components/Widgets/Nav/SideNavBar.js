import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

// Polymer components - 🚀
import '@polymer/iron-list/iron-list.js'

// Routes - 👨‍✈️
import { routes } from '~src/routes.js'

class SideBar extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          height: 100vh;
          display: flex;
          flex-direction: column;
        }

        iron-list {
          flex: 1;
        }

        #items > ::slotted(*) {
          position: unset !important;
        }

        .link {
          color: black;
          text-decoration: none;
          font-size: 1rem;
          padding: 0rem 1rem;
          transition: 0.3s all;
          border-radius: 0px 15px 15px 0px;
          display: block;
          position: unset !important;
        }
        .link:hover,
        .active {
          color: white;
          background: black;
          padding: 1rem 1rem;
        }
      </style>
      <iron-list items="[[links]]" as="link">
        <template>
          <style></style>
          <a
            name="[[link.name]]"
            href="[[rootPath]][[link.path]]"
            class$="link {{isCurrentPath(link.iso)}}"
            >[[link.title]]</a
          >
        </template>
      </iron-list>
    `
  }

  static get properties() {
    return {
      links: {
        type: Array,
        value: () => routes,
      },
    }
  }

  isCurrentPath(path) {
    const { pathname } = window.location
    return pathname.includes(path) ? 'active' : ''
  }
}

window.customElements.define('side-nav-bar-layout', SideBar)
