import { TemplateLite } from '@littleq/element-lite/template-lite.js';
const { HTMLElement, customElements } = window;

class Component extends TemplateLite(HTMLElement) {
  static get is () { return 'navigation-loader'; }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    this._setNavigation([
      {
        label: 'Page 1',
        href: '/page-one'
      }
    ]);
  }

  template () {
    return `<slot></slot>`;
  }

  _setNavigation (navigation) {
    const navComponent = this.querySelector('header-navigation') || this.querySelector('side-navigation');
    if (navComponent) {
      navComponent.navigation = navigation;
    }
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
