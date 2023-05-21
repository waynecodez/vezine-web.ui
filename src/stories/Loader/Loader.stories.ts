import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'UI/Loader',
	component: Loader,
	tags: ['autodocs']
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Pill: Story = {
	args: {
		type: 'pill'
	}
};

export const Spinner: Story = {
	args: {
		type: 'spinner',
		color: 'red-500',
		size: 'lg'
	}
};
