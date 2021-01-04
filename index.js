const projects = [
  {
    _id: "5ff015f9d7c211e04161023d",
    routeName: "secrets",
    name: "Secrets",
    info:
      "Post your secrets anonymously. Complete with  authentication using Google OAuth 2.0, local authentication, sessions and cookies using the passport.js library.",
    url: "/projects/secrets",
    type: "Full Stack",
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c79",
    routeName: "owapi",
    name: "Open Weather map API",
    info:
      "Simply enter the name of your city, and retrieve the current forecast. A project to understand how to use third party API's. I used the OpenWeatherMap API.",
    url: "/projects/owapi",
    type: "Backend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c81",
    routeName: "pw",
    name: "Basic Personal Website",
    info: "A 90's style personal website created with HTML and minimal CSS.",
    url: "https://deej4y.github.io/Personal-Website/",
    type: "Frontend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c7a",
    routeName: "mcapi",
    name: "Mail Chimp API",
    info:
      "Sign up to my newsletter. Simply enter your details and sign up. A challenge to implement my understanding of API's.",
    url: "/projects/mcapi",
    type: "Backend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c7e",
    routeName: "tdg",
    name: "The Dice Game",
    info:
      "A 2 player virtual dice roll game to randomly settle a winner. A project to learn DOM manipulation.",
    url: "https://deej4y.github.io/theDiceGame/dicee.html",
    type: "Frontend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c7d",
    routeName: "dk",
    name: "Virtual Drum Kit",
    info:
      "A virtual drum kit. A project to strengthen my skills in DOM manipulation.",
    url: "https://deej4y.github.io/drumKit/",
    type: "Frontend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c7b",
    routeName: "wsr",
    name: "Weekly Song Recommendation",
    info:
      "A website to recommend songs to my friends, all of whom are listening to music on different platforms. The website contains links of the song for popular music streaming services.",
    url: "https://deej4y.github.io/WeeklySongRecommendation/",
    type: "Frontend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c78",
    routeName: "blogchallenge",
    name: "Blog Website Challenge",
    info:
      "Third and Fourth Boss Level Challenge from the 2020 Web Development bootcamp. A blog website using EJS templates complete with a database to store blogs.",
    url: "/projects/blogchallenge",
    type: "Full Stack",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c7c",
    routeName: "tsg",
    name: "The Simon Game",
    info:
      "The digital version of the Simon Game, a popular game from the 1970's. The world record is 14 sequences. Can YOU beat it?",
    url: "https://deej4y.github.io/theSimonGame/",
    type: "Frontend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c77",
    routeName: "wikiapi",
    name: "Wikipedia style API",
    info:
      "A RESTful API. Find articles, post your own and even update an article, all by using an API.",
    url: "/projects/wikiapi",
    type: "Backend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c7f",
    routeName: "tindog",
    name: "Tindog",
    info:
      "Tinder for dogs. Tindog is a responsive startup themed website. A project for me to implement bootstrap components.",
    url: "https://deej4y.github.io/TinDog/",
    type: "Frontend",
    __v: 0,
  },
  {
    _id: "5ff01df28b0cbc26ecfe6c80",
    routeName: "spw",
    name: "Stylized personal website",
    info:
      "A personal website. A project to understand intermediate css properties.",
    url: "https://deej4y.github.io/Stylized-Personal-Website/",
    type: "Frontend",
    __v: 0,
  },
];

$("#projects").hide();
$("#contact").hide();
projects.forEach((project) => {
  $(".projects-list").append(
    "<h3>" +
      project.name +
      "</h3><p class='project-info'>" +
      project.info +
      "</p>"
  );
});

// State variable legend
const states = {
  home: 0,
  projects: 1,
  contact: 2,
};

function useState(state) {
  if (state == states.projects) {
    useProjectsState();
  } else if (state == states.contact) {
    useContactState();
    $("#link-contact").addClass("active");
  } else {
    useHomeState();
  }
}

function useHomeState() {
  $("#home").show();
  $("#projects").hide();
  $("#contact").hide();
  removeActiveLink();
  $("#link-home").addClass("active");
}

function useProjectsState() {
  $("#home").hide();
  $("#projects").show();
  $("#contact").hide();
  removeActiveLink();
  $("#link-projects").addClass("active");
}

function useContactState() {
  $("#home").hide();
  $("#projects").hide();
  $("#contact").show();
  removeActiveLink();
  $("#link-contact").addClass("active");
}

function removeActiveLink() {
  $(".nav-link.active").removeClass("active");
}
