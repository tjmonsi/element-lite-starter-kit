const fragments = {
  '/': () => import('../pages/page-home/index.js'),
  '/this-link': () => import('../pages/page-one/index.js'),
  'no-page': () => import('../pages/page-not-found/index.js')
};
export { fragments };
