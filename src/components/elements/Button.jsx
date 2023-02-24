import {Component} from "react";

export default class Button extends Component{
    render(){
        const {className, innerHTML, onClick} = this.props;
        return(
            <button className={className} onClick={onClick}>
                {innerHTML}
            </button>
        )
    }
}