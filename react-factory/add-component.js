/**
This file is the automation to create a new component within the react-factory
This will add the folowing:
- component folder in which the component lives
- component index.js which is the heart of the component
- component css file which is the first styling sheet for the component
- story file with the basic settings to show your component in the storybook
- will ad a build function so you can build the component with 'yarn build-[componentName]'
*/

// getting the name the component should get
let componentName = process.argv[2];

// counting the number of words in the given name
let numberOfWords = componentName.split(" ").length;

// if the component is not one word, return an error
if(numberOfWords > 1) {
  let error = new Error(`The name of the component: \"${componentName}\" exists of too many words, only one should be given.`);
  console.log(error);
  process.exit();
}

// Capitalizing the component name (this has to be done, else storybook won't work)
componentName = componentName[0].toUpperCase() + componentName.slice(1);

// setting the variables needed to create all files and commands
var fs = require('fs');
var colors = require('colors');
let dir = './components/' + componentName;
let jsName = dir + '/' + componentName + '.js';
let cssName = dir + '/' + componentName + '.css';
let storyName = './stories/' + componentName + '.stories.js';
let packagejson = fs.readFileSync('./package.json', 'utf-8');
let packagejsondata = JSON.parse(packagejson);



// _______ CONTENT OF COMPONENT.JS ______
var jsContent = `\
import React from 'react';
import './${componentName}.css';

/**
 * Hi! This component has been generated for you by the react-factory,
 * You can view this component by starting the story book with the command:
 * 
 *  \/\/--------------\\\\
 * \|\| yarn storybook \|\|
 *  \\\\--------------\/\/
 * 
 * Or build this component for production by using the command:
 * 
 *  \/\/--------------------------\\\\
 * \|\| yarn build_[componentName] \|\|
 *  \\\\--------------------------\/\/
 * 
 * ( yarn build_${componentName} )
 * 
 * Now you are ready to start! Happy Coding!
 */

const ${componentName} = () => {
  return(
    <p class="${componentName}">I am the ${componentName}-component!</p>
  );
}

export default ${componentName};
`;
// ______ END OF COMPONENT.JS ______


// ______ CONTENT OF COMPONENT.CSS ______
var cssContent = `\
/**
 * Hi! This is the css which has been generated for you by the react-factory,
 * In here you can start styling your super awesome component!
 * Don't forget you can start live editing with the following:
 * 
 *  \/\/--------------\\\\
 * \|\| yarn storybook \|\|
 *  \\\\--------------\/\/
 * 
 * Now you are ready to start! Happy Coding!
 */

.${componentName} {
  display: block;
  background: red;
  color: white;
  font-size: 42px;
  font-weight: 600;
  text-align: center;
}
`;
// ______ END OF COMPONENT.CSS ______


// ______ CONTENT OF COMPONENT.STORIES.JS ______
var storyContent = `\
import React from 'react';
import ${componentName} from './../components/${componentName}/${componentName}';

/**
 * Hi! This story has been generated for you by the react-factory,
 * You can start the storybook by the following command:
 * 
 *  \/\/--------------\\\\
 * \|\| yarn storybook \|\|
 *  \\\\--------------\/\/
 * 
 * Now you are ready to start! Happy Coding!
 */

// This is the title of your component
export default {
  title: '${componentName}'
};

// this is the first state of your component
export const ToStorybook = () => <${componentName} />;

// the name of the current show state
ToStorybook.story = {
  name: 'default'
};
`;
// ______ END OF COMPONENT.STORIES.JS ______



// creating the DIRECTORY in the component folder
if (!fs.existsSync(dir)){
  fs.mkdirSync(dir);
  console.log(`Created the component ${dir}!`.bgGreen);
} else {
  let error = new Error(`
    The folder ${componentName} seems to already exist...
    Try to remove this folder and it's contents first!
  `);
  console.log(error.bgRed);
}

// In the folder we add a [componentName].js JAVASCRIPT
if(!fs.existsSync(jsName)) {
  fs.writeFileSync(jsName, jsContent);
  console.log(`Generated the file ${componentName}.js!`.bgGreen);
} else {
  console.log(`${componentName}.js was already in the folder...`.bgRed);
}

// In the folder we add a [componentName].css STYLESHEET
if(!fs.existsSync(cssName)) {
  fs.writeFileSync(cssName, cssContent);
  console.log(`Generated the file ${componentName}.css!`.bgGreen);
} else {
  console.log(`${componentName}.css was already in the folder...`.bgRed);
}

// creating a new story for the component STORY
if(!fs.existsSync(storyName)) {
  fs.writeFileSync(storyName, storyContent);
  console.log(`Wrote the start of your story in ${componentName}.stories.js!`.bgGreen);
} else {
  console.log(`${componentName}.stories.js was already in the stories folder...`.bgRed);
}

// Adapting the package.json file to add a build function BUILD
// ad a new script to the script
let packagejsoncommand = `./node_modules/.bin/babel components/${componentName} --out-file components/${componentName}/dist/index.js`;
packagejsondata.scripts["build_" + componentName] = packagejsoncommand;
// reverting the data to a string to write the file
let packagejsonnew = JSON.stringify(packagejsondata, null, 2);
// overwriting the old package.json with the new data
fs.writeFileSync('./package.json', packagejsonnew);
console.log(`The function \"build_${componentName}\" has been added to the scripts! use it to export your component!`.bgGreen);