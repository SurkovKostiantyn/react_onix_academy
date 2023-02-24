import { Component } from "react";
import Image from "../elements/Image";

export default class LinksNewsBlock extends Component{
    render(){
        const {href,className,itemsList} = this.props;

        return(
            <a href={href} className={className}>
                <Image src={itemsList.img} alt={itemsList.img.replace(/(\.img)|(\.png)|(\.jpg)|(\.jpeg)|(\.svg)/g, '')} />
                {itemsList.date}
                {itemsList.title}
                {itemsList.text}
            </a>
        )
    }
}