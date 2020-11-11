import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';

class SearchInput extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>
      <paper-input-container>
        <label slot="label">[[label]]</label>
        <iron-input slot="input">
          <input on-keyup="searchAction" class="my-input" />
        </iron-input>
      </paper-input-container>
    `;
  }

  static get properties() {
    return {
      label: {
        type: String,
        value: () => 'Search',
      },
      action: {
        type: Function,
        value: () => () => ({}),
      },
      text: {
        type: String,
        value: () => '',
        notify: true,
      },
    };
  }

  searchAction() {
    this.action(this.text);
  }
}

window.customElements.define('search-input', SearchInput);
