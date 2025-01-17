import {
	startOfToday,
	startOfYesterday,
	startOfWeek,
	endOfWeek,
	startOfMonth,
	endOfMonth,
	subWeeks,
	subMonths,
} from 'date-fns';

import DatePicker from './datepicker';

export default {
	title: 'Atoms/DatePicker',
	component: DatePicker,
	parameters: {
		layout: 'centered',
	},
	tags: [ 'autodocs' ],
	argTypes: {
		selectionType: {
			control: 'select',
			options: [ 'single', 'range', 'multiple' ],
			description:
				'Defines the selection selectionType of the date picker: single, range, or multiple dates.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'single' },
			},
		},
		variant: {
			control: 'select',
			options: [ 'normal', 'dualdate', 'presets' ],
			description:
				'Defines the variant of the date picker: normal, dualdate, or presets.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'normal' },
			},
		},
		applyButtonText: {
			control: 'text',
			description: 'Text displayed on the Apply button.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Apply' },
			},
		},
		cancelButtonText: {
			control: 'text',
			description: 'Text displayed on the Cancel button.',
			table: {
				type: { summary: 'string' },
				defaultValue: { summary: 'Cancel' },
			},
		},
		showOutsideDays: {
			control: 'boolean',
			description: 'Show or hide days outside of the current month.',
			table: {
				type: { summary: 'boolean' },
				defaultValue: { summary: 'true' },
			},
		},
		presets: {
			control: 'object',
			description: 'Array of preset date ranges to display.',
			table: {
				type: { summary: 'array' },
				defaultValue: { summary: '[]' },
			},
		},
	},
	decorators: [
		( Story ) => (
			<div style={ { width: '100%', margin: '0 auto' } }>
				<Story />
			</div>
		),
	],
};

const Template = ( args ) => <DatePicker { ...args } />;

export const Default = Template.bind( {} );
Default.args = {
	selectionType: 'single',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
};

export const Range = Template.bind( {} );
Range.args = {
	selectionType: 'range',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
};

export const Multiple = Template.bind( {} );
Multiple.args = {
	selectionType: 'multiple',
	variant: 'normal',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
};

export const DualDate = Template.bind( {} );
DualDate.args = {
	selectionType: 'range',
	variant: 'dualdate',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
};

export const WithPresets = Template.bind( {} );
WithPresets.args = {
	selectionType: 'range',
	variant: 'presets',
	applyButtonText: 'Apply',
	cancelButtonText: 'Cancel',
	showOutsideDays: true,
	presets: [
		{
			label: 'Today',
			range: { from: startOfToday(), to: startOfToday() },
		},
		{
			label: 'Yesterday',
			range: { from: startOfYesterday(), to: startOfYesterday() },
		},
		{
			label: 'This Week',
			range: {
				from: startOfWeek( new Date(), { weekStartsOn: 1 } ),
				to: endOfWeek( new Date(), { weekStartsOn: 1 } ),
			},
		},
		{
			label: 'Last Week',
			range: {
				from: startOfWeek( subWeeks( new Date(), 1 ), { weekStartsOn: 1 } ),
				to: endOfWeek( subWeeks( new Date(), 1 ), { weekStartsOn: 1 } ),
			},
		},
		{
			label: 'This Month',
			range: {
				from: startOfMonth( new Date() ),
				to: endOfMonth( new Date() ),
			},
		},
		{
			label: 'Last Month',
			range: {
				from: startOfMonth( subMonths( new Date(), 1 ) ),
				to: endOfMonth( subMonths( new Date(), 1 ) ),
			},
		},
	],
};
