import "./style/NewsCard.css";
import {Link} from "react-router-dom";

function NewsCard({ article, type ="default" }) {
  return (
    <article className={`news-card ${type}`}>
      <img src={article.urlToImage || "https://via.placeholder.com/400x250"} alt={article.title} className="news-image" />
      
      <div className = "news-content">
        <span className = "news-category">{article.source.name}</span>
        
        {type ==="trending"?(
          <h3>
            <Link to="/article" state={{ article }} className="trending-link">
              {article.title}
            </Link>
          </h3>):(<h3>{article.title}</h3>)
        }

        {type !== "trending" && (<p>{article.description?.slice(0,120)}...</p>
        )}

        <div className = "news-card-footer">
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>

          {type !== "trending" && (
            <Link to="/article" state={{ article }} className="read-more">
              Read More
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}

export default NewsCard;