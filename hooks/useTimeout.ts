/* eslint-disable react-hooks/exhaustive-deps */
'use client';

import { MutableRefObject, useEffect, useRef } from 'react';

export function useTimeout<T extends Function>(callback: T, updateInterval: number, deps?: ReadonlyArray<any>) {
	const savedCallback: MutableRefObject<T | undefined> = useRef<T>();
	useEffect(() => {
		savedCallback.current = callback;
	});

	useEffect(() => {
		function tick(): void {
			if (savedCallback.current) {
				savedCallback.current();
			}
		}

		const id = window.setTimeout(tick, updateInterval);

		return () => clearInterval(id);
	}, [updateInterval, ...(deps || [])]);
}
