import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PostsList = ({ posts }) => {
  return (
    <div>
      {
        posts.map((post, i) => {
          return (
            <Link to={`/artikelen/${post.slug}`} key={i}>
              <h1>{post.title}</h1>
              <p>{post.excerpt}</p>
            </Link>
          )
        })
      }
    </div>
  )
}

export default PostsList;
