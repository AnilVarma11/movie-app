import React from 'react';
import { useState, useEffect } from 'react';

const Sports = () => {


    const API_URL = "https://api.cricapi.com/v1/currentMatches?apikey=937fc278-1476-4e16-8b6d-73c9de69ade0&offset=0";
    const [sports, setSports] = useState([]);
  
   useEffect(()=>{
        latestUpdates();
   }, [])
  
    const latestUpdates = async() =>{ 
       const response = await fetch(API_URL);
       const data = await response.json();
       setSports(data.data);
    }
  



    return (
        <div>
                {sports.map((news)=>{
                return(
                    <div>
                        <div>
                            <h2>{news.name}</h2>
                            <p>{news.mathchType}</p>
                            <p>{news.status}</p>
                            <p>{news.venue}</p>
                            <p>{news.date}</p>
                        </div>
                        <div>
                            <p>{news.teams}</p>
                            <div>
                                {news.teamInfo.name}
                            </div>
                            
                        </div>
                    </div>
                );
             })}
        </div>
    );
}

export default Sports;
