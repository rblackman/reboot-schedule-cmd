'use client';

import TimeInputTemplate from "@components/templates/timeInput/timeInputTemplate";
import { rebootTimeState } from "@state/timeState";
import { useRecoilState } from "recoil";

export default function TimeInput() {
	const [time, setTime] = useRecoilState(rebootTimeState);

	return <TimeInputTemplate label="Reboot Time" value={time} onChange={setTime} id='time-input' required />;
}
