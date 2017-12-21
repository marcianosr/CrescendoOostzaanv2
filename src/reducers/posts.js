const initialState = {
	items: [],
}

export const posts = (state = initialState, action) => {
  switch(action.type) {
      case 'FETCH_POSTS':
        return { loading: true }
        break;
      case 'SUCCESS_POSTS':
        console.log('succes_POSTS')
        return { items: action.payload.posts, loading: false }
        break;
      case 'ERROR_POSTS':
        return { error: action.payload.error, loading: false }
        break;
      default:
        return state;
  }

	// Setup actions to fetch/load posts.
	return state;
}
