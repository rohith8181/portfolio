import React from "react";

function Projectitem({ item, width }) {
    return (
        <div className="carousel-item" style={{ width: width }}>
            <img className="carousel-img" src={`/project-images/${item.imagename}`} />
            <div className="carousel-side-des">
                <div className="carousel-item-text">{item.description}</div>
                <div className="project-btn-grp">
                    <button className='project-btn github'>
                        <a href={item.sourceCode} target="blank">
                            Github repo
                        </a>
                    </button>
                    <button className='project-btn live'>
                        <a href={item.livePreview} target="blank">
                            Live
                        </a>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Projectitem;