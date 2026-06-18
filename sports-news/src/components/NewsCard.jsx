import "./style/NewsCard.css";

function NewsCard({ article}) {
  return (
    <article className="news-card">
      <img src={article.urlToImage || "https://via.placeholder.com/400x250"} alt={article.title} className="news-image" />
      
      <div className = "news-content">
        <span className = "news-category">{article.source.name}</span>
        <h3>{article.title}</h3>
        <p>{article.description?.slice(0,120)}...</p>

        <div className = "news-card-footer">
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
          <a href={article.url} target="_blank" rel="noreferrer" className="read-more">Read More</a>
        </div>
      </div>
    </article>
  );
}

export default NewsCard;