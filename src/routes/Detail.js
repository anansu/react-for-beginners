import React, { useEffect, useState } from "react";
import {useParams} from "react-router-dom";

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movieInfo, setMovieInfo] = useState({});

    const {id} = useParams();
    const getMovie = async() => {
        const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
        console.log(json);
        setLoading(false);
        setMovieInfo(json.data.movie);
    }
    useEffect(()=> {getMovie()}, []);

    console.log(movieInfo);

    return (
        <div>
          {loading ? <h1>Loading...</h1> : 
          <div>
            <h1>{movieInfo.title}</h1>
            <img src={movieInfo.large_cover_image} alt={movieInfo.title}></img>
            
            <h2>Trailer</h2>
            <iframe width="789" height="444" src={`https://www.youtube.com/embed/${movieInfo.yt_trailer_code}`} title={movieInfo.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <p>{movieInfo.description_full}</p>
            <p>Run Time: {movieInfo.runtime} minute</p>
            <p>Average Rating: {movieInfo.rating}</p>
            <p>Year: {movieInfo.year}</p>
            <ul>
                {movieInfo.genres.map(genre => 
                    <li key={genre}>{genre}</li>)}
            </ul>

          </div>
          }
        </div>
      )
}

// 영화 링크 하나하나를 누르면 나오는 화면을 구성해주는 컴포넌트

export default Detail;