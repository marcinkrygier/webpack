import '../scss/main.scss';

/* place your code below */
import moment from 'moment';
const time = (moment().format('MMMM Do YYYY, h:mm:ss a'));
const timePlaceholder = document.querySelector(`.time--js`);
timePlaceholder.innerHTML = time;

console.log('HELLO 🚀')


const name = "Marcin";
const age = 34;
const pies = "Volt";

function calculateOld(myNumber) {
  console.log(`Dostalem ${myNumber}`);
  return myNumber * 3;
}
const myResult = calculateOld(2);
console.log(myResult);

const calculate = (number) => number * 4;

console.log(calculate(4));

function greetOld(age, name) {
  console.log(`Cześć, nazywam sie ${name} i mam ${age} lata`);
}
greetOld(age, name);

function createContent(querySelectorContent, content) {
  const element = document.querySelector(querySelectorContent);
  element.innerHTML = content;
}
createContent(`.article__description--js`, `CZESC TU JS`);

const greet = (name, age) => {
  console.log(`Cześć, z tej strony ${name}, który ma ${age} lata`);
};
greet(`Marcin`, age);

if (!(`jaasript` == `java`)) {
  console.log(`tosie wykona`);
}

const humanOne = {
  name: `Marcin`,
  age: 34,
  adress: {
    street: `Pobiedziska`,
    city: `Poznan`,
  },
};

const humanTwo = {
  name: `Tomek`,
  age: 20,
  adress: humanOne.adress,
};

console.log(humanOne);
console.log(humanTwo);

console.log(typeof 2);
console.log(typeof `2`);

if (humanOne.age === humanTwo.age) {
  console.log(`humanOne jest starszy od humanTwo`);
} else {
  console.log(`humanOne jest starszy`);
}

if (humanTwo.age === 30 || humanOne.age) {
  console.log(`to sie wykona`);
}

if (!(`javaScript` == `java`)) {
  console.log(`java to javaScript`);
}

if (humanOne.age > humanTwo.age) {
  console.log(`humanOne jest starszy od humanTwo`);
} else if (humanOne.age === humanTwo.age) {
  console.log(`sa rowniesnikami`);
} else {
  console.log(`humanOne jest starszy od dwojki`);
}

const myNumber = 1;
switch (myNumber) {
  case 7:
    console.log(`hi 7`);
    break;

  case 3:
    console.log(`hi 3`);
    break;
  default:
    console.log(`deafault response`);
}
humanOne.age < humanTwo.age
  ? console.log(`to prawda`)
  : console.log(`to nie prawda`);

32 < 20 ? console.log(`true`) : console.log(`false`);

const result = 32 < 20 ? true : `ttrtrtr`; //to samo const result = (32 < 20) ? console.log(`true`) : console.log(`false`); console.log(result);
console.log(result);

const button = document.querySelector(`.action--js`);
console.log(button);

const myClick = () => {
  const heading = document.querySelector(".main__heading--js"); // ten i ten zapis nizej sa rownowazne
  heading.innerHTML = `CZESC, SKAD PRZYBYWASZ?`;
};
button.addEventListener(`click`, myClick);

button.addEventListener(`click`, () => {
  const heading = document.querySelector(".main__heading--js");
  heading.innerHTML = `WITAJ NA MOJEJ STRONIE PRZYBYSZU`;
  heading.classList.toggle(`klasa-z-js`);
  console.log(heading.classList.contains(`main__heading`));
});



const hamburger = document.querySelector(`.hamburger--js`);
hamburger.addEventListener(`click`, () => {
  const nav = document.querySelector(`.navigation--js`);
  nav.classList.toggle(`navigation--open`);
});

let isDark = false;
const switchModes = document.querySelector(`.darkMode--js`);
switchModes.addEventListener(`click`, () => {
  if(isDark){
    document.documentElement.style.setProperty(`--background-color`, `#fefefe`);
    document.documentElement.style.setProperty(`--text-color`, `black`);
    isDark = false;

  }else {
    document.documentElement.style.setProperty(`--background-color`, `black`);
    document.documentElement.style.setProperty(`--text-color`, ` #fefefe`);
    isDark = true;
  }
}


