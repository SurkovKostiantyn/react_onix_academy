import { Component } from "react";
export default class JustALittleTag extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            tag: this.props.tag,
            className: this.props.className,
            text: this.props.text
        }
    }
    render(){
        const {tag, className, text } = this.state;
        const CustomTag = `${tag}`;
        //console.log(className);
        return(
            < CustomTag className={className} > {text} </CustomTag>
        )
    }
}