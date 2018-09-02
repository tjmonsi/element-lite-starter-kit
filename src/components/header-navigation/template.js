const template = (html, self) => function () {
  const { navigation, user, logout } = this;
  return html`
    <nav class="header-navigation">
      <ul class="navigation-list">
        ${navigation.map(i => html`
          <li class="navigation-item">
            <a href="${i.href}" class="navigation-anchor">
              ${i.label}
            </a>
          </li>
        `)}
        ${user ? html`
          <li class="navigation-item">
            <a class="navigation-anchor" on-click=${logout.bind(this)}>
              Logout
            </a>
          </li>
        ` : ''}
      </ul>
    </nav>
  `;
}.bind(self)();

export { template };
