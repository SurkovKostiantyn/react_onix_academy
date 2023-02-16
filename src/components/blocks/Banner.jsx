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
        };

        return (
            <div className="banner slick" id="banner">
                <Slider {...settings}>
                    <div className="banner-block">
                        <Image src={Image1} alt="1"/>
                        <JustALittleTag tag="p" className="banner-block-p"
                                        text="Richird Norton photorealistic rendering as real photos"/>
                    </div>
                    <div className="banner-block">
                        <Image src={Image2} alt="2"/>
                        <JustALittleTag tag={'p'} className={'banner-block-p'}
                                        text="Lorem ipsum dolor sit amet, consectetur adipisicing"/>
                    </div>
                    <div className="banner-block">
                        <Image src={Image3} alt="3"/>
                        <JustALittleTag tag={'p'} className={'banner-block-p'}
                                        text="Aperiam consequatur, dolor earum illum placeat voluptate!"/>
                    </div>
                    <div className="banner-block">
                        <Image src={Image4} alt="4"/>
                        <JustALittleTag tag={'p'} className={'banner-block-p'}
                                        text="Architecto beatae consequuntur libero molestiae, perferendis"/>
                    </div>
                </Slider>
            </div>
        );
    }
}

// const BannerBlock = () =>{
//     const Images = [Image1, Image2, Image3, Image4];
//     const text = [
//         "Richird Norton photorealistic rendering as real photos",
//         "Lorem ipsum dolor sit amet, consectetur adipisicing",
//         "Aperiam consequatur, dolor earum illum placeat voluptate!",
//         "Architecto beatae consequuntur libero molestiae, perferendis"
//     ]
//     return(
//         Images.map((x,i) =>
//             <div className="banner-block" key={`banner${i}`}>
//                 <Image src={Images[i]} alt={i}/>
//                 <JustALittleTag tag="p" className="banner-block-p"
//                                 text={text[i]}/>
//             </div>
//         )
//     )
// }