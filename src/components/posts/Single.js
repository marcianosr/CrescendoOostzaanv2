import React from 'react';

const SinglePost = ({ title, acf }) => {
  return (
    <div>
      {title && <h1> {title.rendered} </h1>}
      {/* {content && <div dangerouslySetInnerHTML={{__html: content.rendered}}></div>} */}
      {acf && <div dangerouslySetInnerHTML={{__html: acf.message}}></div>}
    </div>
  )
}

export default SinglePost;
