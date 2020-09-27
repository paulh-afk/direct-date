import "./style.scss";

const dateElement = document.querySelector("h1");

const date = new Date();

dateElement.append(
  date.toLocaleDateString("fr-FR", {
    day: "numeric",
    weekday: "long",
  })
);
