export default function initNav() {
  var window_height;
  var window_width;
  var navbar_initialized = false;
  var nav_toggle;

  var offCanvas = {
    sidenav: {
      // Sidenav is not visible by default.
      // Change to 1 if necessary
      sidenav_visible: 0,
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
    },
  };
}
