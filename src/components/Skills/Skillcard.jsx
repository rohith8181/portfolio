import React from 'react'
import PropTypes from "prop-types";


function Skillcard(props) {
    return (
        <div className="skill">
            <img src={`/skills/${props.skill}`} alt="" className="skill-img" />
        </div>
    );
}
Skillcard.propTypes = {
    skill: PropTypes.string.isRequired,
};

export default Skillcard