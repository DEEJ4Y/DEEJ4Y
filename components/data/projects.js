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
    language: "javascript",
  },
 */

const projects = [
  {
    name: "Product Website",
    with: false,
    description: [
      "I am currently building a product website for an organization. I cannot disclose the name of the organization or the product as yet.",
      "The website is made with Next.js using static HTML export.",
    ],
    imageUrl: false,
    link: false,
    category: "freelance",
    tags: ["frontend", "next"],
    major: true,
    upcoming: true,
    completed: false,
    repository: { platform: "bitbucket", url: false },
    language: "javascript",
  },
  {
    name: "Event Management App",
    with: [{ name: "IoT Alliance", url: "https://www.iotalliance.in/" }],
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
    with: [{ name: "IoT Alliance", url: "https://www.iotalliance.in/" }],
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
    with: [{ name: "IoT Alliance", url: "https://www.iotalliance.in/" }],
    imageUrl: "/certificates/Resonate_certificate.png",
    link: "/DEEJ4Y/certificates/Resonate_certificate.png",
    category: "team",
    tags: ["backend", "hackathon", "node", "express", "mongodb", "mongoose"],
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
      "A startup. Working on making the APIs and a web app.",
      "RESTful APIs are built with Express and Mongoose. Also integrating Razorpay as a payment gateway.",
    ],
    with: [{ name: "Salzaa", url: "https://www.salzaa.com/" }],
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
      "react bootstrap",
    ],
    major: true,
    upcoming: true,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    name: "Canvas Certificate Generator",
    description: [
      "A Javascript class to render canvas certificates.",
      "Certificates can be generated with options to change text, signature, fonts and a background image for certificate designs.",
    ],
    with: false,
    imageUrl: "/screenshots/canvas-certificate-generator.png",
    link: false,
    category: "personal",
    tags: ["frontend", "canvas"],
    major: false,
    upcoming: true,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Class Based REST API",
    description: [
      "A mongoose-express project template to build REST APIs quickly.",
      "Uses Javascript classes for generating routes, controllers and database calls for CRUD operations for your mongoose models.",
    ],
    with: false,
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
    with: false,
    imageUrl: "/screenshots/covid-spo2-log.jpg",
    link: "http://covid-spo2-log.herokuapp.com/",
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
    imageUrl: "/screenshots/emfrest.jpg",
    link: "https://www.npmjs.com/package/emfrest",
    category: "personal",
    tags: ["backend", "npm", "express", "mongoose"],
    major: true,
    upcoming: false,
    completed: true,
    repository: {
      platform: "github",
      url: "https://github.com/DEEJ4Y/emfrest",
    },
    language: "javascript",
  },
  {
    name: "File Upload",
    description: [
      "A simple project to test file uploading from the browser.",
      "Learnt about multipart forms.",
    ],
    with: false,
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
    name: "Financial Portfolio",
    description: [
      "A web app to keep track of your funds and investments.",
      "My first react app with multi page routing and API integration using fetch. Backend was made with node, express and mongoose.",
    ],
    with: false,
    imageUrl: "/screenshots/portfolio-manager.jpg",
    link: false,
    category: "personal",
    tags: ["full stack", "react", "node", "express", "mongoose"],
    major: false,
    upcoming: false,
    completed: true,
    repository: { platform: false, url: false },
    language: "javascript",
  },
  {
    name: "Firebase Auth",
    description: ["A project to integrate firebase auth with a node.js app."],
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
    imageUrl: "/screenshots/question-bank.jpg",
    link: "https://question-bank-engg.herokuapp.com",
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
    with: false,
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
    with: false,
    imageUrl: "/screenshots/social-auto-post.jpg",
    link: "https://socialautopost.herokuapp.com/",
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
    with: false,
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
      "Auxilium (Help: Latin), a chatbot to help Ukranian refugees easily find latest news regarding evacuation.",
    ],
    with: false,
    imageUrl: false,
    link: "https://deej4y.github.io/Error.exe-website/",
    category: "",
    tags: ["full stack", "fastapi", "mysql", "bootstrap"],
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
    with: false,
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
    language: "dart",
  },
 */
];

projects.sort((a, b) => {
  return a.name.localeCompare(b.name);
});

const getMajorProjects = () => {
  return projects.filter((project) => {
    return project.major === true;
  });
};

const getNumberOfMajorProjects = () => {
  return getMajorProjects().length;
};

const getProjectsByCategory = (category) => {
  return projects.filter((project) => {
    return project.category === category;
  });
};

const getNumberOfProjectsByCategory = (category) => {
  return getProjectsByCategory(category).length;
};

export default projects;

export {
  getMajorProjects,
  getNumberOfMajorProjects,
  getProjectsByCategory,
  getNumberOfProjectsByCategory,
};
