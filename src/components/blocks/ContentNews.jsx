import Link from "../links/Link";
import JustALittleTag from "../elements/JustALittleTag";
import LinksNewsBlock from "../links/LinksNewsBlock";

import Image1 from '../../assets/images/BlogImage.png';
import Image2 from '../../assets/images/BlogImage2.png';
import Image3 from '../../assets/images/BlogImage3.png';
import Image4 from '../../assets/images/BlogImage4.png';
import Image5 from '../../assets/images/BlogImage5.png';
import Image6 from '../../assets/images/BlogImage6.png';
import Image7 from '../../assets/images/BlogImage7.png';
import Image8 from '../../assets/images/BlogImage8.png';
import Image from "../elements/Image";

const ContentNews = () => {
    // ContentNewsBody loop
    return(
        <div className="content-news">
            <div className="content-news-header">
                <JustALittleTag tag="h3" text="News"/>
                <Link href="news.html" className="hoverable" innerHTML="View all" />
            </div>
            <ContentNewsBody/>
        </div>
    )
}

const ContentNewsBody = () => {
    const Images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7,Image8];
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
            {Images.map((x,i) =>
                <LinksNewsBlock
                    key={`LNB${i}`}
                    href="single.html"
                    className="content-news-body-item scaleable"
                    itemsList={[
                        <Image src={Images[i]} alt={i} key={`img${i}`}/>,
                        <JustALittleTag tag="p" key={`tag${i}`}
                                        className="date"
                                        text="08.08.2021"/>,
                        <JustALittleTag tag="p" key={`tag2${i}`}
                                        className="title"
                                        text={header[i]}/>,
                        <JustALittleTag tag="p" key={`tag3${i}`}
                                        className="text"
                                        text={text[i]}/>,
                    ]
                    }/>
            )}
        </div>
    )
}

export default ContentNews;