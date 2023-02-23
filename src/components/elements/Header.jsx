import { Component } from "react";

export default class Header extends Component{
    // eslint-disable-next-line no-useless-constructor
    render(){
        const {headerLevel, className, text } = this.props;
        const Header = `h${headerLevel}`;
        return(
            <Header className={className}>{text}</Header>
        )
    }
}