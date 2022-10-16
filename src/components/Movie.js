import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types"

function Movie({id, medium_cover_image, title, summary, genres}) {
    return <div>
                <hr></hr>
                <img src={medium_cover_image} alt={title}></img>
                <h2>
                    <Link to={`/movie/${id}`}>
                        {title}
                    </Link>
                </h2>
                <p>{summary.length > 256 ? `${summary.slice(0,256)}... ` : summary}</p>
                <div>
                    {genres.map(genre => 
                    <li key={genre}>{genre}</li>)}
                </div>
            </div>
}

Movie.propTypes = {
    id:PropTypes.number.isRequired,
    medium_cover_image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

export default Movie;

// home 화면에서 하나하나의 movie 조각들을 그려줄 컴포넌트