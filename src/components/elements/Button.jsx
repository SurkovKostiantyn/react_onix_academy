import {Component} from "react";

export default class Button extends Component{
    render(){
        const {className, innerHTML} = this.props;
        return(
            <button className={className} onClick={() => console.log('onClick')}>
                {innerHTML}
            </button>
        )
    }
}