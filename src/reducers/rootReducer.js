import { combineReducers } from 'redux';

import { posts, singlePost } from './posts';


export const rootReducer = combineReducers({ posts, singlePost });
