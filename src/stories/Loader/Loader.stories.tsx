import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'UI/Loader',
	component: Loader,
	tags: ['autodocs'],
	argTypes: {
		size: { select: 'radio', options: ['sm', 'md', 'lg'] },
		color: { control: { type: 'select' }, options: ['brand', 'accent', 'white', 'black'] }
	}
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
	render: ({ ...args }) => {
		return <Loader {...args} />;
	},
	args: {
		type: 'spinner',
		color: 'white',
		size: 'lg'
	}
};
