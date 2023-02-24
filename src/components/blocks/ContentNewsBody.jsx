import { Component} from "react";
import LinksNewsBlock from "../links/LinksNewsBlock";

import NewsList  from "../data/NewsList";

export default class ContentNewsBody extends Component {
    constructor() {
        super();
        this.state = {
            list: NewsList
        };
    }
    render() {
        const { list } = this.state;
        return (
            <div className="content-news-body">
                {list.map((x,i) =>
                    <LinksNewsBlock
                        href="single.html"
                        className="content-news-body-item scaleable"
                        itemsList={x}
                        key={x.getKeyValue()}
                    />
                )}
            </div>
        )
    }
}
