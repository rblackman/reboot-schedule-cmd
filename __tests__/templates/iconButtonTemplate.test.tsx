import { default as IconButtonTemplate } from '@components/templates/iconButton/iconButtonTemplate';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

describe('IconButtonTemplate', () => {
	it('Renders', () => {
		render(<IconButtonTemplate type='copy' onClick={() => { }} />);

		const button = screen.getByRole('button');

		expect(button).toBeInTheDocument();
		expect(button).toHaveAccessibleDescription(/.*/);
	});

	it('Executes Callback on Click', () => {
		const onClick = jest.fn();
		render(<IconButtonTemplate type='copy' onClick={onClick} />);

		const button = screen.getByRole('button');
		button.click();

		expect(onClick).toBeCalledTimes(1);
	});
});
