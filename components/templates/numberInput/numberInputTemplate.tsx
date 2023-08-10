'use client';

import { ChangeEvent, useCallback } from 'react';
import styles from './numberInputTemplate.module.css';

export type ButtonType = 'copy';

export interface NumberInputTemplateProps {
	id: string;
	label: string;
	value: number;
	onChange: (_num: number) => void;
	required?: true;
	min?: number;
	max?: number;
}

export default function NumberInputTemplate({ id, label, value, onChange: changeCallback, ...props }: NumberInputTemplateProps) {
	const onChange = useCallback(({ target: { value } }: ChangeEvent<HTMLInputElement>) => changeCallback(parseInt(value)), [changeCallback]);
	const defaults = {
		...NumberInputTemplate.defaultProps,
		...props
	}
	return (
		<div className={styles.wrapper}>
			<label htmlFor={id} className={styles.label}>{label}</label>
			<input id={id} type="number" value={value} onChange={onChange} step={1} {...defaults} />
		</div>
	);
}

NumberInputTemplate.defaultProps = {
	required: undefined,
	min: 0,
	max: 60
};
