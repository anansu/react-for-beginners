import React from "react";
import {Link} from "react-router-dom";

function Movie({medium_cover_image, title, summary, genres}) {
    return <div>
                <img src={medium_cover_image} alt={title}></img>
                <h2>
                    <Link to="/movie">
                        {title}
                    </Link>
                </h2>
                <p>{summary}</p>
                <div>
                    {genres.map(genre => 
                    <li key={genre}>{genre}</li>)}
                </div>
            </div>
}

export default Movie;