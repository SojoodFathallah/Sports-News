import {useEffect, useState} from "react";
import {getSportsNews} from "../services/newsApi";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import "./Home.css";

const Home = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(()=>{
        const fetchNews = async () => {
            const data = await getSportsNews();
            setArticles(data);
            setLoading(false);
        };
        fetchNews();
    }, []);

    const filteredArticles = articles.filter((article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) {
        return <h2>Loading...</h2>;
    }
    return(
        <div>  
            <Header 
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            />
            <div className="news-layout">
                <section className="latest-news">
                    <h2>Latest News</h2>
                    <div className="news-grid">
                        {filteredArticles.slice(0,10).map((article,index)=>(
                            <NewsCard key={index} article={article} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Home;