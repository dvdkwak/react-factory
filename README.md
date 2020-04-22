# Welcome to React-factory!
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

Further there will be an automated build command to be able to build the package in the dist folder within your component folder.
```bash
yarn build_[name]
```
Lastly, a story is made in the stories folder for you to be able to live test your components with storybook. You can start storybook with the command:
```bash
yarn storybook
```
When you want to remove your component:
```bash
yarn remove_component [name]
```