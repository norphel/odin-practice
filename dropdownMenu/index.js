const title = document.querySelector(".title");
title.addEventListener("click", () => {
  const listItems = document.querySelector(".listItems");
  listItems.classList.toggle("inactive");
});
