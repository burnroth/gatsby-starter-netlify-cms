const shell = require('shelljs')
const fs = require('fs')

const fileArray = shell.ls('./*')

console.log(fileArray)

fileArray.forEach(name => {
  fs.rename(name, name.replace('icons8-', ''), err => {
    console.log('fan!' + err)
  })
})

console.log(fileArray)
