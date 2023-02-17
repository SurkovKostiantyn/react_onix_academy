import React, { Component } from "react";
import Slider from "react-slick";
import JustALittleTag from '../elements/JustALittleTag'
import Image from '../elements/Image'

import getImagesList from "../functions/getImagesList";
const ImagesList = getImagesList('Banner');

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
                    ImagesList.map((x,i) =>
                    <div className="banner-block" key={`banner${i}`}>
                        <Image src={ImagesList[i]} alt={i}/>
                        <JustALittleTag tag="p" className="banner-block-p" text={text[i]}/>
                    </div>)
                }
            </Slider>
        </div>
    );
    }
}