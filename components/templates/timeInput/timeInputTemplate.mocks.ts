import { TimeInputTemplateProps } from "./timeInputTemplate";

const primary: TimeInputTemplateProps = {
	id: 'time',
	label: 'Time',
	value: '12:00:00',
	onChange: (value) => console.log('Time changed', { value })
};

const mockTimeInputTemplateProps = {
	primary,
};

export default mockTimeInputTemplateProps;
