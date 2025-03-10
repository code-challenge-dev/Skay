import {
    HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeIcon, TsIcon, NextIcon, MysqlIcon, MongoIcon, GdriveIcon, SocketIoIcon, RestApiIcon, PhpIcon, ViteIcon, NextAuthIcon, ReduxIcon, TailwindIcon, ZustandIcon, AstroIcon, NanostoresIcon, D3JsIcon, ReactQueryIcon, EdgeStoreIcon, ExpressIcon, PostgreSQLIcon, AngularIcon
} from "../assets/Icons"

import {
    ClimateLogo
} from "../assets/Logos"

import {
    MunimAccountShots, LabGrownShots, BridiShots, CareMagnusShots, BoatBookingShots, RoccaShots
} from "../assets/Shots"

import {
    ClimateMockup
} from "../assets/Mockup"


type ProjectsListType = {
    id: string,
    Name: string,
    ShortDesc: string,
    Desc: string,
    Logo: ImageMetadata,
    Shot: ImageMetadata,
    Mockup: ImageMetadata,
    Theme: string,
    Status: string,
    Link: string,
    Source: string,
    Demo?: {
        email: string,
        password: string
    },
    Tech: {
        title: string,
        description: string,
        icon: ImageMetadata
    }[],
    features: {
        title: string,
        description: string
    }[],
    hideProject: boolean,
    LogoSize: number,
    versions: {
        title: string,
        version: string
    }[]
}[]

const TechInfo = {
    HTML: {
        title: "HTML",
        description: "HyperText Markup Language for creating the structure of web pages.",
        icon: HtmlIcon
    },
    CSS: {
        title: "CSS",
        description: "Cascading Style Sheets for styling the presentation of HTML documents.",
        icon: CssIcon
    },
    JavaScript: {
        title: "JavaScript",
        description: "High-level scripting language for adding interactivity to web pages.",
        icon: JsIcon
    },
    React: {
        title: "React",
        description: "JavaScript library for building user interfaces with reusable components.",
        icon: ReactIcon
    },
    Node: {
        title: "Node.js",
        description: "JavaScript runtime for server-side applications, enabling scalable and event-driven architecture.",
        icon: NodeIcon
    },
    TypeScript: {
        title: "TypeScript",
        description: "A superset of JavaScript adding static typing for building large-scale applications with enhanced maintainability and tooling support.",
        icon: TsIcon
    },
    Next: {
        title: "Next.js",
        description: "A React framework for server-side rendering, static site generation, and routing, offering improved performance and SEO optimization.",
        icon: NextIcon
    },
    MySQL: {
        title: "MySQL",
        description: "Open-source relational database management system for storing and managing structured data.",
        icon: MysqlIcon
    },
    MongoDB: {
        title: "MongoDB",
        description: "NoSQL database offering flexibility and scalability for storing and managing data efficiently.",
        icon: MongoIcon
    },
    GDrive: {
        title: "Google Drive API",
        description: "RESTful API for integrating Google Drive functionalities such as file storage and synchronization into applications.",
        icon: GdriveIcon
    },
    SocketIO: {
        title: "Socket.IO",
        description: "Real-time bidirectional communication library for building interactive web applications.",
        icon: SocketIoIcon
    },
    RESTAPI: {
        title: "REST API",
        description: "Architectural style for designing networked applications with standardized HTTP operations.",
        icon: RestApiIcon
    },
    PHP: {
        title: "PHP",
        description: "Server-side scripting language for building dynamic web applications.",
        icon: PhpIcon
    },
    Vite: {
        title: "Vite",
        description: "Modern build tooling for web development with rapid startup and hot module replacement.",
        icon: ViteIcon
    },
    NextAuth: {
        title: "NextAuth.js",
        description: "Authentication library designed specifically for Next.js applications, providing robust authentication features and seamless integration.",
        icon: NextAuthIcon
    },
    Redux: {
        title: "Redux",
        description: "Predictable state management library for JavaScript applications, enabling developers to write consistent, scalable code with ease.",
        icon: ReduxIcon
    },
    TailwindCSS: {
        title: "Tailwind CSS",
        description: "A utility-first CSS framework providing pre-designed, atomic-level utility classes for rapid UI development with minimal CSS code.",
        icon: TailwindIcon
    },
    Zustand: {
        title: "Zustand",
        description: "Tiny, fast, and scalable state management for React applications, providing a simple and intuitive API.",
        icon: ZustandIcon
    },
    Astro: {
        title: "Astro",
        description: "Frontend framework for streamlined development, integrating seamlessly with popular tools to create fast and modern websites with minimal configuration overhead.",
        icon: AstroIcon
    },
    NanoStores: {
        title: "NanoStores",
        description: "Lightweight state management library for JavaScript applications, designed for simplicity and performance to simplify state management and improve application responsiveness.",
        icon: NanostoresIcon
    },
    D3: {
        title: "D3.js",
        description: "Versatile JavaScript library for data visualization, enabling developers to create dynamic, interactive graphics and charts by binding data to DOM elements.",
        icon: D3JsIcon
    },
    ReactQuery: {
        title: "React Query",
        description: "React library for managing, caching, and synchronizing server state in web applications, providing a powerful and intuitive API for fetching and updating data.",
        icon: ReactQueryIcon
    },
    EdgeStore: {
        title: "EdgeStore",
        description: "EdgeStore is an open-source file storage service, designed for scalability and performance, with efficient updates and minimal API.",
        icon: EdgeStoreIcon
    },
    Express: {
        title: "Express",
        description: "Express.js (or simply Express) is a fast, minimalist, and flexible web application framework for Node.js",
        icon: ExpressIcon
    },
    PostgreSQL: {
        title: "PostgreSQL",
        description: "PostgreSQL is a powerful, open-source relational database management system (RDBMS) known for its performance, reliability, and scalability.",
        icon: PostgreSQLIcon
    },
    Angular: {
        title: "Angular",
        description: "Angular is a popular TypeScript-based web framework developed by Google.",
        icon: AngularIcon
    }
};

// Common Features List
const FeatureList = {
    Responsive: {
        title: "Responsive Design",
        description: "Enjoy a seamless experience across devices with a responsive design that adapts to various screen sizes and orientations."
    },
    SEO: {
        title: "SEO Optimization",
        description: "Crafted with SEO best practices, ensuring optimal visibility on search engines. From keyword-rich content to streamlined meta tags and efficient site architecture."
    }
}

export const ProjectsList: ProjectsListType = [
    {
        id: "mimum-account",
        Name: "Mimum Account",
        ShortDesc: "To build Indian Accouting software for manage day to day activity regarding accounting as well as inventory management with batching.",
        Desc: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        Logo: ClimateLogo,
        Shot: MunimAccountShots,
        Mockup: ClimateMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://app.themunim.com/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [TechInfo.React, TechInfo.RESTAPI, TechInfo.Node, TechInfo.Express, TechInfo.PostgreSQL],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    },
    {
        id: "lab-brown",
        Name: "Lab Brown",
        ShortDesc: "Project goal is to build ecommerce platform to book order about labgrown diamond.",
        Desc: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        Logo: ClimateLogo,
        Shot: LabGrownShots,
        Mockup: ClimateMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://parinlabgrown.com",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [TechInfo.HTML, TechInfo.CSS, TechInfo.React, TechInfo.RESTAPI, TechInfo.Node,],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    },
    {
        id: "bridi-horse",
        Name: "Bridi Horse",
        ShortDesc: "BRIDL offers a simple, safe, and transparent sales experience.",
        Desc: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        Logo: ClimateLogo,
        Shot: BridiShots,
        Mockup: ClimateMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://www.bridl.co/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [TechInfo.Node, TechInfo.MongoDB, TechInfo.Angular],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    },
    {
        id: "care-magnus",
        Name: "Care Magnus",
        ShortDesc: "CareMagnus is highy modular, scalable and has been designed keeping in view the needs of care delivery through various channels. ",
        Desc: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        Logo: ClimateLogo,
        Shot: CareMagnusShots,
        Mockup: ClimateMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://www.caremagnus.com/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [TechInfo.React, TechInfo.Node, TechInfo.MongoDB, TechInfo.Express],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    },
    {
        id: "rocca-box",
        Name: "Rocca Box",
        ShortDesc: "RoccaBox is a real estate mobile appltion that makes the property searching process a lot smoother. It introduces diverse services and makes it super easy for users to avail best property.",
        Desc: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        Logo: ClimateLogo,
        Shot: RoccaShots,
        Mockup: ClimateMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://www.roccabox.com/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [TechInfo.MySQL, TechInfo.PHP],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    },
    {
        id: "boat-booking",
        Name: "Boat Booking",
        ShortDesc: "This project involved the development of a comprehensive boat booking and management website from scratch.",
        Desc: "CliMate is a user friendly weather app that keeps you informed about the current conditions of any location. With CliMate, you can effortlessly access accurate weather updates for any place you choose. Utilizing geolocation support, it can even detect your current location, ensuring you always have the most precise weather information at your fingertips. Stay informed and be prepared with CliMate.",
        Logo: ClimateLogo,
        Shot: BoatBookingShots,
        Mockup: ClimateMockup,
        Theme: "#fff",
        Status: "completed",
        Link: "https://grababoat.com/",
        Source: "https://github.com/ChiragChrg/CliMate",
        Tech: [TechInfo.React, TechInfo.Node, TechInfo.MongoDB, TechInfo.MySQL, TechInfo.PHP],
        features: [
            FeatureList.Responsive,
            FeatureList.SEO,
        ],
        hideProject: false,
        LogoSize: 55,
        versions: [
            { title: "Vortexa", version: "2" },
            { title: "CliMate", version: "1" },
        ]
    },


]