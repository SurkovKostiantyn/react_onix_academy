import { Component } from "react";
export default class UnorderedList extends Component{
    // eslint-disable-next-line no-useless-constructor
    render(){
        const {className, list } = this.props;
        return(
            <ul className={className}>
                {list.map(el=> <li>{el}</li>)}
            </ul>
        )
    }
}