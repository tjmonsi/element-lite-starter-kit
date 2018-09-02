const template = (html, self) => function () {
  const { close } = this;
  return html`
    <aside class="sidebar" @click="${close.bind(this)}">
      <h1 class="title">
        Element Lite Starter Kit
      </h1>
      <div class="spacer">
      </div>
      <navigation-loader>
        <side-navigation @close-sidebar="${close.bind(this)}">
        </side-navigation>
      </navigation-loader>
    </aside>
  `;
}.bind(self)();

export { template };
