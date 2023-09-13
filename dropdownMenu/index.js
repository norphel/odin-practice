const title = document.querySelector(".title");
title.addEventListener("click", () => {
  const listItems = document.querySelector(".listItems");
  const dropdownArrow = document.querySelector('img[alt="dropdown arrow"]');
  listItems.classList.toggle("active");
  dropdownArrow.classList.toggle("active");
});
