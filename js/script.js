const accordionItem = document.querySelectorAll(".accordion__item");

accordionItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    const accordionAnswer = item.querySelector(".accordion__answer");

    accordionItem.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.classList.remove("open");
        otherItem.querySelector(".accordion__answer").classList.remove("open");
      }
    });

    item.classList.toggle("open");
    accordionAnswer.classList.toggle("open");

    console.log(accordionAnswer);
  });
});
