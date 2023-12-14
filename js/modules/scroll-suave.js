export default function initScrollSuave() {
  const LinksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const PegarHref = event.currentTarget.getAttribute("href");
    const section = document.querySelector(PegarHref);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // const topo = section.offsetTop;
    // window.scrollTo({
    //     top: topo,
    //     behavior: 'smooth'
    // });
  }

  LinksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
