import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {

  console.log(posts)
  return (
    <div>
      {
        posts.map((post, i) => {
          return (
            <Link to={`/artikelen/${post.slug}`} key={post.id}>
              <h1>{post.title.rendered}</h1>
              <p>{post.acf.excerpt}</p>
              <img src={post.acf.slider[0].image.sizes.medium} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default PostsList;
