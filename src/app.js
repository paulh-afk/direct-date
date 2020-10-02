import "./style.scss";

const dateDayElement = document.querySelector("h4");
const dateHoursElement = document.querySelector(".content");
const dateYearsElement = document.querySelector("footer");

const dateDayNow = new Date().toLocaleString("fr-FR", {
  day: "numeric",
  weekday: "long",
});

const dateYears = new Date().toLocaleString("fr-FR", {
  year: "numeric",
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
  dateDayElement.innerHTML = "";
  dateDayElement.append(text.join(" - "));
};

const setHours = () => {
  const dateHoursNow = new Date().toLocaleString("fr-FR", {
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });
  dateHoursElement.innerHTML = "";
  dateHoursElement.append(dateHoursNow);
};

const setYears = () => {
  dateYearsElement.innerHTML = "";
  dateYearsElement.append(dateYears);
};

setInterval(() => {
  dateArr(DayNow);
  setHours();
  setYears();
}, 170);
