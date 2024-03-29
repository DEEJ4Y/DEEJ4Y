import { assetPrefix } from "../../next.config";

// People I have worked with
const AbhayDixit = {
  name: "Abhay Dixit",
  url: "https://www.linkedin.com/in/abhay-dixit-4a519a204/",
};

const AmishaJaiswal = {
  name: "Amisha Jaiswal",
  url: "https://www.linkedin.com/in/amisha-jaiswal-8532b1169/",
};

const DeeptadipMondal = {
  name: "Deeptadip Mondal",
  url: "https://www.linkedin.com/in/deeptadip-mondal-37410b1b8/",
};

const DevanshiKartik = {
  name: "Devanshi Karthik",
  url: "https://www.linkedin.com/in/devanshi-karthik/",
};

const DevanshiMusalgaonkar = {
  name: "Devanshi Musalgaonkar",
  url: "https://www.linkedin.com/in/devanshimusalgaonkar/",
};

const DhruvPandoh = {
  name: "Dhruv Pandoh",
  url: "https://www.linkedin.com/in/dhruv-pandoh-52a39420b/",
};

const HarshGupta = {
  name: "Harsh Gupta",
  url: "https://www.linkedin.com/in/harsh-gupta-694b93147/",
};

const KartikBansal = {
  name: "Kartik Bansal",
  url: "https://www.linkedin.com/in/kartik-bansal77/",
};

const KartikTata = {
  name: "Kartik Tata",
  url: "https://www.linkedin.com/in/kartik-tata-47075b223/",
};

const KussagraPathak = {
  name: "Kussagra Pathak",
  url: "https://www.linkedin.com/in/kush11251/",
};

const MayukhMousamMishra = {
  name: "Mayukh Mousam Mishra",
  url: "https://www.linkedin.com/in/mayukh-mousam-mishra-227ab218b/",
};

const MohitSharma = {
  name: "Mohit Sharma",
  url: "https://www.linkedin.com/in/mohit-sharma-a792901b8/",
};

const RaghavSharma = {
  name: "Raghav Sharma",
  url: "https://www.linkedin.com/in/raghavsharma1299/",
};

const RajMukherjee = {
  name: "Raj Mukherjee",
  url: "https://www.linkedin.com/in/raj-mukherjee-28647a218/",
};

const SarthakSachdeva = {
  name: "Sarthak Sachdeva",
  url: "https://www.linkedin.com/in/sarthak-sachdeva-748b17222",
};

const SudhanshuBasuRoy = {
  name: "Sudhanshu Basu Roy",
  url: "https://www.linkedin.com/in/sudhanshu-basu-roy-b194881b1/",
};

const VibhuJain = {
  name: "Vibhu Jain",
  url: "https://github.com/VibhuJ01",
};

const YashGoel = {
  name: "Yash Goel",
  url: "https://www.linkedin.com/in/yash-goel-3064381a0",
};

/** Project format
 {
    name: "",
    description: [""],
    with: [],
    imageUrl: "",
    link: "",
    category: "",
    tags: [""],
    major: false,
    upcoming: false,
    completed: true,
    repository: {platform: "", url: ""},
    language: "javascript",
  },
 */

// List of my projects
const projects = [
  {
    name: "Product Website",
    with: [],
    description: [
      "I am currently building a product website for an organization. I cannot disclose the name of the organization or the product as yet.",
      "The website is made with Next.js using static HTML export.",
    ],
    imageUrl: false,
    link: false,
    category: "freelance",
    tags: ["frontend", "next"],
    major: false,
    upcoming: true,
    completed: false,
    repository: { platform: "bitbucket", url: false },
    language: "javascript",
  },
  {
    name: "Event Management App",
    with: [DevanshiKartik, DevanshiMusalgaonkar, HarshGupta],
    description: [
      "Worked on the building multiple RESTful APIs for the app using ExpressJS.",
      "APIs included authorization with Firebase, user defined custom roles, QR Code generation, Certificate Generation, Dynamic webpage generation from user data and basic CRUD operations.",
      "API documentation was done using Postman.",
    ],
    imageUrl: false,
    link: "https://documenter.getpostman.com/view/13595623/Tzm9jEer",
    category: "team",
    tags: ["backend", "ejs", "express", "mongodb", "mongoose", "node"],
    major: false,
    upcoming: false,
    completed: false,
    notCompletedReason:
      "The frontend team failed to develop the Flutter application.",
    repository: { platform: "gitlab", url: false },
    language: "javascript",
  },
  {
    name: "Content Management Panel",
    description: [
      "Worked on building out a series of webpages and integrating APIs to update content in a web application.",
      "The pages were made using HTML, CSS, Bootstrap and plain Javascript.",
    ],
    with: [SudhanshuBasuRoy, KartikBansal, DevanshiMusalgaonkar],
    imageUrl: false,
    link: false,
    category: "team",
    tags: ["frontend", "bootstrap", "api"],
    major: false,
    upcoming: false,
    completed: true,
    notCompletedReason: false,
    repository: { platform: "gitlab", url: false },
    language: "javascript",
  },
  {
    name: "Resonate 2021 Hackathon",
    description: [
      "Finished in the top 10 teams, in an all India hackathon with over 200 teams.",
      "Worked on the backend in building out RESTful APIs using Express and Mongoose.",
    ],
    with: [RaghavSharma, MayukhMousamMishra, AmishaJaiswal, HarshGupta],
    imageUrl: "/certificates/Resonate_Certificate.png",
    link: `${
      assetPrefix
        ? assetPrefix + "/certificates/Resonate_Certificate.png"
        : "/certificates/Resonate_Certificate.png"
    }`,
    category: "team",
    tags: ["backend", "node", "express", "mongodb", "mongoose"],
    isHackathon: true,
    major: false,
    upcoming: false,
    completed: true,
    notCompletedReason: false,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/reach-app-backend",
    },
    language: "javascript",
  },
  {
    name: "Salzaa",
    description: [
      "A startup. Worked on making the APIs and rebuilding the web app.",
      "RESTful APIs are built with Express and Mongoose. Testing with Mocha and Chai.",
    ],
    with: [DhruvPandoh, KussagraPathak],
    imageUrl: "/screenshots/salzaa.jpg",
    link: "https://salzaa-seller.vercel.app/",
    category: "team",
    tags: [
      "full stack",
      "startup",
      "node",
      "express",
      "mongoose",
      "mongodb",
      "react",
      "next",
      "mantine",
      "mocha",
      "chai",
    ],
    major: false,
    upcoming: false,
    completed: false,
    notCompletedReason: false,
    repository: {
      platform: "github",
      url: false,
    },
    language: "javascript",
  },
  {
    name: "Secrets",
    description: [
      "A project to learn and understand security and authentication.",
      "Learnt how to implement username and password jwt authentication and Google sign in with passport.js, database encryption and password hashing.",
    ],
    with: [],
    imageUrl: "/screenshots/secrets.jpg",
    link: false,
    category: "learning",
    tags: ["full stack", "node", "passportjs", "express", "ejs"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/Authentication-Secrets",
    },
    language: "javascript",
  },
  {
    name: "Bootstrap",
    description: [
      "A project to learn to build responsive websites with Bootstrap.",
      "Learnt how to use Bootstrap components, grid system and utility classes.",
    ],
    with: [],
    imageUrl: "/screenshots/bootstrap-learning.png",
    link: false,
    category: "learning",
    tags: ["frontend", "bootstrap"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
  },
  {
    name: "TinDog",
    description: [
      "A responsive website made with Bootstrap.",
      "Used Bootstrap components, grid and utility classes.",
    ],
    with: [],
    imageUrl: "/screenshots/tindog.jpg",
    link: "https://deej4y.github.io/TinDog/",
    category: "learning",
    tags: ["frontend", "bootstrap", "responsive"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: "github", url: "https://github.com/DEEJ4Y/TinDog" },
  },
  {
    name: "Backend Calculator",
    description: [
      "A calculator project to learn to use Express.",
      "Learnt express routing, request handling, static file serving and redirects.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["full stack", "express"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/Calculator_backend",
    },
  },
  {
    name: "Canvas Tutorial",
    description: [
      "MDN's Canvas tutorial. Learnt the basics of rendering 2d graphics with a canvas.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "javascript"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Simple Certificate Generator",
    description: [
      "A Javascript class to render canvas certificates.",
      "Certificates can be generated and downloaded with options to change text, signature, fonts and a background image for certificate designs.",
    ],
    with: [],
    imageUrl: "/screenshots/simple-certificate-generator.jpg",
    link: "https://deej4y.github.io/simple-certificate-generator/",
    category: "personal",
    tags: ["frontend", "canvas"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/simple-certificate-generator",
    },
    language: "javascript",
  },
  {
    name: "Class Based REST API",
    description: [
      "A mongoose-express project template to build REST APIs quickly.",
      "Uses Javascript classes for generating routes, controllers and database calls for CRUD operations for your mongoose models.",
    ],
    with: [],
    imageUrl: "/screenshots/class-based-rest-api.jpg",
    link: "https://deej4y.github.io/class-based-rest-api/",
    category: "personal",
    tags: ["backend", "api"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/class-based-rest-api",
    },
    language: "javascript",
  },
  {
    name: "COVID Oxygen Tracker",
    description: [
      "Keep track of your oxygen levels.",
      "A simple React app that stores your SpO2 readings in localstorage.",
    ],
    with: [],
    imageUrl: "/screenshots/covid-spo2-log.jpg",
    link: "http://covid-spo2-log.davidjoseph.me/",
    category: "personal",
    tags: ["frontend", "react", "recharts"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/covid-spo2-log",
    },
    language: "javascript",
  },
  {
    name: "CSS Challenge - Positioning",
    description: [
      "A CSS challenge from The Complete 2020 Web Development Bootcamp.",
      "Gained a strong understanding of how the different CSS position types work.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "css",
  },
  {
    name: "CSS - My Site",
    description: [
      "A CSS portfolio project from The Complete 2020 Web Development Bootcamp.",
      "One of my previous personal websites.",
    ],
    with: [],
    imageUrl: "/screenshots/css-my-site.jpg",
    link: "https://deej4y.github.io/Stylized-Personal-Website/",
    category: "learning",
    tags: ["frontend", "css"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/Stylized-Personal-Website/",
    },
    language: "javascript",
  },
  {
    name: "My Personal Website",
    description: [
      "My current personal website.",
      "The website is made with Next.js and Mantine, a react component library. It is the second version that I have done from scratch.",
      "My biggest weakness is my design skills, I don't have any. Developing a design given to me is no problem at all, but I cannot make a design on my own.",
      "Big thanks to all the UI libraries out there for making lives of developers easier, especially Bootstrap (react-bootstrap as well) and Mantine.",
    ],
    with: [],
    imageUrl: false,
    link: "https://deej4y.github.io/DEEJ4Y/",
    category: "personal",
    tags: ["frontend", "next", "mantine"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/DEEJ4Y/",
    },
    language: "javascript",
  },
  {
    name: "DevCamper",
    description: [
      "A learning project to make RESTful APIs in a modular way.",
      "Understood the usefulness of the model-view-controller-router model and implemented jwt authentication with argon2 hashing for passwords.",
    ],
    with: [],
    imageUrl: false,
    link: "https://github.com/DEEJ4Y/DevCamper",
    category: "learning",
    tags: ["backend", "api"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/DevCamper",
    },
    language: "javascript",
  },
  {
    name: "DOM Manipulation",
    description: [
      "A project to learn how the DOM works.",
      "Learnt about events and manipulating the DOM.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "dom"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Blog Website Challenge",
    description: [
      "A challenge from The Complete 2020 Web Development Bootcamp.",
      "Developed a blog website using express and the ejs templating engine.",
    ],
    with: [],
    imageUrl: "/screenshots/ejs-blog.jpg",
    link: false,
    category: "learning",
    tags: ["full stack", "node", "ejs", "express"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/EJS-BlogWebsiteChallenge",
    },
    language: "javascript",
  },
  {
    name: "EJS - To Do List",
    description: [
      "A simple todo app using EJS.",
      "Learnt how to use the EJS templating engine to render pages dynamically.",
    ],
    with: [],
    imageUrl: "/screenshots/ejs-todo.jpg",
    link: false,
    category: "learning",
    tags: ["full stack", "node", "express", "ejs", "mongoose"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/EJS-toDoListV1",
    },
    language: "javascript",
  },
  {
    name: "emfrest",
    description: [
      "An npm package to build RESTful APIs quickly.",
      "I took my learnings from Class Based REST API and created a completely functional version of it, allowing for more reusability.",
      "Also learnt how to deploy a package to npm and use JSdoc for automatic code documentation.",
    ],
    with: [],
    imageUrl: "/screenshots/emfrest.jpg",
    link: "https://www.npmjs.com/package/emfrest",
    category: "personal",
    tags: ["backend", "npm", "express", "mongoose", "jsdoc"],
    major: true,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/emfrest",
    },
    language: "typescript",
  },
  {
    name: "File Upload",
    description: [
      "A simple project to test file uploading from the browser.",
      "Learnt about multipart forms.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["full stack"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Firebase Auth",
    description: ["A project to integrate firebase auth with a node.js app."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["backend", "firebase", "node"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Fruits",
    description: ["A project to learn CRUD operations with mongoose."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["backend", "node", "mongoose"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Recursive React",
    description: [
      "A recursive react component to render accordions within each other.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "react", "bootstrap"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "HTML - Personal Site",
    description: [
      "My first website.",
      "A personal website to understand different html elements and basic page layout using html tables.",
    ],
    with: [],
    imageUrl: "/screenshots/first-website.jpg",
    link: false,
    category: "learning",
    tags: ["frontend", "html"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/Personal-Website",
    },
    language: "javascript",
  },
  {
    name: "Drum Kit",
    description: ["A project to understand DOM events."],
    with: [],
    imageUrl: "/screenshots/drum-kit.jpg",
    link: "https://deej4y.github.io/drumKit/",
    category: "learning",
    tags: ["frontend", "dom"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/drumKit",
    },
    language: "javascript",
  },
  {
    name: "Dice Game",
    description: ["A dice rolling game."],
    with: [],
    imageUrl: "/screenshots/dicee.jpg",
    link: "https://deej4y.github.io/theDiceGame/dicee.html",
    category: "learning",
    tags: ["frontend", "dom"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/theDiceGame",
    },
    language: "javascript",
  },
  {
    name: "JWT Auth API Template",
    description: [
      "An Express API project template with JWT authentication.",
      "JWT authentication is paired with argon2 hashing for passwords and a pre-made forgot password page.",
      "A great template to build your APIs without worrying about authentication.",
    ],
    with: [],
    imageUrl: "/screenshots/jwt-auth-api-template.jpg",
    link: "https://documenter.getpostman.com/view/13595623/TzXxkJWS#2b19f7fb-7d56-4c9e-bb42-4e4ced8040d9",
    category: "personal",
    tags: ["backend", "express", "jwt", "security"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/JwtAuthApiTemplate",
    },
    language: "javascript",
  },
  {
    name: "Mohit Sharma's portfolio",
    description: [
      "A one hour bootstrap website.",
      "Quickly built a portfolio website for a friend.",
    ],
    with: [],
    imageUrl: "/screenshots/mohit-portfolio.jpg",
    link: "https://deej4y.github.io/Mohit-Sharma/",
    category: "personal",
    tags: ["frontend", "bootstrap", "html"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/Mohit-Sharma",
    },
    language: "javascript",
  },
  {
    name: "Express Server",
    description: ["A project to start learning express."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["backend", "express"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Newsletter Signup",
    description: [
      "A project to use the Mailchimp API.",
      "Learnt how to create mailing lists to allow for sending batch mails.",
    ],
    with: [],
    imageUrl: "/screenshots/newsletter-signup.jpg",
    link: false,
    category: "learning",
    tags: ["full stack", "node", "mailchimp"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Nextjs Blog",
    description: ["The official Nextjs tutorial."],
    with: [],
    imageUrl: "/screenshots/nextjs-blog.jpg",
    link: false,
    category: "learning",
    tags: ["full stack", "next"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "React Context",
    description: ["A project to understand React Context."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: "", url: "" },
    language: "javascript",
  },
  {
    name: "Open Weather API",
    description: ["Learning to use 3rd party APIs."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["full stack", "node", "api"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/OpenWeatherApiProject",
    },
    language: "javascript",
  },
  {
    name: "Pet Store API",
    description: ["An API to manage a pet store."],
    with: [],
    imageUrl: false,
    link: "https://documenter.getpostman.com/view/13595623/TWDXnvzk",
    category: "personal",
    tags: ["backend", "node", "express", "mongoose"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/PetStoreAPI",
    },
    language: "javascript",
  },
  {
    name: "QR Code Generator",
    description: ["Simple backend app to convert a string to a QR code."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["backend", "qr"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Question Bank",
    description: [
      "Easily find and add questions and answers.",
      "Keyword based search for questions and answers.",
    ],
    with: [],
    imageUrl: "/screenshots/question-bank.jpg",
    link: "https://question-bank.davidjoseph.me",
    category: "personal",
    tags: ["full stack", "node", "express", "mongoose", "bootstrap"],
    major: true,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/question-bank",
    },
    language: "javascript",
  },
  {
    name: "React Keeper",
    description: ["A simple Google keep clone made in React."],
    with: [],
    imageUrl: "/screenshots/react-keeper.jpg",
    link: false,
    category: "learning",
    tags: ["frontend", "react"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/react-keeper-app",
    },
    language: "javascript",
  },
  {
    name: "Social Auto Post",
    description: [
      "A project to help social media pages generate posts from follower text.",
      "A full stack application made with node, express, mongoose, mongodb, nextjs and react bootstrap.",
      "The project includes social media post template creation, website generation for followers to add text and a custom canvas solution to generate the post image from the created template.",
    ],
    with: [],
    imageUrl: "/screenshots/social-auto-post.jpg",
    link: "https://socialautopost.davidjoseph.me/",
    category: "personal",
    tags: ["full stack", "node", "next", "bootstrap"],
    major: true,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/social-auto-post",
    },
    language: "javascript",
  },
  {
    name: "Simon Game",
    description: ["Digital recreation of the Simon game using jQuery."],
    with: [],
    imageUrl: "/screenshots/simon-game.jpg",
    link: "https://deej4y.github.io/theSimonGame/",
    category: "learning",
    tags: ["frontend", "jQuery"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/theSimonGame",
    },
    language: "javascript",
  },
  {
    name: "Weekly Song Recommendation",
    description: ["A website to easily recommend songs to my friends."],
    with: [],
    imageUrl: "/screenshots/weekly-song-recommendation.jpg",
    link: "https://deej4y.github.io/WeeklySongRecommendation/",
    category: "personal",
    tags: ["frontend", "bootstrap"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://deej4y.github.io/WeeklySongRecommendation/",
    },
    language: "javascript",
  },
  {
    name: "Wiki API",
    description: ["A Wikipedia style RESTful API."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["backend", "api"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/Wiki-API",
    },
    language: "javascript",
  },
  {
    name: "Decrementer",
    description: ["An app to understand state in Flutter"],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Dicee Flutter",
    description: ["The dice rolling game, but in Flutter."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/dicee_flutter",
    },
    language: "dart",
  },
  {
    name: "I am Rich",
    description: ["An app that displays fancy images."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Layout Builder",
    description: [
      "Project to understand Flutter's layout builder and media queries.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Layout Challenge",
    description: [
      "A Flutter layout challenge from The Complete 2021 Flutter development bootcamp with dart.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/layout_challenge",
    },
    language: "dart",
  },
  {
    name: "Flutter Layout",
    description: ["Official Tutorial for building layouts in Flutter"],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Magic 8 Ball",
    description: ["A flutter app to emulate a Magic 8 ball."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Mi Card",
    description: ["An app to showcase my contact details."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Navigator Tutorial",
    description: [
      "Understanding Flutter page navigation with the v1 & v2 Widgets.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "learning"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Provider Flutter",
    description: ["The official Flutter Provider tutorial."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter", "provider"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "To Do",
    description: ["A stateful To Do App in Flutter"],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Wake On Lan",
    description: ["An app to remotely wake up a device over the network."],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["frontend", "flutter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "dart",
  },
  {
    name: "Smart India Hackathon",
    description: [
      "Auxilium, a chatbot to help Ukranian refugees easily find latest news regarding evacuation.",
    ],
    with: [VibhuJain, YashGoel, RajMukherjee, AbhayDixit],
    imageUrl: "/screenshots/smart-india-hackathon.jpg",
    link: "https://deej4y.github.io/Error.exe-website/",
    category: "team",
    tags: ["full stack", "fastapi", "mysql", "bootstrap"],
    isHackathon: true,
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/Error.exe-website",
    },
    language: "python",
  },
  {
    name: "Kayal Maam's resume website",
    description: ["A portfolio website."],
    with: [],
    imageUrl: "/screenshots/kayal-maam-resume-website.jpg",
    link: "https://kayalvizhi-jayavel.vercel.app/",
    category: "personal",
    tags: ["frontend", "next"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/kayal_maam_resume_website",
    },
    language: "javascript",
  },
  {
    name: "Prem Mistry's Personal Website",
    description: [
      "A personal website project through Fiverr.",
      "Designed by Kartik Tata, the project was made with Next.js and Bootstrap. Also configured a domain name as part of the gig. This was our first freelance project to be completed.",
    ],
    with: [KartikTata],
    imageUrl: "/screenshots/prem-mistrys-personal-website.jpg",
    link: "https://lesgoo.in/",
    category: "freelance",
    tags: ["frontend", "next", "godaddy"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: "github", url: false },
    language: "javascript",
  },
  {
    name: "Data Structure Visualizer",
    description: [
      "Visually understand data structures.",
      "A team project for our Software Engineering Project Management course in college.",
    ],
    with: [DeeptadipMondal, MohitSharma],
    imageUrl: "/screenshots/data-structure-visualizer.jpg",
    link: "https://deej4y.github.io/data-structure-visualizer/",
    category: "team",
    tags: ["frontend", "next", "mantine"],
    major: false,
    upcoming: true,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/data-structure-visualizer/",
    },
    language: "javascript",
  },
  {
    name: "Tree search",
    description: [
      "Fast text pattern search.",
      "Visualization of a fast text pattern search using trees.",
    ],
    with: [],
    imageUrl: "/screenshots/tree-search.jpg",
    link: "https://deej4y.github.io/dsa-tree-search/",
    category: "personal",
    tags: ["frontend", "next", "tree"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/dsa-tree-search",
    },
    language: "javascript",
  },
  {
    name: "Snake Game",
    description: [
      "A snake game using Tkinter.",
      "This was my attempt at developing the snake game. I used my knowledge of Tkinter and OOP to make this game within a few hours.",
    ],
    with: [],
    imageUrl: "/screenshots/snake-game.gif",
    link: "/screenshots/snake-game.gif",
    category: "personal",
    tags: ["game", "tkinter"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/tkinter-snake-game",
    },
    language: "python",
  },
  {
    name: "WebFab 2022",
    description: [
      "A club website.",
      "This project was my submission for the WebFab 2022 Hackathon, a Web Development challenge conducted by NWC Association SRMIST and IoT Alliance.",
    ],
    with: [],
    imageUrl: assetPrefix
      ? assetPrefix + "/screenshots/webfab-2022.png"
      : "/screenshots/webfab-2022.png",
    link: "https://webfab-2022-frontend.vercel.app/",
    category: "personal",
    tags: ["frontend", "next", "mantine"],
    isHackathon: true,
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/webfab-2022",
    },
    language: "javascript",
  },
  {
    name: "Backend Projects Server",
    description: [
      "A DigitalOcean droplet to host all my backend projects.",
      "I learnt how to setup reverse proxy with NGINX and SSL with Let's Encrypt and certbot. I also learnt how to setup pm2 for node.js process management in production.",
    ],
    with: [],
    imageUrl: "",
    link: false,
    category: "learning",
    tags: [
      "backend",
      "nginx",
      "reverse-proxy",
      "ssl",
      "certbot",
      "digitalocean",
    ],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Linkedin autofill HackerRank certificate",
    description: [
      "This is a browser extension to automatically fill your HackerRank certificate data, in Linkedin.",
    ],
    with: [],
    imageUrl:
      "https://user-images.githubusercontent.com/70807315/198891581-ac3da934-7659-4cfe-8b35-e8c5f90045da.mp4",
    link: "https://user-images.githubusercontent.com/70807315/198891581-ac3da934-7659-4cfe-8b35-e8c5f90045da.mp4",
    category: "learning",
    tags: ["frontend", "extension", "autofill"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/linkedin-autofill-hackerrank-certificate",
    },
    language: "javascript",
  },
  {
    name: "PouchDB Services",
    description: [
      "A set of PouchDB service functions and a class version of them, with mongodb style ObjectID id's for all your documents.",
    ],
    with: [],
    imageUrl: "/screenshots/pouchdb-services.png",
    link: "https://www.npmjs.com/package/pouchdb-services",
    category: "personal",
    tags: ["frontend", "pouchdb", "library"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/pouchdb-services",
    },
    language: "typescript",
  },
  {
    name: "Node MySQL REST API",
    description: [
      "Example project for working with nodejs, express and mysql.",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["backend", "mysql", "rest"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/node-mysql-api",
    },
    language: "javascript",
  },
  {
    name: "Node MySQL Prisma REST API",
    description: [
      "Example project for working with nodejs, express, MySQL & Prisma ORM",
    ],
    with: [],
    imageUrl: false,
    link: false,
    category: "learning",
    tags: ["backend", "mysql", "prisma", "rest"],
    major: false,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/node-prisma-api",
    },
    language: "javascript",
  },
  {
    name: "MLSA Mailer",
    description: [
      "Custom email scheduling solution with nodemailer and mongo-cron. Built the RESTful APIs for the project.",
    ],
    with: [SarthakSachdeva],
    imageUrl: false,
    link: false,
    category: "team",
    tags: ["backend", "email", "rest", "mongo-cron"],
    major: false,
    upcoming: true,
    completed: true,
    repository: {
      platform: "github",
      url: false,
    },
    language: "typescript",
  },
  /** 
 {
    name: "",
    description: [""],
    with: [],
    imageUrl: "",
    link: "",
    category: "",
    tags: [""],
    major: false,
    upcoming: false,
    completed: true,
    repository: {platform: "", url: ""},
    language: "",
  },
 */
];

projects.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

projects.sort((a, b) => {
  if (a.imageUrl === false) return 1;
  if (b.imageUrl === false) return -1;
  return 0;
});

projects.sort((a, b) => {
  if (a.repository.url === false) return 1;
  if (b.repository.url === false) return -1;
  return 0;
});

const getMajorProjects = () => {
  return projects.filter((project) => {
    return project.major === true;
  });
};

const getNumberOfMajorProjects = () => {
  return getMajorProjects().length;
};

const getHackathonProjects = () => {
  return projects.filter((project) => project.isHackathon);
};

const getNumberOfHackathonProjects = () => {
  return getHackathonProjects().length;
};

const getProjectsByCategory = (category) => {
  return projects.filter((project) => {
    return project.category === category;
  });
};

const getNumberOfProjectsByCategory = (category) => {
  return getProjectsByCategory(category).length;
};

const toKebabCase = (str) => {
  return str.toLowerCase().split(" ").join("-");
};

const getAllSkills = () => {
  const skills = {};

  projects.forEach(({ tags, language }) => {
    tags.forEach((tag) => {
      skills[tag.toUpperCase()] = true;
    });

    if (language) {
      skills[language.toUpperCase()] = true;
    }
  });

  return Object.keys(skills);
};

export default projects;

export {
  getAllSkills,
  getMajorProjects,
  getNumberOfMajorProjects,
  getHackathonProjects,
  getNumberOfHackathonProjects,
  getProjectsByCategory,
  getNumberOfProjectsByCategory,
  toKebabCase,
};
