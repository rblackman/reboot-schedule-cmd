'use client';

import { ReactNode } from 'react';
import { RecoilRoot } from 'recoil';

interface HomepageProps {
	children: ReactNode;
}

export default function HomepageRecoilRoot({ children }: HomepageProps) {
	return <RecoilRoot>{children}</RecoilRoot>;
}
