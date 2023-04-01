const accordions = document.querySelectorAll(".accordion");

const initAccordion = () => {
  accordions.forEach((accordion) => {
    accordion.addEventListener("click", function () {
      this.classList.toggle("active");
    });
  });
};

initAccordion();
