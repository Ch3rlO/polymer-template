import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '@polymer/paper-input/paper-input.js'

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
          <input
            id="search-input-text"
            class="my-input"
            placeholder="[[placeholder]]"
            value="{{value::input}}"
            on-keyup="searchAction"
          />
        </iron-input>
      </paper-input-container>
    `
  }

  static get properties() {
    return {
      label: {
        type: String,
        value: () => 'Search',
      },
      placeholder: {
        type: String,
        value: () => 'Are you looking for something !',
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
    }
  }

  searchAction() {
    console.log({ a: this.action })
    this.action({ text: this.inputValue('search-input-text').value })
  }

  inputValue(id) {
    return this.shadowRoot.getElementById(id)
  }
}

window.customElements.define('search-input', SearchInput)
