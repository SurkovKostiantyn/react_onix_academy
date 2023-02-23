import Link from "../links/Link";
import Text from "../elements/Text";
import Header from "../elements/Text";
import LinksNewsBlock from "../links/LinksNewsBlock";

import Image from "../elements/Image";

import getImagesList from "../functions/getImagesList";
const ImagesList = getImagesList('BlogImages');

const ContentNews = () => {
    // ContentNewsBody loop
    return(
        <div className="content-news">
            <div className="content-news-header">
                <Header tag="3" text="News"/>
                <Link href="news.html" className="hoverable" innerHTML="View all" />
            </div>
            <ContentNewsBody/>
        </div>
    )
}

const ContentNewsBody = () => {
    const header = [
        "Richird Norton photorealistic",
        "Lorem ipsum dolor sit amet",
        "Aperiam consequatur, dolor",
        "Architecto beatae consequuntur",
        "Richird Norton photorealistic",
        "Lorem ipsum dolor sit amet",
        "Aperiam consequatur, dolor",
        "Architecto beatae consequuntur",
        ]
    const text = [ // TODO: make it dynamic
        "Richird Norton photorealistic rendering as real photos",
        "Lorem ipsum dolor sit amet, consectetur adipisicing",
        "Aperiam consequatur, dolor earum illum placeat voluptate!",
        "Architecto beatae consequuntur libero molestiae, perferendis",
        "Richird Norton photorealistic rendering as real photos",
        "Lorem ipsum dolor sit amet, consectetur adipisicing",
        "Aperiam consequatur, dolor earum illum placeat voluptate!",
        "Architecto beatae consequuntur libero molestiae, perferendis",
    ]
    return(
        <div className="content-news-body">
            {ImagesList.map((x,i) =>
                <LinksNewsBlock
                    href="single.html"
                    className="content-news-body-item scaleable"
                    itemsList={[
                        <Image src={ImagesList[i]} alt={i} />,
                        <Text className="date" text="08.08.2021"/>,
                        <Text className="title" text={header[i]}/>,
                        <Text className="text" text={text[i]}/>,
                    ]
                    }/>
            )}
        </div>
    )
}

export default ContentNews;