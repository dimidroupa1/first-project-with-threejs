import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
    // eslint-disable-next-line no-unused-vars
    clever_programmer,
    // eslint-disable-next-line no-unused-vars
    nazaweb,
    // eslint-disable-next-line no-unused-vars
    projectfs,
    // eslint-disable-next-line no-unused-vars
    uniswap,
    // eslint-disable-next-line no-unused-vars
    prospective,
    // eslint-disable-next-line no-unused-vars
    whatsapp
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Smart-contract developer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Founder",
      company_name: "ProjectFS",
      icon: projectfs,
      iconBg: "#383E56",
      date: "Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Searching for clients, managing operational issues, managing the development team.",
      ],
    },
    {
      title: "React.js Developer, Smart-Contract Developer, Back-end Developer ",
      company_name: "NazaWEb",
      icon: nazaweb,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Clever Programmer",
      icon: clever_programmer,
      iconBg: "#383E56",
      date: "March 2022 - Present",
      points: [
        "Developing web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Uniswap Clone",
      description:
        "Web3 project with which you can transfer money from one crypto-wallet to another.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: uniswap,
      source_code_link: "https://github.com/dimidroupa1/uniswap-clone-web3",
    },
    {
      name: "Prospective",
      description:
        "Web3 project is developed on the basis of the Tron blockchain on which you can buy NFTs and upgrade them to more expensive ones",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "solidity",
          color: "green-text-gradient",
        },
        {
          name: "web3",
          color: "pink-text-gradient",
        },
      ],
      image: prospective,
      source_code_link: "https://github.com/dimidroupa1",
    },
    {
      name: "WhatsApp Clone",
      description:
        "A project where you can communicate with people through messages",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "firebase",
          color: "green-text-gradient",
        },
        {
          name: "styled-components",
          color: "pink-text-gradient",
        },
      ],
      image: whatsapp,
      source_code_link: "https://github.com/dimidroupa1/whatsapp-clone",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
  