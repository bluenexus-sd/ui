export function post(request) {
	const { body } = request;
	
	const email = body.get('email');
	if (email) {
		console.log(email);
	}

	return {
		success: true
	};
}