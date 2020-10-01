import "./style.scss";

const dateElement = document.querySelector("h1");

const dateDayNow = new Date().toLocaleDateString("fr-FR", {
  day: "numeric",
  weekday: "long",
});

const DayNow = dateDayNow.toString();

const dateArr = (date) => {
  const arr = date.split(" ");
  firstLetterUp(arr);
};

const firstLetterUp = (arr) => {
  arr.forEach((elem) => {
    return elem.charAt(0).toUpperCase() + elem.substring(1);
  });
  console.log(test);
};

console.log(dateDayNow);
dateArr(dateDayNow.toString());
