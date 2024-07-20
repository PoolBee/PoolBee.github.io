(() => {
  // <stdin>
  function getScrollTop() {
    return window.scrollY || document.documentElement.scrollTop;
  }
  var backToTopButton = document.getElementById("back-to-top");
  window.addEventListener("scroll", function() {
    if (getScrollTop() > 0) {
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });
  backToTopButton.addEventListener("click", function() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
})();
