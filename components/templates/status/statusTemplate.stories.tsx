import type { Meta, StoryObj } from '@storybook/react';
import StatusTemplate, { StatusTemplateTemplateProps } from './statusTemplate';
import mockStatusTemplateTemplateProps from './statusTemplate.mocks';

const meta = {
	title: 'templates/StatusTemplateTemplate',
	component: StatusTemplate,
	argTypes: {
		error: {
			name: 'Error',
			description: 'If true, the button will be red',
			control: { type: 'boolean' }
		},
		open: {
			name: 'Is Open',
			description: 'If true, the button will be open',
			control: { type: 'boolean' }
		},
		children: {
			name: 'Children',
			description: 'The content of the button',
		}

	},
} satisfies Meta<typeof StatusTemplate>;

export default meta;

type Story = StoryObj<typeof meta>;

const successArgs: StatusTemplateTemplateProps = {
	...mockStatusTemplateTemplateProps.success,
};

export const Success: Story = {
	args: successArgs,
};


const errorArgs: StatusTemplateTemplateProps = {
	...mockStatusTemplateTemplateProps.error,
};

export const Error: Story = {
	args: errorArgs,
};
