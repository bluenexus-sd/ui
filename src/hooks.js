import { parse as parseLangHeader } from 'accept-language-parser';
import { parse as parseCookieHeader } from 'cookie';

export function getSession(request) {
	let locale = 'ar';

	try {
		const languages = parseLangHeader(request.headers['accept-language']);
		if(languages.length) {
			locale = languages[0].code;
		}

		if(request.headers.cookie) {
			const cookies = parseCookieHeader(request.headers.cookie);
			if(cookies.locale) {
				locale = cookies.locale;
			}
		}
	} catch (error) {
		// TODO: Log errors
	}

	return {
		locale,
	};
}

export async function handle({ request, resolve }) {
	const response = await resolve(request);

	return response;
}
