import "./style.scss";

const dateElement = document.querySelector("h1");

const date = new Date();

dateElement.append(
  date.toLocaleDateString("fr-FR", {
    day: "numeric",
    weekday: "long",
  })
);

const dateArr = (date) => {
  const arr = date.split(" ");
  firstLetterUp(arr);
};

const firstLetterUp = (arr) => {
  const text = arr.map((elem) => {
    return elem.charAt(0).toUpperCase() + elem.substring(1);
  });
};

console.log(date);
dateArr(date.toString());
