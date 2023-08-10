import type { Meta, StoryObj } from '@storybook/react';
import IconButton, { IconButtonTemplateProps } from './iconButtonTemplate';
import mockIconButtonTemplateProps from './iconButtonTemplate.mocks';

const meta = {
	title: 'templates/IconButtonTemplate',
	component: IconButton,
	argTypes: {
		type: {
			name: 'Type',
			description: 'The type of button to render',
			options: ['copy'],
			control: { type: 'radio' }
		},
		onClick: {
			table: {
				disable: true
			}
		}

	},
} satisfies Meta<typeof IconButton>;

export default meta;

type Story = StoryObj<typeof meta>;

const copyArgs: IconButtonTemplateProps = {
	...mockIconButtonTemplateProps.copy,
};

export const IconButtonTemplate: Story = {
	args: copyArgs,
};
