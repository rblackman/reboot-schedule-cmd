'use client';

import StatusTemplate from "@components/templates/status/statusTemplate";
import { useTimeout } from "@hooks/useTimeout";
import { copyStatusState, copyStatusTextSelector } from "@state/timeState";
import { useCallback, useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";

const displayDuration = 5_000;
const transitionDuration = 400;

export default function Status() {
	const [status, setStatus] = useRecoilState(copyStatusState);
	const text = useRecoilValue(copyStatusTextSelector);
	const [open, setOpen] = useState(status !== null);
	useEffect(() => {
		setOpen(status !== null);
	}, [status]);

	const close = useCallback(() => setOpen(false), [setOpen]);
	const clear = useCallback(() => setStatus(null), [setStatus]);

	useTimeout(close, displayDuration, [status]);
	useTimeout(clear, transitionDuration + displayDuration, [status]);

	return <StatusTemplate open={open} error={status === 'error' ? true : undefined}>{text}</StatusTemplate>;
}
