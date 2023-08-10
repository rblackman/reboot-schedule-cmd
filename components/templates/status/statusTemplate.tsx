import clsx from 'clsx';
import { ReactNode } from 'react';
import styles from './statusTemplate.module.css';

export interface StatusTemplateTemplateProps {
	error?: true;
	open: boolean;
	children: ReactNode;
}

export default function StatusTemplateTemplate({ error, open, children }: StatusTemplateTemplateProps) {
	const classes = clsx({
		[styles.wrapper]: true,
		[styles.error]: error === true,
		[styles.open]: open,
	});


	return (
		<div className={classes}>
			{children}
		</div>
	);
}
