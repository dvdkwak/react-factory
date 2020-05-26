/**
 * This will remove a component from the project entirely USE WITH CAUTION!
 */

// setting the fs var and the to be removed dir
var fs = require('fs');
var del = require('del');
var colors = require('colors');
var component = process.argv[2];
component = component[0].toUpperCase() + component.slice(1);
var dir = './components/' + component;
var story = './stories/' + component + '.stories.js';
let packagejson = fs.readFileSync('./package.json', 'utf-8');
let packagejsondata = JSON.parse(packagejson);


// see if the DIRECTORY AND CONTENT exists or not
if(fs.existsSync(dir)) {
  del(dir);
  console.log(`${dir} has been removed!`.bgGreen);
  console.log(`${component}.css has been removed!`.bgGreen);
  console.log(`${component}.js has been removed!`.bgGreen);
  console.log(`The package.json has been removed!`.bgGreen);
} else {
  console.log(`The folder ${dir} did not seem to exist...`.bgRed);
}

// removing the STORY from this component
if(fs.existsSync(story)) {
  del(story);
  console.log(`${component}.stories.js has been removed!`.bgGreen);
} else {
  console.log(`The story ${component}.stories.js did not seem to exist...`.bgRed);
}