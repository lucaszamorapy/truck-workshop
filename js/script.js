// function MobileMenu() {
//   const mobileBtn = document.querySelector('.mobile-btn');
//   const mobileMenu = document.querySelector('.mobile-menu');

//   mobileBtn.addEventListener('click', function() {
//     this.classList.toggle('active');
//     mobileMenu.classList.toggle('active');
//   });

// }

// MobileMenu();

function initAccordion() {
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

initAccordion();

function initScrollSuave() {
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

initScrollSuave();

function goToLink () {
  const cardLink = document.querySelectorAll(".card");

  function handleClick(event) {
  const servico = event.currentTarget.dataset.servico;
  const mensagem = encodeURIComponent(
    `Olá, gostaria de fazer um orçamento de ${servico}.`
  );
  const urlWhatsApp = `https://wa.me//5513991519647?text=${mensagem}`;
  window.open(urlWhatsApp);
  }

  cardLink.forEach((card) => {
    card.addEventListener("click", handleClick);
  });

}

goToLink();


function MouseHover () {
  document.addEventListener("DOMContentLoaded", function () {
    var imgOverlays = document.querySelectorAll('.img-overlay');

      imgOverlays.forEach(function (imgOverlay) {
        imgOverlay.addEventListener("mouseenter", function () {
          var overlayText = this.querySelector('.overlay-text');
          overlayText.style.opacity = '1';
          });

        imgOverlay.addEventListener("mouseleave", function () {
          var overlayText = this.querySelector('.overlay-text');
          overlayText.style.opacity = '0';
        });
      });
    });
}

MouseHover();
  


