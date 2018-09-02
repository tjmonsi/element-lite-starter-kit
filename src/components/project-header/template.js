const template = (html, self) => function () {
  const { openSidebar } = this;
  return html`
    <header class="header">
      <button class="button show-on-mobile-only" @click=${openSidebar} aria-label="Open Sidebar">
        <svg class="icon" viewBox="0 0 24 24">
          <path d="M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z" />
        </svg>
      </button>
      <h1 class="title">
        Element-Lite Starter Kit
      </h1>
      <div class="spacer">
      </div>
      <navigation-loader>
        <header-navigation class="hide-on-mobile">
        </header-navigation>
      </navigation-loader>
    </header>
  `;
}.bind(self)();

export { template };
