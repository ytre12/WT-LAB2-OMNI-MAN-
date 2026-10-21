// Task 1
const btnSetThemeElement = document.getElementById("setThem");

btnSetThemeElement.addEventListener("click", () => {
  const isLight = document.body.classList.toggle("light-theme");

  btnSetThemeElement.textContent = isLight ? "Light" : "Dark";
  btnSetThemeElement.setAttribute("aria-pressed", String(isLight));
});

// Task 2
const inputElement = document.getElementById("name-input");
const submitBtn = document.getElementById("submit-btn");
const usernameView = document.querySelector("#username");

submitBtn.addEventListener("click", () => {
  const userInput = inputElement.value.trim();
  if (userInput != "") {
    usernameView.textContent = "WELCOME: " + userInput;
  } else {
    usernameView.textContent = "";
  }
  inputElement.value = "";
});

// Task 3
const elementContainer = document.querySelector("#reviews");
const submitReviewsBtn = document.querySelector("#submit-review");
const reviewTextInput = document.querySelector("#review-text");
const reviewNameInput = document.querySelector("#review-name");

submitReviewsBtn.addEventListener("click", () => {
  const name = reviewNameInput.value;
  const review = reviewTextInput.value;

  if (!name || !review) return;

  const newCard = document.createElement("div");
  newCard.classList.add("review");

  const heading = document.createElement("h3");
  heading.textContent = name;

  const paragraph = document.createElement("p");
  paragraph.textContent = review;

  newCard.append(heading, paragraph);
  elementContainer.appendChild(newCard);

  reviewNameInput.value = "";
  reviewTextInput.value = "";
});

// Task 4
const getDataBtn = document.getElementById("get-data");
const getDataContainer = document.querySelector("#data-conteiner");

getDataBtn.addEventListener("click", () => {
  fetch("https://web2025-test-data.ikto.net/motivation.html")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`error: ${response.status}`);
      }

      return response.text();
    })
    .then((data) => {
      getDataContainer.innerHTML = data;
    })
    .catch((error) => {
      console.error(error);
      getDataContainer.textContent = "Error. Please retry.";
    });
});

// Task 5
const newsContainer = document.getElementById("newsContainer");
newsContainer.textContent = "Loading....";

fetch("https://web2025-test-data.ikto.net/news.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Error: ${response.status}`);
    }

    return response.json();
  })
  .then((data) => {
    newsContainer.replaceChildren();

    data.forEach((news) => {
      const card = document.createElement("div");
      card.classList.add("review");

      const source = document.createElement("h3");
      source.textContent = news.network;

      const headline = document.createElement("p");
      headline.textContent = news.headline;

      card.append(source, headline);
      newsContainer.appendChild(card);
    });
  })
  .catch((error) => {
    console.error(error);
    newsContainer.textContent = "Error. Please retry.";
  });
