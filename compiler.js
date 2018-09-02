const fs = require('fs');
const configFile = './frontend.config.js';
const { resolve, relative } = require('path');
const watch = process.argv.find(item => item === '--watch');
const src = resolve(__dirname, './src');
const target = resolve(__dirname, 'src/utils');
const dest = resolve(__dirname, 'public');

const checkDirectorySync = (directory) => {
  try {
    fs.statSync(directory);
  } catch (e) {
    fs.mkdirSync(directory);
  }
};

const fragmentBuild = () => {
  console.log('building fragments');
  const { fragments, routes } = require(configFile);
  const lazyLoad = [];
  routes.forEach(route => {
    lazyLoad.push(`'${route.route}': () => import('${relative(target, resolve(__dirname, fragments[route.page]))}')`);
  });
  const string = `const fragments = {\n  ${lazyLoad.join(',\n  ')}\n};\nexport { fragments };`;
  checkDirectorySync(src);
  checkDirectorySync(target);
  fs.writeFileSync(resolve(target, 'fragments.js'), string.trim() + '\n', 'utf-8');
};

const manifestBuild = () => {
  console.log('building manifest.json');
  const { app, theme } = require(configFile);
  const { title: name, shortName: short_name, startUrl: start_url, display, orientation, scope } = app;
  const { icons, themeColor: theme_color, backgroundColor: background_color } = theme;
  const manifest = {
    name,
    short_name,
    icons,
    start_url,
    background_color,
    display,
    orientation,
    scope,
    theme_color
  };
  checkDirectorySync(resolve(dest));
  fs.writeFileSync(resolve(dest, 'manifest.json'), JSON.stringify(manifest), 'utf8');
};

const build = () => {
  fragmentBuild();
  manifestBuild();
};

build();
if (watch) fs.watch(resolve(__dirname, configFile), {}, build);
