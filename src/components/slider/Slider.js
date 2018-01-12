import React from 'react';
import Slick from 'react-slick';
import Carousel from 'nuka-carousel';


const Slider = () => {

  return (
    <Carousel autoplay>
      <div>
        <img width='100%' src='http://placehold.it/1200x500/ff0000' />
      </div>
      <div>
        <img width='100%' src='http://placehold.it/900x300/ff00ff' />
      </div>
      <div>
        <img width='100%' src='http://placehold.it/900x300/ffff00' />
      </div>
    </Carousel>
  )
}

export default Slider;
