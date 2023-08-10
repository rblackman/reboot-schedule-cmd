import StatusTemplate from '@components/templates/status/statusTemplate';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const text = 'Test';

describe('StatusTextTemplate', () => {
	it('Renders', () => {
		render(<StatusTemplate open>{text}</StatusTemplate>);

		const wrapper = screen.getByText(text);

		expect(wrapper).toBeInTheDocument();
		expect(wrapper).toHaveTextContent(text);
	});

	it('Open', () => {
		render(<StatusTemplate open>{text}</StatusTemplate>);

		const wrapper = screen.getByText(text);

		expect(wrapper).toHaveClass('open');
	});

	it('Close', () => {
		render(<StatusTemplate open={false}>{text}</StatusTemplate>);

		const wrapper = screen.getByText(text);

		expect(wrapper).not.toHaveClass('open');
	});

	it('Error', () => {
		render(<StatusTemplate open error>{text}</StatusTemplate>);

		const wrapper = screen.getByText(text);

		expect(wrapper).toHaveClass('error');
	});
});
