const shell = require('shelljs');

const fileArray = shell.ls('./*')

console.log(fileArray)