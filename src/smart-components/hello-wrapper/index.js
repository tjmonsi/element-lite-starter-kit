const { HTMLElement, customElements } = window;

class Component extends HTMLElement {
  static get is () { return 'hello-wrapper'; }

  connectedCallback () {
    if (super.connectedCallback) super.connectedCallback();
    setTimeout(() => {
      this.firstElementChild.propertyOne = 'World';
    }, 1000);
  }
}

if (!customElements.get(Component.is)) {
  customElements.define(Component.is, Component);
} else {
  console.warn(`${Component.is} is already defined somewhere. Please check your code.`);
}
