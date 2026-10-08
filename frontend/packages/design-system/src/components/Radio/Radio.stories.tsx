import type { Meta, StoryObj } from '@storybook/react-webpack5';

import { Radio } from './';

const meta = {
  title: 'Radio/Radio',
  component: Radio,
  args: {
    'aria-label': '책 선택',
  },
} satisfies Meta<typeof Radio>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Unchecked: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const WithLabel: Story = {
  args: {
    children: 'With Label',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Boxed: Story = {
  args: {
    'aria-label': undefined,
  },
  render: () => (
    <div style={{ display: 'flex', width: 310, flexDirection: 'column' }}>
      <Radio name="radioBoxed" value="want-to-read" variant="boxed">
        Label1
      </Radio>
      <Radio defaultChecked name="radioBoxed" value="reading" variant="boxed">
        Label2
      </Radio>
    </div>
  ),
};

export const Group: Story = {
  args: {
    'aria-label': undefined,
  },
  render: () => (
    <div style={{ display: 'flex', gap: 16 }}>
      <Radio defaultChecked name="radioGroup" value="first">
        Label1
      </Radio>
      <Radio name="radioGroup" value="second">
        Label2
      </Radio>
    </div>
  ),
};
