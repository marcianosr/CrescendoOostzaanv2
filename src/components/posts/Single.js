import React from 'react';

const SinglePost = ({ title, content }) => {
  return (
    <div>
      {title && <h1> {title.rendered} </h1>}
      {content && <p> {content.rendered} </p>}
    </div>
  )
}

export default SinglePost;
