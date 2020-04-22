import React from 'react';
import HelloWorld from './../components/HelloWorld/HelloWorld';

/**
 * Hi! This story has been generated for you by the react-factory,
 * You can start the storybook by the following command:
 * 
 *  //--------------\\
 * || yarn storybook ||
 *  \\--------------//
 * 
 * Now you are ready to start! Happy Coding!
 */

// This is the title of your component
export default {
  title: 'HelloWorld'
};

// this is the first state of your component
export const ToStorybook = () => <HelloWorld />;

// the name of the current show state
ToStorybook.story = {
  name: 'default'
};
