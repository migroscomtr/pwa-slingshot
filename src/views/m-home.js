import { html } from '@polymer/lit-element';
import { PageViewElement } from '../page-view-element.js';

import { connect } from 'pwa-helpers/connect-mixin.js';

// This element is connected to the Redux store.
import { store } from '../store.js';

// We are lazy loading its reducer.
// import productReducer from '../reducers/product.js';

// store.addReducers({
//   productReducer
// });

// These are the shared styles needed by this element.
import { SharedStyles } from '../components/shared/shared-styles.js';

class MHome extends connect(store)(PageViewElement) {
  render() {
    return html`
      ${SharedStyles}
      <style>
      :host {
        display: flex;
        /* Import theme variables */
      }
      section {
        padding: 20px 5px;
        display: grid;
      }
      </style>
      <section>
        HOME
      </section>
    `;
  }

  static get properties() { return {
    // _products: { type: Object }
  }}

  // Call async actions here for set data
  firstUpdated() {
    
  }

  // This is called every time something is updated in the store.
  _stateChanged(state) {

  }
}

window.customElements.define('m-home', MHome);
