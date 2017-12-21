export function fetchPosts() {
	return {
		type: 'FETCH_POSTS',
    loading: true
	}
}


export function successPosts(posts) {
  return {
    type: 'SUCCESS_POSTS',
    payload: {
      posts,
    },
    loading: false
  }
}

export function errorPosts(error) {
  return {
    type: 'ERROR_POSTS',
    payload: {
      error,
    },
    loading: false
  }
}
