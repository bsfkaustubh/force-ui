import Alert from './alert';
import { fn } from '@storybook/test';
import { Plus } from 'lucide-react';
import type { Meta, StoryObj } from '@storybook/react';

// Alert component story configuration
const meta: Meta = {
	title: 'Atoms/Alert',
	component: Alert,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		variant: {
			control: 'select',
		},
		theme: {
			control: 'select',
		},
		design: {
			control: 'select',
		},
		title: {
			control: 'text',
		},
		content: {
			control: 'text',
		},
	},
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof Alert>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Neutral: Story = {
	args: {
		variant: 'neutral',
		onClose: fn(),
	},
};

export const Info: Story = {
	args: {
		variant: 'info',
		onClose: fn(),
	},
};

export const Warning: Story = {
	args: {
		variant: 'warning',
		onClose: fn(),
	},
};

export const Error: Story = {
	args: {
		variant: 'error',
		onClose: fn(),
	},
};

export const Success: Story = {
	args: {
		variant: 'success',
		onClose: fn(),
	},
};

export const Stack: Story = {
	args: {
		variant: 'info',
		design: 'stack',
		onClose: fn(),
	},
};

export const Dark: Story = {
	args: {
		variant: 'error',
		theme: 'dark',
		onClose: fn(),
	},
};

export const WithAction: Story = {
	args: {
		onClose: fn(),
		variant: 'info',
		design: 'stack',
		action: {
			label: 'My Action',
			onClick: () => {},
			type: 'link',
		},
	},
};

export const WithCustomIcon: Story = {
	args: {
		onClose: fn(),
		variant: 'info',
		icon: <Plus />,
		action: {
			label: 'My Action',
			onClick: () => {},
			type: 'link',
		},
	},
};
