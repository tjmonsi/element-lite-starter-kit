const template = (html, self) => html`
  <div>
    <slot></slot>
  </div>

  <button id="prevBtn" @click="${self.previous.bind(self)}">&#x276E;</button>
<button id="nextBtn" @click="${self.next.bind(self)}">&#x276F;</button>
`;

export { template };
