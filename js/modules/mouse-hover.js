export default function MouseHover() {
  document.addEventListener("DOMContentLoaded", function () {
    var imgOverlays = document.querySelectorAll(".img-overlay");

    imgOverlays.forEach(function (imgOverlay) {
      imgOverlay.addEventListener("mouseenter", function () {
        var overlayText = this.querySelector(".overlay-text");
        overlayText.style.opacity = "1";
      });

      imgOverlay.addEventListener("mouseleave", function () {
        var overlayText = this.querySelector(".overlay-text");
        overlayText.style.opacity = "0";
      });
    });
  });
}
