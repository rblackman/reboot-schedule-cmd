'use client';

import RebootDisplayTemplate from "@components/templates/rebootDisplay/rebootDisplayTemplate";
import randomInterval from "@helpers/randomInterval";
import { cmdRebootSelector, copyStatusState, fuzzSecondsState, getRebootCommand, secondsUntilRebootSelector } from "@state/timeState";
import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function RebootDisplay() {
	const cmdReboot = useRecoilValue(cmdRebootSelector);
	const fuzz = useRecoilValue(fuzzSecondsState);
	const seconds = useRecoilValue(secondsUntilRebootSelector);
	const setCopyStatus = useSetRecoilState(copyStatusState);

	const onClick = useCallback(async () => {
		if (typeof window !== 'undefined') {
			const fuzzSeconds = randomInterval(fuzz) * 60;
			const totalSeconds = seconds + fuzzSeconds;
			const text = getRebootCommand(totalSeconds);
			try {
				await navigator.clipboard.writeText(text);
				setCopyStatus('copied');
			} catch (ex) {
				setCopyStatus('error');
			}
		}
	}, [fuzz, seconds, setCopyStatus]);

	return <RebootDisplayTemplate onClick={onClick} id='reboot'>{cmdReboot}</RebootDisplayTemplate>;
}
