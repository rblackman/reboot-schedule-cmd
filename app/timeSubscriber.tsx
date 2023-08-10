'use client';

import { useInterval } from '@hooks/useInterval';
import { currentTimeState } from '@state/timeState';
import { useCallback } from 'react';
import { useSetRecoilState } from 'recoil';

export default function TimeSubscriber() {
	const setCurrentTimeState = useSetRecoilState(currentTimeState);
	const updateTime = useCallback(() => setCurrentTimeState(new Date()), [setCurrentTimeState]);
	useInterval(updateTime, 60_000, false, []);
	return null;
}
