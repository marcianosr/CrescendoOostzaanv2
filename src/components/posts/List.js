import React, { Component } from 'react';


const PostsList = ({posts, loading, error}) => {
  console.log(posts, 'bls')
  return (
    <div>
      {loading && <span>Loading...</span>}
      {!error && posts && posts.length &&
        posts.map((post, i) => {
          return (
            <a href='/artikelen/test' key={i}>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
            </a>
          )

        })
      }
      {error && <p>Helaas kunnen de berichten niet worden geladen.</p>}
    </div>
  )
}

export default PostsList;
