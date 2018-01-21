import React from 'react';
import Carousel from 'nuka-carousel';

import styles from './Slider.scss';

const Slider = ({ images }) => {
  return (
    <section className={styles.sliderContainer}>
      <Carousel autoplay class={styles.slider}>
        <div>
          {images && images.map(({ image }) => (
            <img key={image.id} style={{ backgroundImage: `url(${image.url})` }} />
          ))}
        </div>
        {/* <div>
          <img style={{ backgroundImage: 'url(http://placehold.it/1200x500/ff0000)' }} />
        </div>
        <div>
          <img style={{ backgroundImage: 'url(http://placehold.it/800x300/0000ff)' }} />
        </div>
        <div>
          <img style={{ backgroundImage: 'url(http://placehold.it/900x700/00ff00)' }} />
        </div> */}
      </Carousel>
    </section>
  )
}

export default Slider;
