import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Media } from './';

import { ImgBox } from '../ImgBox';
import DummyImg from '../ImgBox/imgs/dummy.png';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Media/Media',
  component: Media,
} satisfies Meta<typeof Media>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Example: Story = {
  args: {
    media: <ImgBox img={DummyImg} size="large" />,
    title: '마션',
    description: '앤디 위어',
  },
};
