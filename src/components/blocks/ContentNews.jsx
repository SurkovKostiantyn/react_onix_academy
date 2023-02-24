
import Link from "../links/Link";
import ContentNewsBody from "../blocks/ContentNewsBody";
import Header from "../elements/Text";
import ButtonsBlock from "../blocks/ButtonsBlock";


const ContentNews = () => {
    // ContentNewsBody loop
    return(
        <div className="content-news">
            <div className="content-news-header">
                <Header tag="3" text="News"/>
                <Link href="news.html" className="hoverable" innerHTML="View all" />
            </div>
            <ContentNewsBody />
            <ButtonsBlock/>
        </div>
    )
}

export default ContentNews;