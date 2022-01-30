import { topics } from '../topics.json';

export async function get({ params }) {
	const topic = topics[params.topic];

	if (topic) {
		return {
			body: {
				topic,
			},
		};
	}

	return {
		status: 404,
	};
}
