import React from 'react';

const SinglePosts = ({ title, body }, params) => {
  console.log(params)
  return(
    <div>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

export default SinglePosts;
