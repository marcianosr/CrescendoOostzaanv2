import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {
  return (
    <div>
      {
        posts.map((post, i) => {
          return (
            <Link to={`/artikelen/${post.slug}`} key={post.id}>
              <h1>{post.title.rendered}</h1>
              <p>{post.excerpt.rendered}</p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default PostsList;
