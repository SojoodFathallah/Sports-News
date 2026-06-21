import Footer from "../components/Footer";
import Header from "../components/Header";
import {useLocation} from "react-router-dom";
import "../components/style/ArticleDetails.css";

const ArticleDetails =()=> {
    const location = useLocation();
    const article = location.state?.article;

    if (!article) {
        return <h2>No article data available.</h2>;
    }

    return(
        <div>
            <Header />
            <div className="article-details">
                <article>
                    <img src={article.urlToImage || "https://via.placeholder.com/400x250"} alt={article.title} className="news-image" />
                    <h1>{article.title}</h1>
                    <p className="article-meta">
                       <strong>Author: </strong>{""}
                       {article.author || "Unknown"}
                    </p>

                    <p className="article-meta">
                          <strong>Published At: </strong>{""}
                          {new Date(article.publishedAt).toLocaleDateString()}
                    </p>

                    <p>{article.description}</p>

                    <p>
                        {article.content || "Full content not available."}
                    </p>
                </article>
            </div>
            <Footer />
        </div>
    )
}

export default ArticleDetails;