import { React } from 'react'
import { useEffect } from 'react';
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { skills } from '../../Portfolio_details';
import Skillcard from './Skillcard';

import './Skill.css'
function Skills() {
    const controls = useAnimation();
    const [ref, inView] = useInView({ triggerOnce: true });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const skillVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
    };
    return (
        <section id="skills">
            <h1 className='Heading'>Skills</h1>
            <motion.div
                className="skill-map"
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={containerVariants}
            >
                {skills.map((skill, index) => (
                    <motion.div key={index} variants={skillVariants}>
                        <Skillcard skill={skill} />
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default Skills