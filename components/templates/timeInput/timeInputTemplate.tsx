'use client';

import { ChangeEvent, useCallback } from 'react';
import styles from './timeInputTemplate.module.css';

export type ButtonType = 'copy';

export interface TimeInputTemplateProps {
	id: string;
	label: string;
	value: string;
	onChange: (_time: string) => void;
	required?: true;
}

export default function TimeInputTemplate({ id, label, value, onChange: changeCallback, ...props }: TimeInputTemplateProps) {
	const onChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => changeCallback(value), [changeCallback]);

	return (
		<div className={styles.wrapper}>
			<label htmlFor={id} className={styles.label}>{label}</label>
			<input id={id} type="time" required value={value} onChange={onChange} {...props} />
		</div>
	);
}

TimeInputTemplate.defaultProps = {
	required: undefined
};
