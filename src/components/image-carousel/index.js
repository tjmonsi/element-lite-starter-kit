import { TemplateLite } from '@littleq/element-lite/template-lite.js';
import { ObserversLite } from '@littleq/element-lite/observers-lite.js';
import { render, html } from 'lit-html';
import { template } from './template.js';
import style from './style.styl';
const { HTMLElement, customElements } = window;

class Page extends TemplateLite(ObserversLite(HTMLElement)) {
  static get is () { return 'image-carousel'; }

  static get renderer () { return render; }

  static get properties () {
    return {
      selected: {
        type: Object,
        observer: '_selectedChanged'
      }
    };
  }

  template () {
    return html`<style>${style.toString()}</style>${template(html, this)}`;
  }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    this.shadowRoot.addEventListener('slotchange', this._resetSelected.bind(this));
    this._resetSelected();
  }

  _selectedChanged (selected, oldSelected) {
    if (oldSelected) oldSelected.removeAttribute('selected');
    if (selected) selected.setAttribute('selected', '');
  }

  _resetSelected () {
    if (!this.selected || this.selected.parentElement !== this) {
      this.selected = this.firstElementChild;
    }
  }

  previous () {
    const elem = this.selected && this.selected.previousElementSibling;
    if (elem) {
      this.selected = elem;
    }
  }

  next () {
    const elem = this.selected && this.selected.nextElementSibling;
    if (elem) {
      this.selected = elem;
    }
  }
}

if (!customElements.get(Page.is)) {
  customElements.define(Page.is, Page);
} else {
  console.warn(`${Page.is} is already defined somewhere. Please check your code.`);
}
