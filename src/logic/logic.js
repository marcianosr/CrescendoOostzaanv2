import { createLogic, createLogicMiddleware } from 'redux-logic';
import axios from 'axios';

import {
  successPosts, successSinglePost,
  errorPosts, errorSinglePost
} from '../actions/posts';
import config from '../config/config';

export const fetchPostsLogic = createLogic({
  type: 'FETCH_POSTS',
  cancelType: 'ERROR_POSTS',

  process({ getState, action}, dispatch, done) {

    let request = axios.get(`${config.apiUrl}/posts`)
                .then((response) => response)
                .catch((error) => error)

    request.then((posts) => {
      dispatch(successPosts(posts))

    }).catch((error) => {
      console.log(error)
      dispatch(errorPosts(error));

    }).then(() => {

      done();

    });

  }
});

export const fetchSinglePostLogic = createLogic({
  type: 'FETCH_SINGLE_POST',
  cancelType: 'ERROR_SINGLE_POST',

  process({ getState, action}, dispatch, done) {

    let request = axios.get(`${config.apiUrl}/posts?slug=${action.slug}`)
                .then((response) => response)
                .catch((error) => error)


    request.then((getPostBySlug) => {

      dispatch(successSinglePost(getPostBySlug))

    }).catch((error) => {

      dispatch(errorSinglePost(error));

    }).then(() => {

      done();

    });

  }
});

const middlewares = [
  fetchPostsLogic,
  fetchSinglePostLogic
];

createLogicMiddleware(middlewares);



export default middlewares;
