const accordionItem = document.querySelectorAll(".accordion__item");

// Change plus icon to minus icon on click.

accordionItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    const accordionAnswer = item.querySelector(".accordion__answer");

    item.classList.toggle("open");
    // accordionAnswer.classList.toggle("open");

    console.log(accordionAnswer);
  });
});
