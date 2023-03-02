import { Component } from "react";
export default class UnorderedList extends Component{
    render(){
        const {className, list, renderItem} = this.props;
        return(
            <ul className={className}>
                {
                    list.map((item,i) =>
                    <li key={i}>
                        {renderItem(item)}
                    </li>
                )}
            </ul>
        )
    }
}