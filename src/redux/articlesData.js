import article1 from "../assets/images/article1.png";
import article2 from "../assets/images/article2.png";
import article3 from "../assets/images/article3.png";
import article4 from "../assets/images/article4.png";
import article5 from "../assets/images/article5.png";
import article6 from "../assets/images/article6.png";
import article7 from "../assets/images/article7.png";
import article8 from "../assets/images/article8.png";
import article9 from "../assets/images/article9.png";
import article10 from "../assets/images/article10.png";
import { sections } from "./sections";

const rawArticles = [
    {
        id: 1,
        title: "Bill Walsh leadership lessons",
        image: article1,
        author: "Alec Whitten",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        categories: [
            { id: 1, category: "Leadership" },
            { id: 2, category: "Management" },
        ]
    },
    {
        id: 2,
        title: "PM mental models",
        image: article2,
        author: "Demi WIlkinson",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Mental models are simple expressions of complex processes or relationships.",
        categories: [
            { id: 1, category: "Product" },
            { id: 2, category: "Research" },
            { id: 3, category: "Frameworks" }
        ]
    },
    {
        id: 3,
        title: "What is Wireframing?",
        image: article3,
        author: "Candice Wu",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" }
        ]
    },
    {
        id: 4,
        title: "How collaboration makes us better designers",
        image: article4,
        author: "Natali Craig",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Collaboration can make our teams stronger, and our individual designs better.",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" }
        ]
    },
    {
        id: 5,
        title: "Our top 10 Javascript frameworks to use",
        image: article5,
        author: "Drew Cano ",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "JavaScript frameworks make development easy with extensive features and functionalities.",
        categories: [
            { id: 1, category: "Software Development" },
            { id: 2, category: "Tools" },
            { id: 3, category: "SaaS" }
        ]
    },
    {
        id: 6,
        title: "Podcast: Creating a better CX Community",
        image: article6,
        author: "Orlando Diggs",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Starting a community doesn’t need to be complicated, but how do you get started?",
        categories: [
            { id: 1, category: "Podcasts" },
            { id: 2, category: "Customer Success" }
        ]
    },
    {
        id: 7,
        title: "Grid system for better Design User Interface",
        image: article7,
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Interface" }
        ]
    },
    {
        id: 8,
        title: "UX review presentations",
        image: article8,
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" },
            { id: 3, category: "Presentation" }
        ]
    },
    {
        id: 9,
        title: "Migrating to Linear 101",
        image: article9,
        author: "Phoenix Baker",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" }
        ]
    },
    {
        id: 10,
        title: "Building your API Stack",
        image: article10,
        author: "Lana Steiner ",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" }
        ]
    },
    {
        id: 11,
        title: "Bill Walsh leadership lessons",
        image: article1,
        author: "Alec Whitten",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
        categories: [
            { id: 1, category: "Leadership" },
            { id: 2, category: "Management" },
        ]
    },
    {
        id: 12,
        title: "PM mental models",
        image: article2,
        author: "Demi WIlkinson",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Mental models are simple expressions of complex processes or relationships.",
        categories: [
            { id: 1, category: "Product" },
            { id: 2, category: "Research" },
            { id: 3, category: "Frameworks" }
        ]
    },
    {
        id: 13,
        title: "What is Wireframing?",
        image: article3,
        author: "Candice Wu",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" }
        ]
    },
    {
        id: 14,
        title: "How collaboration makes us better designers",
        image: article4,
        author: "Natali Craig",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Collaboration can make our teams stronger, and our individual designs better.",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" }
        ]
    },
    {
        id: 15,
        title: "Our top 10 Javascript frameworks to use",
        image: article5,
        author: "Drew Cano ",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "JavaScript frameworks make development easy with extensive features and functionalities.",
        categories: [
            { id: 1, category: "Software Development" },
            { id: 2, category: "Tools" },
            { id: 3, category: "SaaS" }
        ]
    },
    {
        id: 16,
        title: "Podcast: Creating a better CX Community",
        image: article6,
        author: "Orlando Diggs",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Starting a community doesn’t need to be complicated, but how do you get started?",
        categories: [
            { id: 1, category: "Podcasts" },
            { id: 2, category: "Customer Success" }
        ]
    },
    {
        id: 17,
        title: "Grid system for better Design User Interface",
        image: article7,
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate.",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Interface" }
        ]
    },
    {
        id: 18,
        title: "UX review presentations",
        image: article8,
        author: "Olivia Rhye",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "How do you create compelling presentations that wow your colleagues and impress your managers?",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" },
            { id: 3, category: "Presentation" }
        ]
    },
    {
        id: 19,
        title: "Migrating to Linear 101",
        image: article9,
        author: "Phoenix Baker",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "Linear helps streamline software projects, sprints, tasks, and bug tracking. Here’s how to get...",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" }
        ]
    },
    {
        id: 20,
        title: "Building your API Stack",
        image: article10,
        author: "Lana Steiner ",
        date: "1 Jan 2023",
        day: "Sunday ",
        abstract: "The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...",
        categories: [
            { id: 1, category: "Design" },
            { id: 2, category: "Research" }
        ]
    },
];
const articlesData = rawArticles.map(article => ({
    ...article,
    sections: sections(),
}));


export default articlesData;


