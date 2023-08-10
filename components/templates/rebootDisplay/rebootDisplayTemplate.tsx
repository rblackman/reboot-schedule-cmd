import IconButton from '@components/templates/iconButton/iconButtonTemplate';
import { ReactNode } from 'react';
import styles from './rebootDisplayTemplate.module.css';

export interface RebootDisplayTemplateProps {
	id?: string;
	onClick: () => void;
	children: ReactNode;
}


export default function RebootDisplayTemplate({ onClick, children, ...props }: RebootDisplayTemplateProps) {
	return (
		<div className={styles.wrapper} {...props}>
			<code className={styles.code}>{children}</code>
			<IconButton type='copy' onClick={onClick} />
		</div>
	);
}

RebootDisplayTemplate.defaultProps = {
	id: undefined
};
