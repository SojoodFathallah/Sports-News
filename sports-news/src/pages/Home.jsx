import {useEffect, useState} from "react";
import {getSportsNews} from "../services/newsApi";
import Header from "../components/Header";
import NewsCard from "../components/NewsCard";
import "../components/style/Home.css";
import Footer from "../components/Footer";

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
                        {filteredArticles.slice(0,15).map((article,index)=>(
                            <NewsCard key={index} article={article} />
                        ))}
                    </div>
                </section>
                
                <aside className="trending-news">
                <h2>Trending News</h2>
                    {filteredArticles.slice(15,20).map((article,index)=>(
                        <NewsCard key={index} article={article} type="trending" />
                    ))}

                </aside>
            </div>
            <Footer />
        </div>
    )
}

export default Home;