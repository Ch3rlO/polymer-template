import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import { connect } from 'pwa-helpers';
import store from '../store/Post/index';
import { addPost } from '../store/Post/action.js';

/**
 *
 * Components
 * Cards : [post-card]
 * Inputs : [search-input]
 *
 */
import '~Utilities/Cards/Post.js';
import '~Utilities/Inputs/Search.js';

class Home extends connect(store)(PolymerElement) {
  constructor() {
    super();
    this.posts = [];
  }

  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: repeat(3, 1fr);
          grid-column-gap: 0px;
          grid-row-gap: 0px;
        }
      </style>
      <div class="flex flex-wrap justify-start">
        <div class="">
          <search-input></search-input>
        </div>
        <div class="grid">
          <template is="dom-repeat" items="[[posts]]">
            <post-card data="[[item]]"></post-card>
          </template>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {};
  }

  stateChanged(state) {
    this.posts = state.posts;
  }

  addNewPost() {
    store.dispatch(
      addPost({
        title: 'ADDEDEDED',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, molestiae quas officia sit eius consectetur velit nobis atque voluptas ducimus ab, quibusdam sequi quasi incidunt, debitis a dolore modi. Veritatis?',
      })
    );
  }
}

window.customElements.define('home-page', Home);
