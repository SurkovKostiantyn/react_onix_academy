import React, { Component } from "react";
import Slider from "react-slick";

export default class Banner extends Component {
    render() {
        const settings = {
            arrows: false,
            dots: true,
            autoplay: false,
            autoplaySpeed: 2500,
            draggable: false,
        };
        return (
            <div className="banner slick" id="banner">
                <Slider {...settings}>
                    <div className="banner-block">
                        <img src={require('../../assets/images/Image.png')} alt="1"/>
                        <p className="banner-block-p">Richird Norton photorealistic<span className="br"></span>rendering as real photos</p>
                    </div>
                    <div className="banner-block">
                        <img src={require('../../assets/images/Image.png')} alt="2"/>
                        <p className="banner-block-p">Lorem ipsum dolor sit amet,<span className="br"></span> consectetur adipisicing.</p>
                    </div>
                    <div className="banner-block">
                        <img src={require('../../assets/images/Image.png')} alt="3"/>
                        <p className="banner-block-p">Aperiam consequatur, dolor<span className="br"></span>earum illum placeat voluptate!</p>
                    </div>
                    <div className="banner-block">
                        <img src={require('../../assets/images/Image.png')} alt="4"/>
                        <p className="banner-block-p">Architecto beatae consequuntur<span className="br"></span>libero molestiae, perferendis</p>
                    </div>
                </Slider>
            </div>
        );
    }
}