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
  const text = arr.map((elem) => {
    return elem.charAt(0).toUpperCase() + elem.substring(1);
  });
  dateElement.append(text);
};

// arr to text au lieu de map()

dateArr(DayNow.toString());
