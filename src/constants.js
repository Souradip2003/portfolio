// ==========================
// Skills Section
// ==========================

import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import cppLogo from './assets/tech_logo/cpp.png';
import cLogo from './assets/tech_logo/c.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import awsLogo from './assets/tech_logo/firebase.png'; // using firebase icon placeholder for AWS
import linuxLogo from './assets/tech_logo/postgre.png'; // using postgre icon placeholder for Linux
import restLogo from './assets/tech_logo/postman.png';

// Education Logos
import vitLogo from './assets/education_logo/gla_logo.png'; 
import kpsLogo from './assets/education_logo/bsa_logo.png'; 
import dpsLogo from './assets/education_logo/vps_logo.png';

// Company Logos
import ivlLogo from './assets/company_logo/agc_logo.png'; 
import namasteLogo from './assets/company_logo/newtonschool_logo.png';

// Project Logos (reusing placeholders)
import fintideLogo from './assets/work_logo/github_det.png';
import carRentalLogo from './assets/work_logo/cs_prep.png';

export const SkillsInfo = [
  {
    title: 'Languages',
    skills: [
      { name: 'Java', logo: javaLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'C', logo: cLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'SQL', logo: mysqlLogo },
    ],
  },
  {
    title: 'Technologies',
    skills: [
      { name: 'React.js', logo: reactjsLogo },
      { name: 'Node.js', logo: nodejsLogo },
      { name: 'Express.js', logo: expressjsLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'AWS', logo: awsLogo },
      { name: 'Linux', logo: linuxLogo },
      { name: 'REST APIs', logo: restLogo },
    ],
  },
];

export const experiences = [
  {
    id: 0,
    img: ivlLogo,
    role: "IT Support Intern",
    company: "IVL Dhunseri Pvt. Ltd.",
    date: "June 2025 – July 2025",
    desc: "Provided end-user support and resolved hardware/software issues, improving productivity by 20%. Ensured high system uptime through proactive monitoring and maintenance. Contributed to SOP documentation to streamline workflows, reducing resolution time by 15%.",
    skills: [
      "Troubleshooting", "System Maintenance", "Documentation"
    ],
  },
  {
    id: 1,
    img: namasteLogo,
    role: "IT Infrastructure Intern",
    company: "Namaste India",
    date: "May 2024 – June 2024",
    desc: "Assisted in software installation, maintenance, and troubleshooting tasks, improving support efficiency by 40%. Contributed to MERN stack development by implementing features and analyzing requirements. Collaborated in Agile teams using Git, reducing integration issues by 30%.",
    skills: [
      "MERN Stack", "Agile", "Git", "Troubleshooting"
    ],
  },
];

export const education = [
  {
    id: 0,
    img: vitLogo,
    school: "Vellore Institute of Technology, Vellore",
    date: "2022 – 2026",
    grade: "CGPA: 8.73",
    desc: "B.Tech in Computer Science Engineering with coursework in OOP (Java), Advanced DSA, DBMS, OS, CN, Cloud Computing, AWS, and Software Engineering.",
    degree: "B.Tech in Computer Science Engineering",
  },
  {
    id: 1,
    img: kpsLogo,
    school: "Kalyani Public School (CBSE)",
    date: "2022",
    grade: "Score: 89%",
    desc: "Completed Class XII with Physics, Chemistry, Mathematics and Computer Science.",
    degree: "Class XII (CBSE)",
  },
  {
    id: 2,
    img: dpsLogo,
    school: "Delhi Public School Megacity, Kolkata (ICSE)",
    date: "2020",
    grade: "Score: 95%",
    desc: "Completed Class X with strong academic performance in Science and Computer Applications.",
    degree: "Class X (ICSE)",
  },
];

export const projects = [
  {
    id: 0,
    title: "Fintide — Crypto Market Tracker",
    description:
      "Developed a full-stack responsive web app for real-time crypto tracking and currency conversion using REST APIs, Context API, and chart-based data visualization.",
    image: fintideLogo,
    tags: ["React", "Node.js", "Express", "MongoDB", "CoinGecko API"],
    github: "https://github.com/Souradip2003", // replace if you push repo
    webapp: "https://fintide.vercel.app/",
  },
  {
    id: 1,
    title: "Car Rental System",
    description:
      "Built a car rental platform with booking and management features, using MERN stack with Vite and ImageKit API for optimized image handling.",
    image: carRentalLogo,
    tags: ["React", "Vite", "Node.js", "MongoDB", "Express", "ImageKit API"],
    github: "https://github.com/Souradip2003", // replace if you push repo
    webapp: "https://car-rental-ivory-eta.vercel.app/",
  },
];

