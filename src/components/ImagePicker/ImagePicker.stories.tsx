import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import ImagePicker  from './ImagePicker';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'ReactImagePickerPractical/ImagePicker',
  component: ImagePicker,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    title: { control: 'text' },
  },
} as ComponentMeta<typeof ImagePicker>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof ImagePicker> = (args) => <ImagePicker {...args} />;

export const one = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
one.args = {
  title: 'Pick Images',
};

export const two = Template.bind({});
two.args = {
  title: 'Pick Me!',
};
