import { Component } from "react";
export default class UnorderedList extends Component{
    render(){
        const {className, list, renderItem} = this.props;
        return(
            <ul className={className}>
                {
                    list.map(item =>
                    <li key={item.id}>
                        {renderItem(item)}
                    </li>
                )}
            </ul>
        )
    }
}