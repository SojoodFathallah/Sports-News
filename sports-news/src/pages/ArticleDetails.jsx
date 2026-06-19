import Footer from "../components/Footer";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";
import "../components/style/ArticleDetails.css";

const ArticleDetails =({ article })=>{
    return(
        <div>
            <Header />
            <div className="article-details">
                <article>
                    <img src={article.urlToImage || "https://via.placeholder.com/400x250"} alt={article.title} className="news-image" />
                    <h1>{article.title}</h1>
                    <p>{article.description}</p>
                </article>

            </div>
            <Footer />
        </div>
    )

}

export default ArticleDetails;