import { Component } from "react";

export default class LinksNewsBlock extends Component{
    render(){
        const {href,className,itemsList} = this.props;
        return(
            // itemsList receive array of objects
            // each object has 4 properties: img, date, title and text

            <a href={href} className={className}>
                {itemsList.getImage()}
                {itemsList.getDate()}
                {itemsList.getTitle()}
                {itemsList.getText()}
            </a>
        )
    }
}