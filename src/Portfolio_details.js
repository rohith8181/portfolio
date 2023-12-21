const header = {
    title: 'RP.',
}

const about = {
    name: 'Rohith Perala',
    description:
        'Hello! I am a final year student at IIITDMJ, specializing in Computer Science and Engineering. I am a passionate programmer and developer, with a keen interest in web development. As a quick learner, I am eager to join Software Engineer Industry to contribute my skills and make a meaningful impact.',
    resume: 'https://drive.google.com/file/d/1UW7g75R0MwiDRL2reUhuHzG1tq8SUVlL/view?usp=sharing',
    social: {
        linkedin: 'https://www.linkedin.com/in/perala-rohith-9b0a35258/',
        github: 'https://github.com/rohith8181',
    },
}

const projects = [
    {
        description:
            'Student Support - Developed an innovative web platform to facilitate seamless communication and collaboration among college students, enabling them to post questions, provide answers, and share informative content, including petitions.',
        sourceCode: 'https://github.com/rohith8181/PRfrontend',
        livePreview: 'https://studentsupport.netlify.app/',
        imagename: 'project1.jpg',
    },
    {
        description:
            'CodingBlocks is a responsive web app. Enabling users to read and write articles through a user-friendly interface. The design emphasizes simplicity and cleanliness for efficient code and improved website speed. An admin portal streamlines tasks like article approval and privilege management.',
        sourceCode: 'https://github.com/rohith8181/codingblocks',
        livePreview: 'https://github.com/rohith8181/codingblocks',
        imagename: 'project2.png',
    },
    {
        description:
            "The portfolio website project is a dynamic showcase of skills and achievements. Built with React.js, it features sections such as 'About Me,' 'Portfolio Showcase' for projects, 'Skills,' and a downloadable 'Resume/CV.' The design is user-friendly and responsive, offering a simple way for visitors to connect through the 'Contact' section.",
        sourceCode: 'https://github.com/rohith8181/portfolio',
        livePreview: 'https://rohithperala.netlify.app/',
        imagename: 'project3.jpg',
    },
]

const skills = [
    "react.svg",
    "js.svg",
    "html.svg",
    "css.svg",
    "nodejs.svg",
    "express.svg",
    "bootstrap.svg",
    "git.svg",
    "github.svg",
    "mongodb.svg",
    "tailwind.svg",
    "SQL.svg"
];

const contact = {
    email: 'rohithperala81@gmail.com',
}
const intro = [
    {
        id: 1,
        title: "High School",
        subtitle: "Ekalvalya High School",
        date: "2017 - 2018",
        description: "A high school education with a '9.0 CGPA' signifies outstanding academic performance, showcasing consistent excellence across various subjects throughout the high school years.",
    },
    {
        id: 2,
        title: "Intermidiate",
        subtitle: "Narayana Junior College",
        date: "2018 - 2020",
        description: "Achieving a remarkable score of 966 out of 1000 marks in the intermediate level, this individual has demonstrated an exceptional grasp of the curriculum Including Maths, Physics, Chemistry.",
    },
    {
        id: 3,
        title: "",
        subtitle: "Jee Mains",
        date: "2020",
        description: "Scoring a percentile of 98.5 in JEE Mains is a significant achievement for me, reflecting the result of my persistent hard work and dedication.This high percentile opens up the possibility of securing a seat at a National importance Institute, marking a major milestone in my academic journey.",
    },
    {
        id: 4,
        title: "B.Tech",
        subtitle: "IIITDM Jabalpur",
        date: "2020 - present",
        description: "Embarking on a journey in the field of technology, I am currently pursuing a Bachelor of Technology(B.Tech) degree at the Indian Institute of Information Technology Design and Manufacturing Jabalpur(IIITDMJ), specializing in Computer Science and Engineering(CSE).",
    },
]

export { header, about, projects, skills, contact, intro }
