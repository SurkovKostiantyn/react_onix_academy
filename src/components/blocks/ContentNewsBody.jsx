import LinksNewsBlock from "../links/LinksNewsBlock";
import Image from "../elements/Image";
import Text from "../elements/Text";
import getImagesList from "../functions/getImagesList";

const ImagesList = getImagesList('BlogImages');
class NewsClass {
    constructor(header, date, text, image, id) {
        this.header = header;
        this.date = date;
        this.text = text;
        this.image = image;
        this.key = id;
    }
    getImage() {
        return (
            <Image src={this.image} alt={this.image.replace(/(\.img)|(\.png)|(\.jpg)|(\.jpeg)|(\.svg)/g, '')} />
        )
    }
    getTitle() {
        return (
            <Text className="title" text={this.header}/>
        )
    }
    getDate() {
        return (
            <Text className="date" text={this.date}/>
        )
    }
    getText() {
        return (
            <Text className="text" text={this.text}/>
        )
    }
    getKeyValue() {
        return this.key;
    }
}

let newsListOfObjects = new Array(8);
newsListOfObjects.push(
    new NewsClass(
        'Richird Norton photorealistic',
        "08.08.2021",
        "Richird Norton photorealistic rendering as real photos",
        ImagesList[0],
        'news1'
    )
);
newsListOfObjects.push(
    new NewsClass(
        'Lorem ipsum dolor sit amet',
        "08.08.2021",
        "Lorem ipsum dolor sit amet, consectetur adipisicing",
        ImagesList[1],
        'news2'
    )
);
newsListOfObjects.push(
    new NewsClass(
        'Aperiam consequatur, dolor',
        "08.08.2021",
        "Aperiam consequatur, dolor earum illum placeat voluptate!",
        ImagesList[2],
        'news3'
    )
);
newsListOfObjects.push(
    new NewsClass(
        'Architecto beatae consequuntur',
        "08.08.2021",
        "Architecto beatae consequuntur libero molestiae, perferendis",
        ImagesList[3],
        'news4'
    )
);
newsListOfObjects.push(
    new NewsClass(
        'Richird Norton photorealistic',
        "08.08.2021",
        "Richird Norton photorealistic rendering as real photos",
        ImagesList[4],
        'news5'
    )
);
newsListOfObjects.push(
    new NewsClass(
        'Lorem ipsum dolor sit amet',
        "08.08.2021",
        "Lorem ipsum dolor sit amet, consectetur adipisicing",
        ImagesList[5],
        'news6'
    )
);
newsListOfObjects.push(
    new NewsClass(
        'Aperiam consequatur, dolor',
        "08.08.2021",
        "Aperiam consequatur, dolor earum illum placeat voluptate!",
        ImagesList[6],
        'news7'
    )
);
newsListOfObjects.push(
    new NewsClass(
        'Architecto beatae consequuntur',
        "08.08.2021",
        "Architecto beatae consequuntur libero molestiae, perferendis",
        ImagesList[7],
        'news8'
    )
);

const ContentNewsBody = () => {
    return(
        <div className="content-news-body">
            {newsListOfObjects.map((x,i) =>
                <LinksNewsBlock
                    href="single.html"
                    className="content-news-body-item scaleable"
                    itemsList={newsListOfObjects[i]}
                    key={newsListOfObjects[i].getKeyValue()}
                />
            )}
        </div>
    )
}

export default ContentNewsBody;