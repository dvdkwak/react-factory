import React from 'react';
import DigitalClock from './../components/clock/DigitalClock';

// creating the category (storybook)
export default {
  title: 'Clock'
}

// creating a new story in our book for DigitalClock,
// and assigning the right name to it.
export const clock_1 = () => <DigitalClock />;
clock_1.story = {
  name: 'DigitalClock'
}