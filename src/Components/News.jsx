import React from 'react';
import { useEffect, useState } from 'react';

const News = () => {

 // const API_URL = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6e141b98997d40fcb539f0bb6825e17e";

 const API_URL = "https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=6e141b98997d40fcb539f0bb6825e17e";
  const [news, setNews] = useState([]);

 useEffect(()=>{
      latestNews();
 }, [])

  const latestNews = async() =>{
     const response = await fetch(API_URL);
     const data = await response.json();
     setNews(data.articles);
  }


    return (
        <>
        <div>
             {news.map((news)=>{
                return(
                    <div>
                        <h3>{news.author}</h3>
                         <h1>{news.title}</h1>
                         <p>{news.description}</p>
                         <a href='/#'>{news.url}</a>
                         <div><img src={news.urlToImage} alt={news.title} style={{height:'300px', width:'300px'}} /></div>
                         <p>{news.publishedAt}</p>
                    </div>
                );
             })}
        </div>
        </>
    );
}

export default News;
