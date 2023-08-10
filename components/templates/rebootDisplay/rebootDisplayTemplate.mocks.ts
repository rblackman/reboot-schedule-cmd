import { RebootDisplayTemplateProps } from "./rebootDisplayTemplate";

const args: RebootDisplayTemplateProps = {
	id: 'reboot',
	onClick: () => console.log('copy'),
	children: 'shutdown /r /t 42365'
};

const mockRebootDisplayTemplateProps = {
	args,
};

export default mockRebootDisplayTemplateProps;
