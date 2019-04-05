var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("doe").style.top = "2em";
    } else {
      document.getElementById("doe").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
}
