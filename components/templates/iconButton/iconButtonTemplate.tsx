import { assertUnreachable } from '@helpers/assertUnreachable';
import { ReactNode } from 'react';
import styles from './iconButtonTemplate.module.css';

export type ButtonType = 'copy';

export interface IconButtonTemplateProps {
	type: ButtonType
	onClick: () => void;
}

function getIconAndAria(type: ButtonType): { icon: ReactNode, aria: string } {
	switch (type) {
		case 'copy':
			return {
				icon: (
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" >
						<path d="M0 0h24v24H0z" fill="none" />
						<path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
					</svg>
				),
				aria: 'Copy to clipboard'
			};
		default:
			assertUnreachable(type);
	}
}

export default function IconButtonTemplate({ type, onClick }: IconButtonTemplateProps) {
	const { icon, aria } = getIconAndAria(type);

	return (
		<button className={styles.button} type="button" onClick={onClick} aria-label={aria}>
			{icon}
		</button>
	);
}
