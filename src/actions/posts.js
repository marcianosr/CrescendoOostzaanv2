export function getPosts(posts) {
  // Fake ajax request.
	// setTimeout(() => {
	// 	posts = [{ id: 1, title: 'Hunter X Hunter', body: 'An adventure with Gon, Killua, Leorio and Kurapika in short.'}]
	// }, 3000);

	return {
		type: 'GET_POSTS',
		payload: {
			posts
		}
	}
}
