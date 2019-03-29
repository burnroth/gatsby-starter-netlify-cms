const language = process.argv[2];
const shell = require('shelljs');
const fileArray = shell.ls(`gatsby-config-${language}.js`); 
const configFile = `src/pages/${language}/admin/config.yml`; // copies the country specific config file

shell.cp(fileArray[0], 'gatsby-config.js');
shell.cp(configFile, 'static/admin');             // copies the config file from src to the static folder so it can be found by the cms
shell.exec('npm run clean && gatsby develop');