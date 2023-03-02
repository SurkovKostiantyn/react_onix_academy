import { Component } from "react";
export default class Link extends Component{
    render(){
        const {href, className, innerHTML } = this.props;
        return(
            <a href={href} className={className} >
                {innerHTML}
            </a>
        )
    }
}