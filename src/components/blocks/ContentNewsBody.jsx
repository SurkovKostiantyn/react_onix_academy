import { Component} from "react";
import LinksNewsBlock from "../links/LinksNewsBlock";

import getImagesList from "../functions/getImagesList";
let imagesList = getImagesList('BlogImages'); // что бы не писать ручками путь к картинкам

let NewsList = [
    {
        title: 'Richird Norton photorealistic',
        date: "08/02/2021",
        text: "Richird Norton photorealistic rendering as real photos",
        img: imagesList[0],
        id: 'news1'
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        date: "07/09/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        img: imagesList[1],
        id: 'news2'
    },
    {
        title: 'Aperiam consequatur, dolor',
        date: "03/08/2021",
        text: "Aperiam consequatur, dolor earum illum placeat voluptate!",
        img: imagesList[2],
        id: 'news3'
    },
    {
        title: 'Architecto beatae consequuntur',
        date: "10/16/2021",
        text: "Architecto beatae consequuntur libero molestiae, perferendis",
        img: imagesList[3],
        id: 'news4'
    },
    {
        title: 'Richird Norton photorealistic',
        date: "11/07/2019",
        text: "Richird Norton photorealistic rendering as real photos",
        img: imagesList[4],
        id: 'news5'
    },
    {
        title: 'Lorem ipsum dolor sit amet',
        date: "04/11/2021",
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing",
        img: imagesList[5],
        id: 'news6'
    },
    {
        title: 'Aperiam consequatur, dolor',
        date: "12/22/2021",
        text: "Aperiam consequatur, dolor earum illum placeat voluptate!",
        img: imagesList[6],
        id: 'news7'
    },
    {
        title: 'Architecto beatae consequuntur',
        date: "05/09/2021",
        text: "Architecto beatae consequuntur libero molestiae, perferendis",
        img: imagesList[7],
        id: 'news8'
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

    render() {
        const { list } = this.state;
        return (
            <>
                <div className="content-news-body">
                    {list.map(x =>
                        <LinksNewsBlock
                            href="single.html"
                            className="content-news-body-item scaleable"
                            itemsList={x}
                            key={x.id}
                        />
                    )}
                </div>
                <div className="buttons-block">
                    <button className="btn" onClick={this.funcSortByDateASC} > SORT </button>
                    <button className="btn" onClick={this.funcSortByDateDESC} > RSORT </button>
                    <button className="btn" onClick={this.funcRemoveLast} > DEL LAST </button>
                    <button className="btn" onClick={this.funcRemoveFirst} > DEL FIRST </button>
                </div>
            </>
        )
    }
}
