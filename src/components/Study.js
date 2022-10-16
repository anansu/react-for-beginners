import React from "react";
import {Link} from "react-router-dom";
import PropTypes, { func } from "prop-types"

function Study() {
    return <div>
        <hr></hr>
        <Link to={`/study`}>추가 공부한 내용들 링크</Link>
        <hr></hr>
    </div>
}
export default Study;