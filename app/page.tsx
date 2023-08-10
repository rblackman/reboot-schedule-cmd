import throwError from '@helpers/throwError';
import FuzzInput from './fuzzInput';
import HomepageRecoilRoot from './homepageRecoilRoot';
import RebootDisplay from './rebootDisplay';
import Status from './status';
import TimeInput from './timeInput';
import TimeSubscriber from './timeSubscriber';

const siteName = process.env.NEXT_PUBLIC_SITE_NAME ?? throwError('NEXT_PUBLIC_SITE_NAME is not defined');


export default async function Home() {

	return (
		<HomepageRecoilRoot>
			<h1>{siteName}</h1>
			<p>
				This is a quick utility to help reboot a server at a specific time. Specify a time and then copy the command to the clipboard. If you are rebooting a lot
				of servers, you can fuzz the results by a set number of minutes to stagger reboot times.
			</p>
			<TimeInput />
			<FuzzInput />
			<RebootDisplay />
			<Status />
			<TimeSubscriber />
		</HomepageRecoilRoot>
	);
}
