var tobuy = document.querySelectorAll(".goods__btn--buy");
var cart = document.querySelector(".modal-cart");
var form = document.querySelector(".contacts__form");
var feedback = document.querySelector(".modal-feedback");
var map = document.querySelector(".contacts__map");
var maps = document.querySelector(".modal-map");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelectorAll(".modal-close");

if (tobuy,cart) {
  for (var i = 0; i < tobuy.length; i++) {
    tobuy[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cart.classList.add("modal-show");
      overlay.classList.add("modal-show");
    });
  };
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      cart.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    });
  };
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    cart.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  });
}

if (form,feedback) {
  form.addEventListener("click", function (evt) {
    evt.preventDefault();
    feedback.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      feedback.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    });
  };
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  });
}

if (map,maps) {
  map.addEventListener("click", function (evt) {
    evt.preventDefault();
    maps.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (evt) {
      evt.preventDefault();
      maps.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    });
  };
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    maps.classList.remove("modal-show");
    overlay.classList.remove("modal-show");
  });
}

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (cart.classList.contains("modal-show") && overlay.classList.contains("modal-show")) {
      cart.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
    if (feedback.classList.contains("modal-show") && overlay.classList.contains("modal-show")) {
      feedback.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
    if (maps.classList.contains("modal-show") && overlay.classList.contains("modal-show")) {
      maps.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});