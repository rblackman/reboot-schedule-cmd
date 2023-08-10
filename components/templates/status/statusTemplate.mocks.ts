import { StatusTemplateTemplateProps } from "./statusTemplate";

const success: StatusTemplateTemplateProps = {
	open: true,
	children: 'Success Status'
};

const error: StatusTemplateTemplateProps = {
	error: true,
	open: true,
	children: 'Error Status'
};

const mockStatusTemplateTemplateProps = {
	success,
	error
};

export default mockStatusTemplateTemplateProps;
