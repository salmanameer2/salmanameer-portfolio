import { FaLightbulb, FaPaintBrush, FaCode, FaReact, FaServer, FaMobileAlt, FaTools, FaNodeJs, FaStripe, FaVuejs, FaFire, FaDatabase, FaCloud, FaRobot } from 'react-icons/fa';

import profileImg from '../assets/profile.avif';
import profileImg2 from '../assets/profileImg2.avif';
import projectImg1 from '../assets/project1.avif';
import projectImg2 from '../assets/project2.avif';
import projectImg3 from '../assets/project3.avif';
import projectImg4 from '../assets/project4.avif';
import projectImg5 from '../assets/project5.avif';
import projectImg6 from '../assets/project6.avif';
import projectImg7 from '../assets/project7.avif';
import projectImg8 from '../assets/project8.avif';
import projectImg9 from '../assets/project9.avif';
import projectImg10 from '../assets/project10.avif';
import projectImg11 from '../assets/project11.avif';
import projectImg12 from '../assets/project12.avif';
import projectImg13 from '../assets/project13.avif';
import projectImg14 from '../assets/project14.avif';
import projectImg15 from '../assets/project15.avif';
import projectImg16 from '../assets/project16.avif';
import projectImg17 from '../assets/project17.avif';
import projectImg18 from '../assets/project18.avif';




export const assets = {
  profileImg, profileImg2,
}


export const aboutInfo = [
  {
    icon: FaLightbulb,
    title: 'Innovative',
    description: 'I love creating unique solutions to complex problems with cutting-edge technologies.',
    color: 'text-purple'
  },
  {
    icon: FaPaintBrush,
    title: 'Design Oriented',
    description: 'Beautiful design and user experience are at the heart of everything I create.',
    color: 'text-pink'
  },
  {
    icon: FaCode,
    title: 'Clean Code',
    description: 'I write maintainable, efficient code following best practices and modern patterns.',
    color: 'text-blue'
  }
];



export const skills = [
  {
    title: 'Frontend Development',
    icon: FaReact,
    description: 'Building responsive and interactive user interfaces with modern frameworks.',
    tags: ['HTMl', 'CSS', 'Java Script', 'React JS']
  },
  {
    title: 'Backend Development',
    icon: FaServer,
    description: 'Creating robust server-side applications and RESTful APIs.',
    tags: ['Node.js', 'Express JS']
  },
  {
    title: 'Database Management',
    icon: FaDatabase,
    description: 'Designing and optimizing databases for performance and scalability.',
    tags: ['MongoDB', 'Postman']
  },

  {
    title: 'Tools & Technologies',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my development workflow.',
    tags: ['Git & GitHub', 'Framer',]
  },
  {
    title: 'Web Hosting',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my developyment .',
    tags: ['Netlify', 'Versal']
  },
  {
    title: 'UI/UX ',
    icon: FaTools,
    description: 'Essential tools and technologies I use in my developyment .',
    tags: ['Tailwind CSS', 'BootStrap']
  }
];



export const projects = [
  {
    id: "project_password_generator",
    title: "Password Generator",
    description: "A Simple Random Password Generator App With AlphaNumeric And Symbols..",
    image: projectImg1,
    tech: ["React"],
    icons: [FaReact, FaNodeJs, FaDatabase, FaStripe],
    demo: "https://react-password-generator-ashy-nu.vercel.app/",
    code: "https://github.com/salmanameer2/React_Password-Generator",
  },
  {
    id: "project_weather_app",
    title: "Weather App",
    description: "A Simple Weather App That Show Real-Time Weather.",
    image: projectImg2,
    tech: ["React JS", "CSS", "API"],
    icons: [FaVuejs, FaFire, FaCloud, FaDatabase],
    demo: "https://react-myweatherapp.netlify.app/",
    code: "https://github.com/salmanameer2/React-JS-Weather-App",
  },
  {
    id: "project_redux_cart",
    title: "Add to Cart Redux Toolkit",
    description: "Add to Cart Using Redux ToolKit.",
    image: projectImg3,
    tech: ["React", "Tailwind CSS", "Redux ToolKit"],
    icons: [FaReact, FaDatabase],
    demo: "https://addtocart-reduxto.netlify.app/",
    code: "https://github.com/salmanameer2/React-Add-to-Cart-Redux-Toolkit-",
  },
  {
    id: "project_context_cart",
    title: "Add to Cart Context API",
    description: " Add To Cart Functionality Using Context API.",
    image: projectImg4,
    tech: ["React", "Tailwind CSS", "Context-API"],
    icons: [FaReact, FaCloud],
    demo: "https://react-add-to-cart-context-api.netlify.app/",
    code: "https://github.com/salmanameer2/React-Add-to-Cart-Context-API-",
  },
  {
    id: "project_todo_app",
    title: "Todo List App",
    description: "A Todo List App Using Redux ToolKit For Managing Daily Tasks On The Go.",
    image: projectImg5,
    tech: ["React", "Tailwind CSS", "Redux ToolKit"],
    icons: [FaReact, FaNodeJs, FaDatabase],
    demo: "https://react-todoapp-reduxtk.netlify.app/",
    code: "https://github.com/salmanameer2/React-Todo-App-Redux-Toolkit-",
  },
  {
    id: "project_router_dom",
    title: "React Router DOM",
    description: "Showcasing A Simple Routing Concept In React.",
    image: projectImg6,
    tech: ["React", "React Router DOM", "CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://reactjs-routerdom.netlify.app/",
    code: "https://github.com/salmanameer2/React-Router-DOM",
  },
  {
    id: "project_chat_app",
    title: "Chat App",
    description: "Real Time Chat App Whether Its About Texting or Sharing Media This ChatApp Is Just For You.",
    image: projectImg7,
    tech: ["React", "Node.js", "Web-Sockets", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://react-chat-app-socket-io-psi.vercel.app/",
    code: "https://github.com/salmanameer2/React-Chat-App-socket.io-",
  },
  {
    id: "project_mern_auth",
    title: "Mern Authentication",
    description: "Complete MERN Authentication App.",
    image: projectImg8,
    tech: ["React", "Node.js", "JWT", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "https://github.com/salmanameer2/Mern-Authentication-System-Frontend-",
  },
  {
    id: "project_expense_mgmt",
    title: "Expanse Management System",
    description: "Complete Expanse Management System A usefull Application for managing your daily expenses.",
    image: projectImg9,
    tech: ["React", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://react-expanse-mangement-app.vercel.app/login",
    code: "https://github.com/salmanameer2/React-Expanse-Mangement-App",
  },
  {
    id: "project_real_estate",
    title: "Real Estate Management System",
    description: "Complete Real Estate Management System with Admin and User Dashboards ",
    image: projectImg10,
    tech: ["React", "Tailwind CSS"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://react-real-estate-management-system.vercel.app/",
    code: "https://github.com/salmanameer2/React-Real-Estate-Management-System",
  },
  {
    id: "project_game_storm",
    title: "Game Storm Studio",
    description: "A Simple HomePage Clone Of Game Storm Studios Website .",
    image: projectImg11,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://gamestormstudios-clone.netlify.app/",
    code: "https://github.com/salmanameer2/Game-Storm-Studios-Clone-HomePage-HTML",
  },
  {
    id: "project_wunderlust_travels",
    title: "WunderLust Travels",
    description: "Simple And Basic Travel Website Using HTML CSS and JS.",
    image: projectImg12,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://wunderlust-travels.netlify.app/",
    code: "https://github.com/salmanameer2/Wunderlust-Travel-Website-HTML",
  },
  {
    id: "project_parallax_scroll",
    title: "Parallax Scrolling Animation",
    description: "Parallax Scrolling Animation Using HTML CSS and JS for Hero Section.",
    image: projectImg13,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://parallax-scroll-sample-html.netlify.app/",
    code: "https://github.com/salmanameer2/Parallax-Scroll-Sample-HTML",
  },
  {
    id: "project_zomato_clone",
    title: "Zomato Clone",
    description: "A Simple Zomato Clone Website Using HTML CSS and JS.",
    image: projectImg14,
    tech: ["HTML", "CSS", "JavaScript"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://zomato-myclone.netlify.app/",
    code: "https://github.com/salmanameer2/Zomato-clone",
  },
  {
    id: "project_portfolio",
    title: "Portfolio Website",
    description: "My Portfolio.",
    image: projectImg15,
    tech: ["React JS", "Tailwind CSS", "Framer Motion"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "#",
    code: "#",
  },
  {
    id: "project_ecommerce",
    title: "React E-Commerce App",
    description: "E-Commerce App",
    image: projectImg16,
    tech: ["React JS", "Tailwind CSS", "Framer Motion"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://react-e-commerce-app-ashen.vercel.app/",
    code: "https://github.com/salmanameer2/React-E-Commerce-App",
  },
  {
    id: "project_digital_agency",
    title: "React Digital Agency App",
    description: "A Complete Digital Agency App Using React JS and Tailwind CSS.",
    image: projectImg17,
    tech: ["React JS", "Tailwind CSS", "Framer Motion"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://react-digitalagency-app.netlify.app/",
    code: "https://github.com/salmanameer2/React-Digital-Agency-App",
  },
  {
    id: "project_digital_agency",
    title: "React Digital Agency App",
    description: "A Complete Digital Agency App Using React JS and Tailwind CSS.",
    image: projectImg18,
    tech: ["React JS", "Tailwind CSS", "Framer Motion"],
    icons: [FaRobot, FaReact, FaCloud],
    demo: "https://rentride-rentals.vercel.app/",
    code: "https://github.com/salmanameer2/React-Digital-Agency-App",
  },
];



