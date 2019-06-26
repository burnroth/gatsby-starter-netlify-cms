const language = process.argv[2];
const shell = require('shelljs');
const fileArray = shell.ls(`gatsby-config-${language}.js`);
const translations = shell.ls(`./assets/translations/${language}/lang.json`);

shell.cp(translations[0], './assets/translations/lang.json');
shell.cp(fileArray[0], 'gatsby-config.js');
shell.exec('gatsby develop');