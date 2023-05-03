import { Meta, StoryObj } from '@storybook/react';
import { Button, ButtonProps } from '../components/StyledButton';

const meta: Meta<typeof Button> = {
	component: Button,
	argTypes: {
		variant: {
			control: {
				type: 'radio',
				options: ['primary', 'success', 'transparent'],
			},
		},
		onClick: {
			action: 'clicked',
		},
		children: {
			control: {
				type: 'text',
			},
		},
	},
	args: {
		variant: 'primary',
		children: 'Button',
	}
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Base: Story = {
	render: (props: ButtonProps) => <Button {...props} />,
};
