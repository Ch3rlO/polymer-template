import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'
import '@polymer/paper-card/paper-card.js'

class SearchButton extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
          padding: 10px 20px;
        }
      </style>
      <paper-card
        heading$="[[data.title]]"
        image="http://placehold.it/350x150/FFC107/000000"
        alt$="[[data.title]]"
      >
        <div class="card-content">[[data.description]]</div>
      </paper-card>
    `
  }

  static get properties() {
    return {
      data: {
        type: Object,
      },
    }
  }
}

window.customElements.define('search-button', SearchButton)
