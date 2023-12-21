import React, { useState } from "react";
import Projectitem from "./Projectitem";
import { MdRadioButtonChecked, MdRadioButtonUnchecked } from "react-icons/md";
import { FaArrowAltCircleRight, FaArrowCircleLeft } from "react-icons/fa";
import { projects } from "../../Portfolio_details";

import './Project.css'

function Project() {
    const [activeIndex, setActiveIndex] = useState(0);
    // const projects = [
    //     {
    //         title: "Baseball",
    //         description:
    //             "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
    //         icon: require("../../assets/Profilepic.jpeg"),
    //     },
    //     {
    //         title: "Walking",
    //         description:
    //             "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
    //         icon: require("../../assets/Profilepic.jpeg"),
    //     },
    //     {
    //         title: "Weights",
    //         description:
    //             "Baseball is a bat-and-ball sport played between two teams of nine players each, taking turns batting and fielding. The game occurs over the course of several plays, with each play generally beginning when a player on the fielding team, called the pitcher.",
    //         icon: require("../../assets/Profilepic.jpeg"),
    //     },
    // ];
    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;
        } else if (newIndex >= projects.length) {
            newIndex = projects.length - 1;
        }

        setActiveIndex(newIndex);
    };
    return (
        <div id="projects" className="App">
            <h1 className="Heading">Projects</h1>
            <div className="carousel">
                <div
                    className="inner"
                    style={{
                        transform: `translate(-${activeIndex * 100}%)`
                    }}
                >
                    {projects.map((item) => {
                        return <Projectitem item={item} width={"100%"} />;
                    })}
                </div>

                <div className="carousel-buttons">
                    <button
                        className="button-arrow"
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        <FaArrowCircleLeft />
                    </button>
                    <div className="indicators">
                        {projects.map((item, index) => {
                            return (
                                <button
                                    className="indicator-buttons"
                                    onClick={() => {
                                        updateIndex(index);
                                    }}
                                >
                                    {index === activeIndex ? <MdRadioButtonChecked /> : <MdRadioButtonUnchecked />}
                                </button>
                            );
                        })}
                    </div>
                    <button
                        className="button-arrow"
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        <FaArrowAltCircleRight />
                    </button>
                </div>
            </div>
        </div>

    );
};

export default Project;

