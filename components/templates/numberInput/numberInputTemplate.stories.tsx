import type { Meta, StoryObj } from '@storybook/react';
import NumberInput, { NumberInputTemplateProps } from './numberInputTemplate';
import mockNumberInputTemplateProps from './numberInputTemplate.mocks';

const meta = {
	title: 'templates/inputs/NumberInputTemplate',
	component: NumberInput,
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
				type: 'number',
				min: 0,
				max: 60,
				step: 1,
				defaultValue: 0
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
		},
		min: {
			name: 'Min',
			description: 'Minimum value',
			control: {
				type: 'number',
				defaultValue: 0,
				min: 0,
				step: 1
			}
		},
		max: {
			name: 'Min',
			description: 'Minimum value',
			control: {
				type: 'number',
				defaultValue: 0,
				min: 0,
				step: 1
			}
		}

	},
} satisfies Meta<typeof NumberInput>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: NumberInputTemplateProps = {
	...mockNumberInputTemplateProps.primary,
};

export const NumberInputTemplate: Story = {
	args
};
