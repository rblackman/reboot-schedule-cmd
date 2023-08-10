import RebootDisplayTemplate from '@components/templates/rebootDisplay/rebootDisplayTemplate';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

const contents = 'test';
const id = 'test-id';

describe('RebootDisplayTemplate', () => {
	it('Renders', () => {
		render(<RebootDisplayTemplate id={id} onClick={() => { }}>{contents}</RebootDisplayTemplate>);

		const code = screen.getByText(contents);
		const wrapper = code.closest('div');
		const button = screen.getByRole('button');

		expect(wrapper).toBeInTheDocument();
		expect(wrapper).toHaveAttribute('id', id);
		expect(code).toBeInTheDocument();
		expect(code).toHaveTextContent(contents);
		expect(button).toBeInTheDocument();
	});

	it('Executes Callback on Click', () => {
		const onClick = jest.fn();
		render(<RebootDisplayTemplate id={id} onClick={onClick}>{contents}</RebootDisplayTemplate>);

		const button = screen.getByRole('button');
		button.click();

		expect(onClick).toBeCalledTimes(1);
	});
});
