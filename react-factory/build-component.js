/**
This file is the automation to build the component ready for production
*/

// setting the fs var and the to be removed dir
var fs = require('fs');
var del = require('del');
var colors = require('colors');
var component = process.argv[2];
component = component[0].toUpperCase() + component.slice(1);
var dir = './components/' + component;
var dist = dir + '/dist';
var story = './stories/' + component + '.stories.js';
let packagejson = fs.readFileSync('./package.json', 'utf-8');
let packagejsondata = JSON.parse(packagejson);
const { exec } = require("child_process");
const minify = require('@node-minify/core');
const cleanCSS = require('@node-minify/clean-css');


// checking if the component does exist or not, if not stop script
if(fs.existsSync(dir)) {
  console.log(`Found the component "${component}" located at "${dir}"\nNow removing the component...`.bgGreen);
} else {
  console.log(`Component "${component}" supposedly located at: "${dir}" did not exist...`.bgRed);
  return;
}


// First check if the build folder already exists and if exists remove it and it's contents
if(fs.existsSync(dist)) {
  del(dist);
  console.log(`existing ${dist} has been removed!`.bgGreen);
} else {
  console.log(`The component ${component} has not been build before yet...`.bgGreen);
}


// Compiling the called component into the 'dist' folder of the component
exec(`./node_modules/.bin/babel components/${component} --presets @babel/react,@babel/preset-env --out-file components/${component}/dist/index.js`, {cwd: `./`}, (error, stdout, stderr) => {
  if(error) {
    console.log(`error: ${error.message}`);
    return;
  }
  if(stderr) {
    console.log(`stderr: ${stderr.message}`);
    return;
  }
  console.log(`The package should have been build now!`.bgGreen);
  console.log(`${stdout}`);
});


// compiling the css into the 'dist' folder
// this method is delayed a little to first let the exec do it's work
setTimeout( function() {
  minify({
    compressor: cleanCSS,
    input: `${dir}/${component}.css`,
    output: `${dist}/${component}.css`,
    callback: function(err, min) {
      if(err) {
        console.log(`error: ${err}`.bgRed);
      } else {
        console.log(`${dir}/${component}.css has been succesfully compiled!`.bgGreen);
      }
    }
  });
}, 1000 );