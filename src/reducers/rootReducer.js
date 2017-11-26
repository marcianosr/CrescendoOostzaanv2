import { combineReducers } from 'redux';

const intialState = {
	posts: 'No posts',
}

export const posts = (state = intialState, action) => {
	return state;
}

export const rootReducer = combineReducers({ posts });
