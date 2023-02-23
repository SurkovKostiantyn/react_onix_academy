import { Component } from "react";
export default class Link extends Component{
    // eslint-disable-next-line no-useless-constructor
    render(){
        const {href, className, innerHTML } = this.props;
        return(
            <a href={href} className={className} >
                {innerHTML}
            </a>
        )
    }
}