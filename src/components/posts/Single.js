import React from 'react';
import { Link } from 'react-router-dom';

import Title from 'src/components/title/Title';
import Block from 'src/components/block/Block';
import Slider from 'src/components/slider/slider';

import styles from './Single.scss';

const SinglePost = ({ title, acf }) => {
  return (
    <div>
      <Slider images={acf && acf.slider} />
      <Block>
        <Link to='/' className={styles.back}>Terug naar home</Link>

        {title && <Title> {title.rendered} </Title>}
        {/* {content && <div dangerouslySetInnerHTML={{__html: content.rendered}}></div>} */}
        {acf && <p dangerouslySetInnerHTML={{__html: acf.message}}></p>}
        <div className={styles.imageContainer}>
          <img src={acf && acf.slider[0].image.url} />
        </div>
      </Block>
    </div>
  )
}

export default SinglePost;
