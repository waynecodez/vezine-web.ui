import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
	title: 'UI/Button',
	component: Button,
	tags: ['autodocs'],
	argTypes: {
		loading: { control: 'boolean' },
		size: { control: 'radio', options: ['sm', 'md', 'lg'] }
	}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Large: Story = {
	render: ({ ...args }) => {
		return <Button {...args} />;
	},
	args: {
		size: 'lg',
		label: 'Large'
	}
};

export const Medium: Story = {
	render: ({ ...args }) => {
		return <Button {...args} />;
	},
	args: {
		size: 'md',
		label: 'Medium'
	}
};

export const Small: Story = {
	render: ({ ...args }) => {
		return <Button {...args} />;
	},
	args: {
		size: 'sm',
		label: 'Small'
	}
};

export const Loading: Story = {
	render: ({ ...args }) => {
		return <Button {...args} />;
	},
	args: {
		label: 'Loading',
		loading: true,
		spinnerColor: 'border-green-600',
		size: 'lg'
	}
};
