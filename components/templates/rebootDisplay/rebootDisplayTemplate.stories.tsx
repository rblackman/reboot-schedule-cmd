import type { Meta, StoryObj } from '@storybook/react';
import RebootDisplay, { RebootDisplayTemplateProps } from './rebootDisplayTemplate';
import mockRebootDisplayTemplateProps from './rebootDisplayTemplate.mocks';

const meta = {
	title: 'templates/RebootDisplayTemplate',
	component: RebootDisplay,
	argTypes: {
		id: {
			table: {
				disable: true
			}
		},
		children: {
			title: 'Children',
			description: 'The children of the component.',
		},
		onClick: {
			table: {
				disable: true
			}
		}

	},
} satisfies Meta<typeof RebootDisplay>;

export default meta;

type Story = StoryObj<typeof meta>;

const args: RebootDisplayTemplateProps = {
	...mockRebootDisplayTemplateProps.args,
};

export const RebootDisplayTemplate: Story = {
	args,
};
