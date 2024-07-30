document.querySelectorAll(".faq__list__item__question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.classList.contains("open");
    const arrow = question.querySelector(
      ".faq__list__item__question__arrow svg"
    );

    document.querySelectorAll(".faq__list__item__answer").forEach((ans) => {
      ans.classList.remove("open");
    });

    document.querySelectorAll(".faq__list__item__question").forEach((q) => {
      q.classList.remove("open");
      const arrowIcon = q.querySelector(
        ".faq__list__item__question__arrow svg"
      );
      if (arrowIcon) {
        arrowIcon.classList.remove("rotate");
      }
    });

    if (!isOpen) {
      answer.classList.add("open");
      question.classList.add("open");
      if (arrow) {
        arrow.classList.add("rotate");
      }
    }
  });
});
