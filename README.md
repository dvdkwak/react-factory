# Welcome to React-factory!
The awesome construcion-area to start building, testing and publishing your React components!
## Installation
Download the repository from [github](https://github.com/dvdkwak/react-factory).

Install all needed dependecies.
```bash
yarn install
```
## Basic Usage
Start the development server
```bash
yarn storiebooks
```
1. Build a component in the components folder.
2. Create a new story for that component
4. build the component
```bash
yarn build-[name of your component]
```
4. Creating a new command to build the component
```bash
./node_modules/.bin/babel path/to/your/component --out-file path/to/where/you/want/the/dist-version
```
## Making npm modules from your compononents
first navigate to your component with terminal
```bash
cd components/yourComponent
```

then initialize as npm package
```bash
npm init
```

To install the package into an other project use
```bash
yarn add /path/to/component/package.json