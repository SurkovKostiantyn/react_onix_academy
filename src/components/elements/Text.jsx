import { Component } from "react";

export default class Text extends Component{
    render(){
        const {className, text } = this.props;
        return(
            <p className={className}>{text}</p>
        )
    }
}