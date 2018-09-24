var tobuy = document.querySelectorAll(".goods__btn--buy");
var cart = document.querySelector(".modal-cart");
var form = document.querySelector(".contacts__form");
var feedback = document.querySelector(".modal-feedback");
var map = document.querySelector(".contacts__map");
var maps = document.querySelector(".modal-map");
var overlay = document.querySelector(".modal-overlay");
var close = document.querySelectorAll(".modal-close");
var formfeed = feedback.querySelector(".modal-feedback__form");
var fullname = feedback.querySelector("[name=fullname]");
var email = feedback.querySelector("[name=email]");
var text = feedback.querySelector("[name=text]");
var isStorageSupport = true;
var storage_fullname = "";
var storage_email = "";

try {
  storage_fullname = localStorage.getItem("fullname");
  storage_email = localStorage.getItem("email");
} catch (err) {
  isStorageSupport = false;
}

if (tobuy,cart) {
  for (var i = 0; i < tobuy.length; i++) {
    tobuy[i].addEventListener("click", function (event) {
      event.preventDefault();
      cart.classList.add("modal-show");
      overlay.classList.add("modal-show");
    });
  };
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (event) {
      event.preventDefault();
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
  form.addEventListener("click", function (event) {
    event.preventDefault();
    feedback.classList.add("modal-show");
    overlay.classList.add("modal-show");
    if (storage_fullname) {
      fullname.value = storage_fullname;
      email.focus();
    } if (storage_email) {
      email.value = storage_email;
      text.focus();
    } else {
      fullname.focus();
    }
  });
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (event) {
      event.preventDefault();
      feedback.classList.remove("modal-show","modal-error");
      overlay.classList.remove("modal-show");
    });
  };
  overlay.addEventListener("click", function(event) {
    event.preventDefault();
    feedback.classList.remove("modal-show","modal-error");
    overlay.classList.remove("modal-show");
  });
  formfeed.addEventListener("submit", function (event) {
    if (!fullname.value || !email.value || !text.value) {
      event.preventDefault();
      feedback.classList.remove("modal-error");
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add("modal-error");
      console.log("Нужно заполнить все поля");
    } else {
      if (isStorageSupport) {
      localStorage.setItem("fullname", fullname.value);
      localStorage.setItem("email", email.value);
      }
    }
  });
}

if (map,maps) {
  map.addEventListener("click", function (event) {
    event.preventDefault();
    maps.classList.add("modal-show");
    overlay.classList.add("modal-show");
  });
  for (var i = 0; i < close.length; i++) {
    close[i].addEventListener("click", function (event) {
      event.preventDefault();
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
      feedback.classList.remove("modal-show","modal-error");
      overlay.classList.remove("modal-show");
    }
    if (maps.classList.contains("modal-show") && overlay.classList.contains("modal-show")) {
      maps.classList.remove("modal-show");
      overlay.classList.remove("modal-show");
    }
  }
});