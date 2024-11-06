import { Meta, StoryFn } from '@storybook/react';
import Pagination, { PaginationProps } from './pagination';

// Meta Configuration
const meta: Meta<typeof Pagination> = {
	title: 'Molecules/Pagination',
	component: Pagination,
	subcomponents: {
		'Pagination.Content': Pagination.Content,
		'Pagination.Item': Pagination.Item,
		'Pagination.Previous': Pagination.Previous,
		'Pagination.Next': Pagination.Next,
		'Pagination.Ellipsis': Pagination.Ellipsis,
	} as Record<string, React.ComponentType<unknown>>,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		size: { control: { type: 'select' } },
		children: { control: false },
	},
};

export default meta;

// Template Function
const Template: StoryFn<PaginationProps> = ( args ) => (
	<Pagination { ...args }>
		<Pagination.Content>
			<Pagination.Previous />
			<Pagination.Item>1</Pagination.Item>
			<Pagination.Item>2</Pagination.Item>
			<Pagination.Item>3</Pagination.Item>
			<Pagination.Ellipsis />
			<Pagination.Item>7</Pagination.Item>
			<Pagination.Item>8</Pagination.Item>
			<Pagination.Item>9</Pagination.Item>
			<Pagination.Next />
		</Pagination.Content>
	</Pagination>
);

export const Basic = Template.bind( {} );
Basic.args = {
	size: 'md',
	disabled: false,
	className: '',
};

export const Small = Template.bind( {} );
Small.args = { size: 'sm', disabled: false };

export const Medium = Template.bind( {} );
Medium.args = { size: 'md', disabled: false };

export const Disabled = Template.bind( {} );
Disabled.args = { size: 'md', disabled: true };
