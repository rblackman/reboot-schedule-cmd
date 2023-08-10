import NumberInputTemplate from '@components/templates/numberInput/numberInputTemplate';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';

const id = 'test-id';
const value = 0
const newValue = value + 1;
const labelText = 'Test Label';

describe('NumberInputTemplate', () => {
	it('Renders', () => {
		render(<NumberInputTemplate id={id} value={value} label={labelText} onChange={() => { }} />);

		const label = screen.getByText(labelText);
		const input = screen.getByDisplayValue(value);

		expect(label).toBeInTheDocument();
		expect(label).toHaveTextContent(labelText);
		expect(label).toHaveAttribute('for', id);
		expect(input).toBeInTheDocument();
		expect(input).toHaveAttribute('id', id);
		expect(input).toHaveAttribute('type', 'number');
		expect(input).toHaveValue(value);
	});

	it('Executes Callback on Change', () => {
		const onChange = jest.fn();
		render(<NumberInputTemplate id={id} value={value} label={labelText} onChange={onChange} />);

		const input = screen.getByDisplayValue(value);
		fireEvent.change(input, { target: { value: newValue } });

		expect(onChange).toHaveBeenCalledTimes(1);
		expect(onChange).toHaveBeenCalledWith(newValue);
	});
});
