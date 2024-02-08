import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";
import Link from "next/link";
export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "C Language",
    Image: "/clang.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  /*}
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },*/

  /*
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  */
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  /*
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
*/,
  
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "wordpress",
    Image: "/word2.png",
    width: 80,
    height: 80,
  },
  /*
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
*/,
];

export const Socials = [
  {
    name: "Discord",
    src: "/instagram.svg",
    link:"https://www.instagram.com/mr.harshu_014?igsh=cWJyaDU4dGszbXZm"
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
   

  },
  {
    name: "Instagram",
    src: "/discord.svg",
  },
];
export const Projects = [
  {
    title: "Recipe Finder- REACT Application ",
    text: "Recipe Finder built on React application using using api for finding recipe and ingridients for any recipes .",
    src: "/hii.png",
  },
  {
    title: "E-commerce Website",
    text: "E-Commerce website for promoting business this website was fully customised ,Easy to use & With Payemnt Gateway Mode Inbuilt.",
    src: "/hii2.png",
  },
  {
    title: "Animated- Portfolio",
    text: "This is my own portfolio  BUilt By Next js application with amazing animation. Hope you liked it.",
    src: "/hii3.png",
  },
  {
    title: "Amazon-Clone",
    text: "Amazon Clone - This is a clone website which can redirect it to original amazon account.",
    src: "/uii.png",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];