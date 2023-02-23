import { Component } from "react";

export default class LinksNewsBlock extends Component{
    render(){
        const {href,className,itemsList} = this.props;
        return(
            <a href={href} className={className}>
                {itemsList.map(el => el)}
            </a>
        )
    }
}