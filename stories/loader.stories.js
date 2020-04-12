import React from 'react';
import YinYang from '../components/loader/YinYang';

// creating the storybook for loaders
export default {
  title: 'Loader',
};

// creating the YinYang story and giving the right storyname.
export const loader_YinYang = () => <YinYang />;
loader_YinYang.story = {
  name: 'YinYang',
};

