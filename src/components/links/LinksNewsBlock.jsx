import { Component } from "react";

export default class LinksNewsBlock extends Component{
    constructor(props) {
        super(props);
        this.state = {
            href: this.props.href,
            className: this.props.className,
            itemsList: this.props.itemsList
        }
    }
    render(){
        const {href,className,itemsList} = this.state;
        return(
            <a href={href} className={className}>
                {itemsList.map(el => el)}
            </a>
        )
    }
}