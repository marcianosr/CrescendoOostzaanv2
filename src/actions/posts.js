/* Posts Actions */

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

/* Single Post Actions */

export function fetchSinglePost() {
	return {
		type: 'FETCH_SINGLE_POST',
    loading: true
	}
}

export function successSinglePost(singlePost) {
  return {
    type: 'SUCCESS_SINGLE_POST',
    payload: {
      singlePost,
    },
    loading: false
  }
}

export function errorSinglePost(error) {
  return {
    type: 'ERROR_SINGLE_POST',
    payload: {
      error,
    },
    loading: false
  }
}
