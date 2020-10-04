import "./style.scss";

const dateDayElement = document.querySelector("h4");
const dateHoursElement = document.querySelector(".content");
const dateYearsElement = document.querySelector("footer");

const convertDate = (date) => {
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

  dateArr(date);
};

const setDate = () => {
  const setHours = () => {
    const dateHoursNow = new Date().toLocaleString("fr-FR", {
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
    });
    dateHoursElement.innerHTML = "";
    dateHoursElement.append(dateHoursNow);
  };

  const setDay = () => {
    const dateDayNow = new Date().toLocaleString("fr-FR", {
      day: "numeric",
      weekday: "long",
    });
    convertDate(dateDayNow.toString());
  };

  const setYears = () => {
    const dateYears = new Date().toLocaleString("fr-FR", {
      year: "numeric",
    });
    dateYearsElement.innerHTML = "";
    dateYearsElement.append(dateYears);
  };

  setInterval(() => {
    setHours();
  }, 170);

  setInterval(() => {
    setDay();
    setYears();
  }, 250);
};

setDate();
