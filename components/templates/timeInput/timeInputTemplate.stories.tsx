import type { Meta, StoryObj } from '@storybook/react';
import TimeInput, { TimeInputTemplateProps } from './timeInputTemplate';
import mockTimeInputTemplateProps from './timeInputTemplate.mocks';

const meta = {
	title: 'templates/inputs/TimeInputTemplate',
	component: TimeInput,
	argTypes: {
		id: {
			name: 'ID',
			description: 'HTML ID attribute',
			control: {
				type: 'text'
			}
		},
		label: {
			name: 'Label',
			description: 'Label text',
			control: {
				type: 'text'
			}
		},
		value: {
			name: 'Value',
			description: 'Input value',
			control: {
				type: 'text'
			}
		},
		onChange: {
			table: {
				disable: true
			}
		},
		required: {
			name: 'Required',
			description: 'Required input',
			control: {
				type: 'boolean',
				defaultValue: true
			}
		}

	},
} satisfies Meta<typeof TimeInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: TimeInputTemplateProps = {
	...mockTimeInputTemplateProps.primary,
};

export const TimeInputTemplate: Story = {
	args
};
