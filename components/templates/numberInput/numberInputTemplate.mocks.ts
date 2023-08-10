import { NumberInputTemplateProps } from "./numberInputTemplate";

const primary: NumberInputTemplateProps = {
	id: 'num',
	label: 'Number',
	value: 0,
	onChange: (value) => console.log('Number changed', { value })
};

const mockNumberInputTemplateProps = {
	primary,
};

export default mockNumberInputTemplateProps;
