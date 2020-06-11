# Welcome to React-factory!
### ~Wil it soon be called React-Dojo!?~
The awesome construcion-area to start building, testing and publishing your React components!
## Installation
Download the repository from [github](https://github.com/dvdkwak/react-factory).

Install all needed dependecies.
```bash
yarn install
```
## Basic Usage
To create your first component use the following command:
```bash
yarn add_component [name]
```
This will generate a folder in the components folder with the name given.
In the folder there will be generated the following:
1. a javascript file with some basic react code
2. a css file with some basic styling
3. package.json to be able to import the project elsewhere

Further there is an automated build command to be able to build the package in the dist folder within your component folder. The package.json file also takes the file in the dist folder as the main file.
```bash
yarn build_component [name]
```
Lastly, a story is made in the stories folder for you to be able to live test your components with storybook. You can start storybook with the command:
```bash
yarn storybook
```
When you want to remove your component and all accolated files, use:
```bash
yarn remove_component [name]
```
## The future
For now the most important action on my list is testing the compatibility of react-factory with frameworks like react-app itself. I will try to import react-factory made components into a react-app in order to see if they are compatible.\
\
Next up is to make up a good name for this package to be able to give it a brand, but before that step I want to check in on compagnies to learn more about react development in general to "test" wether my philosophy is actually plausible.