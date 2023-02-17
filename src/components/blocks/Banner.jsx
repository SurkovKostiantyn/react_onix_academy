import React, { Component } from "react";
import Slider from "react-slick";
import JustALittleTag from '../elements/JustALittleTag'
import Image from '../elements/Image'

import Image1 from '../../assets/images/Image.png'
import Image2 from '../../assets/images/Image2.png'
import Image3 from '../../assets/images/Image3.jpg'
import Image4 from '../../assets/images/Image4.jpg'

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
    const Images = [Image1, Image2, Image3, Image4];
    const text = [ // TODO: make it dynamic
        "Richird Norton photorealistic rendering as real photos",
        "Lorem ipsum dolor sit amet, consectetur adipisicing",
        "Aperiam consequatur, dolor earum illum placeat voluptate!",
        "Architecto beatae consequuntur libero molestiae, perferendis"
    ]
    return (
        <div className="banner slick" id="banner">
            <Slider {...settings}>
                {
                    Images.map((x,i) =>
                    <div className="banner-block" key={`banner${i}`}>
                        <Image src={Images[i]} alt={i}/>
                        <JustALittleTag tag="p" className="banner-block-p" text={text[i]}/>
                    </div>)
                }
            </Slider>
        </div>
    );
    }
}