import axios from "axios";

const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

export const getSportsNews = async () => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/everything?q=sports&language=en&sortBy=publishedAt&apiKey=${API_KEY}`
    );

    return response.data.articles;
  } catch (error) {
    console.error(error);
    return [];
  }
};