import { Component} from "react";
import LinksNewsBlock from "../links/LinksNewsBlock";

import getImagesList from "../functions/getImagesList";
import Button from "../elements/Button";
let imagesList = getImagesList('BlogImages'); // что бы не писать ручками путь к картинкам

let NewsList = [
    {
        title: 'Richird Norton photorealistic',
        date: "08/02/2021",
        text: "Richird Norton photorealistic rendering as real photos",
        img: imagesList[0],
        
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        date: "07/09/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        img: imagesList[1],
        
    },
    {
        title: 'Aperiam consequatur, dolor',
        date: "03/08/2021",
        text: "Aperiam consequatur, dolor earum illum placeat voluptate!",
        img: imagesList[2],
        
    },
    {
        title: 'Architecto beatae consequuntur',
        date: "10/16/2021",
        text: "Architecto beatae consequuntur libero molestiae, perferendis",
        img: imagesList[3],
        
    },
    {
        title: 'Richird Norton photorealistic',
        date: "11/07/2019",
        text: "Richird Norton photorealistic rendering as real photos",
        img: imagesList[4],
        
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        date: "04/11/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        img: imagesList[5],
        
    },
    {
        title: 'Aperiam consequatur, dolor',
        date: "12/22/2021",
        text: "Aperiam consequatur, dolor earum illum placeat voluptate!",
        img: imagesList[6],
        
    },
    {
        title: 'Architecto beatae consequuntur',
        date: "05/09/2021",
        text: "Architecto beatae consequuntur libero molestiae, perferendis",
        img: imagesList[7],
        
    },
];


export default class ContentNewsBody extends Component {
    constructor() {
        super();
        this.state = {
            list: NewsList,
        };
    }

    funcSortByDateASC = () => {
        this.setState({
            list: this.state.list.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            })
        });
    }
    funcSortByDateDESC = () => {
        this.setState({
            list: this.state.list.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
            }).reverse()
        });
    }
    funcRemoveLast = () => {
        this.setState({
            list: this.state.list.slice(0, -1)
        });
    }
    funcRemoveFirst = () => {
        this.setState({
            list: this.state.list.slice(1)
        });
    }

    funcSortByDateASCCustom = () => {
        // custom sort without sort() method
        let arr = this.state.list;
        let arrLength = arr.length;
        for (let i = 0; i < arrLength; i++) {
            for (let j = 0; j < arrLength - 1; j++) {
                if (new Date(arr[j].date) < new Date(arr[j + 1].date)) {
                    let temp = arr[j];
                    arr[j] = arr[j + 1];
                    arr[j + 1] = temp;
                }
            }
        }
        this.setState({
            list: arr
        });
    }

    funcAddElement = () => {
        let arr = this.state.list;

        function getDateFormat() {
            let date = new Date();
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return `${month}/${day}/${year}`;
        }

        arr.push({
            title: 'Richird Norton photorealistic',
            date: getDateFormat(),
            text: "Richird Norton photorealistic rendering as real photos",
            img: imagesList[Math.floor(Math.random() * 8)],
        });
        this.setState({
            list: arr
        });
    }

    render() {
        const { list } = this.state;
        return (
            <>
                <div className="content-news-body">
                    {list.map((x,i) =>
                        <LinksNewsBlock
                            href="single.html"
                            className="content-news-body-item scaleable"
                            itemsList={x}
                            key={i}
                        />
                    )}
                </div>
                <div className="buttons-block">
                    <Button className="btn" onClick={this.funcSortByDateASC} innerHTML ={"SORT"} />
                    <Button className="btn" onClick={this.funcSortByDateASCCustom} innerHTML ={"CUSTOM SORT"}/>
                    <Button className="btn" onClick={this.funcSortByDateDESC}  innerHTML={'RSORT'} />
                    <Button className="btn" onClick={this.funcRemoveLast}  innerHTML={'DEL LAST'} />
                    <Button className="btn" onClick={this.funcRemoveFirst}  innerHTML={'DEL FIRST'} />
                    <Button className="btn" onClick={this.funcAddElement}  innerHTML={'ADD ELEMENT'} />
                </div>
            </>
        )
    }
}
