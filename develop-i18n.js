const language = process.argv[2];
const shell = require('shelljs');
const fileArray = shell.ls(`gatsby-config-${language}.js`); 

shell.cp(fileArray[0], 'gatsby-config.js');
shell.exec('npm run clean && gatsby develop');