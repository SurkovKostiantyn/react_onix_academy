import { Component } from "react";
export default class Image extends Component{
    // eslint-disable-next-line no-useless-constructor
    render(){
        const {src, className, alt } = this.props;
        return(
            <img src={src} className={className} alt={alt}/>
        )
    }
}