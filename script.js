const menuItems = document.querySelectorAll(".menu-item");

// Animate menu items on page load
window.onload = function() {
  menuItems.forEach((item, index) => {
    setTimeout(function() {
      item.classList.add("animate__animated", "animate__fadeInUp");
    }, index * 200);
  });
};
