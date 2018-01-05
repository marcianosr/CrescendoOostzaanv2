const initialState = {
  posts: {
    items: []
  },
  singlePost: {
    item: []
  }
}


export const posts = (state = initialState.posts, action) => {
  switch(action.type) {
      case 'FETCH_POSTS':
        return { loading: true }
        break;
      case 'SUCCESS_POSTS':
        return { items: action.payload.posts.data, loading: false }
        break;
      case 'ERROR_POSTS':
        return { error: action.payload.error, loading: false }
        break;
      default:
        return state;
  }

	return state;
}


export const singlePost = (state = initialState.singlePost, action) => {
  switch(action.type) {
      case 'FETCH_SINGLE_POST':
        return { loading: true }
        break;
      case 'SUCCESS_SINGLE_POST':
        return { item: action.payload.singlePost.data[0], loading: false }
        break;
      case 'ERROR_SINGLE_POST':
        return { error: action.payload.error, loading: false }
        break;
      default:
        return state;
  }

	return state;
}
