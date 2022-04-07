const reviews = [ //here a data of objects
    { // curly brackets to begin with objects
        id: 1, // object parameters described
        name: "Micheal Shervon",
        jobs: "Web Developer",
        img: "Img samples.jfif",
        text: "Myself an Web Developer, good at programming in HTML, CSS and JavaScript. Wor experience of 5years, and currently working as freelancer as part time and in Amazon as full time Stack Developer.",
    },
    { // curly brackets to begin with objects
        id: 2, // object parameters described
        name: "John Charter",
        jobs: "UI Designer",
        img: "Img samples 3.jfif",
        text: "I am currently working as a UI Designer, honing my skills and developing sites and apps for my firm which I work for, entrusting all my high-end projects and cooperation at a full extent.",
    }, { // curly brackets to begin with objects
        id: 3, // object parameters described
        name: "Vishu Kalier",
        jobs: "AI Engineer",
        img: "IMG_7245.PNG",
        text: "An AI and ML Engineer currently working at Microsoft, mostly indulged in the optimization processes, Neural networks, Deep Learning and Data Mining projects to make company reach to great heights with a faster pace.",
    }, { // curly brackets to begin with objects
        id: 4, // object parameters described
        name: "Samuel Smith",
        jobs: "UX Designer",
        img: "Img samples (2).jfif",
        text: "Currently working at Amazon, building portfolios, e-commerce websites and docker apps are my day to day routine. In my branch I everyday learn something new and out of the Ordinary which I Implement to bring it to life.",
    },
];
// Setting values dynamically for JavScript
const image = document.getElementById('person');
const author = document.getElementById('author');
const job = document.getElementById('job');
const information = document.getElementById('info');
const prev_button = document.querySelector('#btn-prev'); // used to select with class or id name
const next_button = document.querySelector('#btn-next');
const random_button = document.querySelector('#random-button');
// Setting starting item
// Loading initial Item using DOMContentLoaded method
window.addEventListener('DOMContentLoaded', function() {
    showPerson();
});
var person = Math.floor(Math.random() * 3);
// show person based on item
function showPerson() {
    const items = reviews[person];
    image.src = items.img;
    author.textContent = reviews[person].name;
    job.textContent = reviews[person].jobs;
    information.textContent = reviews[person].text;
}
// creating event for prev button
prev_button.addEventListener('click', function() {
    if (person < reviews.length && person != 0) {
        person = person - 1;
        showPerson();
    }
    if (person === 0) {
        showPerson();
        person = person + reviews.length - 1;
    }
});
// creating event for previous button
next_button.addEventListener('click', function() {
    if (person < reviews.length) {
        person = person + 1;
        showPerson();
    }
    if (person === reviews.length) {
        person = person - reviews.length;
        showPerson();
    }
});