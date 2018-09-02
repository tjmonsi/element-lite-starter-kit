const template = (html, self) => function () {
  const { close } = this;
  return html`
    <aside class="sidebar">
      <h1 class="title">
        Element Lite Starter Kit
      </h1>
      <div class="spacer">
      </div>
      <navigation-loader>
        <side-navigation on-close-sidebar=${close.bind(this)}>
        </side-navigation>
      </navigation-loader>
    </aside>
  `;
}.bind(self)();

export { template };
