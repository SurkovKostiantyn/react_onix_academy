import getImagesList from "../functions/getImagesList";
import Image from "../elements/Image";
import Text from "../elements/Text";

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

let NewsList = new Array(8);
NewsList.push(
    new NewsClass(
        'Richird Norton photorealistic',
        "08/02/2021",
        "Richird Norton photorealistic rendering as real photos",
        ImagesList[0],
        'news1'
    )
);
NewsList.push(
    new NewsClass(
        'Lorem ipsum dolor sit amet',
        "07/09/2021",
        "Lorem ipsum dolor sit amet, consectetur adipisicing",
        ImagesList[1],
        'news2'
    )
);
NewsList.push(
    new NewsClass(
        'Aperiam consequatur, dolor',
        "03/08/2021",
        "Aperiam consequatur, dolor earum illum placeat voluptate!",
        ImagesList[2],
        'news3'
    )
);
NewsList.push(
    new NewsClass(
        'Architecto beatae consequuntur',
        "10/16/2021",
        "Architecto beatae consequuntur libero molestiae, perferendis",
        ImagesList[3],
        'news4'
    )
);
NewsList.push(
    new NewsClass(
        'Richird Norton photorealistic',
        "11/07/2019",
        "Richird Norton photorealistic rendering as real photos",
        ImagesList[4],
        'news5'
    )
);
NewsList.push(
    new NewsClass(
        'Lorem ipsum dolor sit amet',
        "04/11/2021",
        "Lorem ipsum dolor sit amet, consectetur adipisicing",
        ImagesList[5],
        'news6'
    )
);
NewsList.push(
    new NewsClass(
        'Aperiam consequatur, dolor',
        "12/22/2021",
        "Aperiam consequatur, dolor earum illum placeat voluptate!",
        ImagesList[6],
        'news7'
    )
);
NewsList.push(
    new NewsClass(
        'Architecto beatae consequuntur',
        "05/09/2021",
        "Architecto beatae consequuntur libero molestiae, perferendis",
        ImagesList[7],
        'news8'
    )
);

export default NewsList;