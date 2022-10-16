import React from "react";
import { useState, useEffect } from "react";
import Movie from "../components/Movie.js";
import Study from "../components/Study.js";

function Home() {
  const [loading, setLoading] = useState(true);
  const [movieArray, setMovieArray] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year")
    ).json();
    setMovieArray(json.data.movies);
    setLoading(false);
  };

  useEffect(() => {getMovies()}, []);
  // 웬만하면 useEffect 안의 들어갈 함수는 화살표 함수 형태로 정의하자. 안 그러면 create 어쩌구 
  // 에러가 마구 나옴.

  return (
    <div>
      {loading ? <h1>Loading...</h1> : 
      <div>
        {movieArray.map((movie) => 
          <Movie 
            key={movie.id}
            id={movie.id}
            medium_cover_image={movie.medium_cover_image}
            title={movie.title}
            summary={movie.summary}
            genres={movie.genres}
          />)}
      </div>
      }
      <div>
        <Study></Study>
      </div>
    </div>
  )
}

// Home 화면을 구성해주는 컴포넌트


export default Home;

