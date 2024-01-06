//mega menu start//
const mega = document.getElementById("mega");
const mopen = document.getElementById("mopen");
const mclose = document.getElementById("mopen");
let isclick = true;
let hideicone = true;
let showorhide = function () {
  if (isclick) {
    mega.style.display = "flex";

    isclick = false;
  } else {
    mega.style.display = "none";
    isclick = true;
  }

  if (hideicone) {
    mopen.classList.add("mopen");

    hideicone = false;
  } else {
    mopen.classList.remove("mopen");
    mclose.classList.remove("mclose");

    hideicone = true;
  }
};

//mega menu end//

//joinus start//
const joinus = document.getElementById("joinus");
let click = true;
let regester = function () {
  if (click) {
    joinus.style.display = "flex";

    click = false;
  } else {
    joinus.style.display = "none";
    click = true;
  }
};
//joinus end//
const megaa = document.getElementById("megaa");
const mmopen = document.getElementById("mmopen");
let issclick = true;
let showworhide = function () {
  if (issclick) {
    megaa.style.display = "flex";

    issclick = false;
  } else {
    megaa.style.display = "none";
    issclick = true;
  }
};
const mmclose = document.getElementById("mmclose");
let hiddenicone = true;
let hiddenmega = function () {
  if (hiddenicone) {
    megaa.style.display = "none";
    hiddenicone = false;
  } else {
    megaa.style.display = "flex";
    hiddenicone = true;
  }
};

//slider start//
var slideIndex = 0;
function showSlides() {
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (var i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";

  setTimeout(showSlides, 4000);
}
showSlides();

//slider end//

//telegram satart//
const telegram = document.getElementById("telegram");
const newsletter = document.getElementById("newsletter");
telegram.addEventListener("click", (even) => {
  newsletter.classList.add("active");
});

const closee = document.getElementById("closee");
const newsletter2 = document.getElementById("newsletter");
closee.addEventListener("click", (even) => {
  newsletter2.classList.remove("active");
});

//telegram end//

const accordionContent2 = document.querySelectorAll(".accordion-content2");
accordionContent2.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", (even) => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      item
        .querySelector("i")
        .classList.replace("fa-chevron-right", "fa-chevron-up");
    } else {
      description.style.height = "0px";
      item
        .querySelector("i")
        .classList.replace("fa-chevron-up", "fa-chevron-right");
    }
  });
});

/*video */
const video = document.getElementsByClassName("custom-video__video");
let i;
for (i = 0; i < video.length; i++) {
  video[i].addEventListener("click", function () {
    const controls = this.nextElementSibling;
    if (controls.innerHTML === "▶") {
      controls.innerHTML = "| |";
      controls.style.display = "none";
      this.play();
    } else {
      controls.innerHTML = "▶";
      controls.style.display = "flex";
      this.pause();
    }
  });

  video[i].addEventListener(
    "ended",
    function () {
      const controls = this.nextElementSibling;
      controls.style.display = "flex";
      controls.innerHTML = "▶";
    },
    false
  );
}
//mega menu under sm size start//
const accordionContent = document.querySelectorAll(".accordion-content");
accordionContent.forEach((item, index) => {
  let header = item.querySelector("header");
  header.addEventListener("click", (even) => {
    item.classList.toggle("open");

    let description = item.querySelector(".description");
    if (item.classList.contains("open")) {
      description.style.height = `${description.scrollHeight}px`;
      item
        .querySelector("i")
        .classList.replace("fa-chevron-down", "fa-chevron-up");
    } else {
      description.style.height = "0px";
      item
        .querySelector("i")
        .classList.replace("fa-chevron-up", "fa-chevron-down");
    }
    removeOpen(index);
  });
});
function removeOpen(index1) {
  accordionContent.forEach((item2, index2) => {
    if (index1 != index2) {
      item2.classList.remove("open");

      let des = item2.querySelector(".description");
      des.style.height = "0px";
      item2
        .querySelector("i")
        .classList.replace("fa-chevron-up", "fa-chevron-down");
    }
  });
}
//mega menu under sm size end//
//on me slider start//
const initSlider = () => {
  const imageList = document.querySelector(".slider-wrapper", ".image-list");
  const slideButtons = document.querySelectorAll(
    ".slide-button",
    " .slider-wrapper"
  );

  slideButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log(button);
      const direction = button.id === "prev-slide" ? -1 : 1;
      const scrollAmount = imageList.clientWidth * direction;
      imageList.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
  });
};
window.addEventListener("load", initSlider);
//on me slider end//
