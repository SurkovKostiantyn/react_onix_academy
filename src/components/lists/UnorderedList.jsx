import { Component } from "react";
export default class UnorderedList extends Component{
    // eslint-disable-next-line no-useless-constructor
    constructor(props) {
        super(props);
        this.state = {
            className: this.props.className,
            listArr: this.props.list
        }
    }
    render(){
        const {className, listArr } = this.state;
        let key = 0;
        return(
            <ul className={className}>
                {listArr.map(el=> <li key={key++}>{el}</li>)}
            </ul>
        )
    }
}