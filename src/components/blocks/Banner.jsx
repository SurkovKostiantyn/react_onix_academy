import React, { Component } from 'react';
import Slider from 'react-slick';
import Text from '../elements/Text';
import Image from '../elements/Image';

import getImagesList from '../functions/getImagesList';

const ImagesList = getImagesList('Banner');

const listOfBanners = [
  {
    image: ImagesList[0],
    text: 'Richird Norton photorealistic rendering as real photos',
    id: 'banner1'
  },
  {
    image: ImagesList[1],
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    id: 'banner2'
  },
  {
    image: ImagesList[2],
    text: 'Aperiam consequatur, dolor earum illum placeat voluptate!',
    id: 'banner3'
  },
  {
    image: ImagesList[3],
    text: 'Architecto beatae consequuntur libero molestiae, perferendis',
    id: 'banner4'
  },
  {
    image: ImagesList[4],
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing',
    id: 'banner5'
  }
];

export default class Banner extends Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      autoplay: false,
      autoplaySpeed: 2500,
      draggable: false,
      infinite: true,
      speed: 500
    };
    // https://stackoverflow.com/a/70312839
    return (
      <div className="banner slick" id="banner">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider {...settings}>
          {
                    listOfBanners.map((x, i) => (
                      <div className="banner-block" key={listOfBanners[i].image}>
                        <Image src={listOfBanners[i].image} alt={i} />
                        <Text className="banner-block-p" text={listOfBanners[i].text} />
                      </div>
                    ))
                }
        </Slider>
      </div>
    );
  }
}
