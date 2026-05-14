const searchInput =
  document.getElementById("searchInput");

const cards =
  document.querySelectorAll(".card");

searchInput.addEventListener("keyup", () => {

  const searchValue =
    searchInput.value.toLowerCase();

  cards.forEach((card) => {

    const animeTitle =
      card.querySelector(".anime-title")
      .textContent
      .toLowerCase();

    if (animeTitle.includes(searchValue)) {

      card.style.display = "block";

    } else {

      card.style.display = "none";

    }

  });

});