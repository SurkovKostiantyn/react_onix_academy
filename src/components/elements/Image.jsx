import { Component } from "react";
export default class Image extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            src: props.src,
            className: this.props.className,
            alt: this.props.alt
        }
    }
    render(){
        const {src, className, alt } = this.state;
        return(
            <img src={src} className={className} alt={alt}/>
        )
    }
}