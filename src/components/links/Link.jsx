import { Component } from "react";
export default class Link extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            href: props.href,
            className: this.props.className,
            innerHTML: this.props.innerHTML
        }
    }
    render(){
        const {href, className, innerHTML } = this.state;
        return(
            <a href={href} className={className}>{innerHTML}</a>
        )
    }
}