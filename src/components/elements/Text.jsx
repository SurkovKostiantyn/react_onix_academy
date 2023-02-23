import { Component } from "react";

export default class Header extends Component{
    render(){
        const {className, text } = this.props;
        return(
            <p className={className}>{text}</p>
        )
    }
}