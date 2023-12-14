export default function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

  if (accordionList.length) {
    accordionList[0].classList.add(activeClass); // adiciono a classe ativo no primeiro item do dt
    accordionList[0].nextElementSibling.classList.add(activeClass); // adiciono a classe ativo no primeiro item do dd

    function activeAccordion() {
      this.classList.toggle(activeClass); // this serve tambem como const accordionlist, adicionando o toggle const do ativo no dt
      this.nextElementSibling.classList.toggle(activeClass); // adicionando tambem no dd
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion); // colocando o click e a funcao em cada dt e dd
    });
  }
}
