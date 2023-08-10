'use client';

import NumberInputTemplate from "@components/templates/numberInput/numberInputTemplate";
import { fuzzSecondsState } from "@state/timeState";
import { useRecoilState } from "recoil";

export default function TimeInput() {
	const [fuzz, setFuzz] = useRecoilState(fuzzSecondsState);

	return <NumberInputTemplate label="Fuzz" value={fuzz} onChange={setFuzz} id='fuzz-input' required min={0} max={60} />;
}
