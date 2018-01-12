import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from 'src/components/title/Title';

import styles from 'src/components/posts/List.scss';

const PostsList = ({ posts }) => {

  console.log(styles)
  return (
    <div>
      <Title>Laatste nieuws</Title>

      <div className={styles.postItemContainer}>
        {
          posts.map((post, i) => {
            return (
              <Link className={styles.postItem} to={`/artikelen/${post.slug}`} key={post.id}>
                <img src={post.acf.slider[0].image.sizes.medium} />

                <div className={styles.textContainer}>
                  <Title type='h2'>{post.title.rendered}</Title>
                  <p>{post.acf.excerpt}</p>
                </div>
              </Link>
            )
          })
        }
      </div>
    </div>
  )
}

export default PostsList;
