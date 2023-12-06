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

document.querySelector('.mobile-btn').addEventListener('click', function() {
  var navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
});

/*!
 * Offcanvas Sidebar v0.1
 * Copyright 2017 - present Morten Sørensen (https://moso.io)
 * Licensed under the MIT license
 * --------------------------------------------------------------
 * Script that clones the current Bootstrap markup,
 * and inserts it into a sidebar with some smooth animations
 *
 * - Built to work with Bootstrap 4 and supports multiple navbars
 * - Fully customizable with comments
 */

var window_height;
var window_width;
var navbar_initialized = false;
var nav_toggle;

var offCanvas = {
    sidenav: {
        // Sidenav is not visible by default.
        // Change to 1 if necessary
        sidenav_visible: 0
    },
    initSideNav: function initSideNav() {
        if (!navbar_initialized) {
            var $nav = $("nav");

            // Add the offcanvas class to the navbar if it's not initialized
            $nav.addClass("navbar-offcanvas");

            // Clone relevant navbars
            var $navtop = $nav.find(".navbar-top").first().clone(true);
            var $navbar = $nav.find(".navbar-collapse").first().clone(true);

            // Let's start with some empty vars
            var ul_content = "";
            var top_content = "";

            // Set min-height of the new sidebar to the screen height
            $navbar.css("min-height", window.screen.height);

            // Take the content of .navbar-top
            $navtop.each(function () {
                var navtop_content = $(this).html();
                top_content = top_content + navtop_content;
            });

            // Take the content of .navbar-collapse
            $navbar.children("ul").each(function () {
                var nav_content = $(this).html();
                ul_content = ul_content + nav_content;
            });

            // Wrap the new content inside an <ul>
            ul_content =
                '<ul class="navbar-nav sidebar-nav">' + ul_content + "</ul>";

            // Insert the html content into our cloned content
            $navbar.html(ul_content);
            $navtop.html(top_content);

            // Append the navbar to body,
            // and insert the content of the navicons navbar just below the logo/nav-image
            $("body").append($navbar);
            $(".nav-image").after($navtop);

            // Set the toggle-variable to the Bootstrap navbar-toggler button
            var $toggle = $(".navbar-toggler");

            // Add/remove classes on toggle and set the visiblity of the sidenav,
            // and append the overlay. Also if the user clicks the overlay,
            // the sidebar will close
            $toggle.on("click", function () {
                if (offCanvas.sidenav.sidenav_visible == 1) {
                    $("html").removeClass("nav-open");
                    offCanvas.sidenav.sidenav_visible = 0;
                    $("#overlay").remove();
                    setTimeout(function () {
                        $toggle.removeClass("toggled");
                    }, 300);
                } else {
                    setTimeout(function () {
                        $toggle.addClass("toggled");
                    }, 300);

                    // Add the overlay and make it close the sidenav on click
                    var div = '<div id="overlay"></div>';
                    $(div)
                        .appendTo("body")
                        .on("click", function () {
                            $("html").removeClass("nav-open");
                            offCanvas.sidenav.sidenav_visible = 0;
                            $("#overlay").remove();
                            setTimeout(function () {
                                $toggle.removeClass("toggled");
                            }, 300);
                        });

                    $("html").addClass("nav-open");
                    offCanvas.sidenav.sidenav_visible = 1;
                }
            });
            // Set navbar to initialized
            navbar_initialized = true;
        }
    }
};

$(document).ready(function () {
    window_width = $(window).width();

    nav_toggle = $("nav").hasClass("navbar-offcanvas") ? true : false;

    // Responsive checks
    if (window_width < 992 || nav_toggle) {
        offCanvas.initSideNav();
    }

    // Close the sidebar if the user clicks a link or a dropdown-item,
    // and close the sidebar
    $(".nav-link:not(.dropdown-toggle), .dropdown-item").on(
        "click",
        function () {
            var $toggle = $(".navbar-toggler");

            $("html").removeClass("nav-open");
            offCanvas.sidenav.sidenav_visible = 0;
            setTimeout(function () {
                $toggle.removeClass("toggled");
            }, 300);
        }
    );
});



  


