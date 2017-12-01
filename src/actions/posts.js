export function getPosts(posts) {
  // Fake ajax request.
	setTimeout(() => {

	}, 3000);

	return {
		type: 'GET_POSTS',
		payload: {
			posts
		}
	}
}
