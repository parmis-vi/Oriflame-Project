//first page accordion start//
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
        .classList.replace("fa-chevron-right", "fa-chevron-down");
      item.querySelector("i").classList.replace("col6262", "colghover");

      item.querySelector("i").classList.add("colghover");
      item.querySelector("h3").classList.add("colghover");
    } else {
      description.style.height = "0px";
      item
        .querySelector("i")
        .classList.replace("fa-chevron-down", "fa-chevron-right");

      item.querySelector("i").classList.replace("colghover", "clo6262");
      item.querySelector("i").classList.remove("colghover");
      item.querySelector("h3").classList.remove("colghover");
      item.querySelector("i").classList.add("col6262");
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
        .classList.replace("fa-chevron-down", "fa-chevron-right");
      item2.querySelector("i").classList.remove("colghover");
      item2.querySelector("h3").classList.remove("colghover");
      item2.querySelector("i").classList.add("col6262");
    }
  });
}
//first page accordion start//

$(document).ready(function () {
  // jquery method....
  $("div#all").css({
    position: "relative",
  });

  $("div#right").css({
    position: "absolute",
    right: "0",
  });
});

var start = alert("برای ورود به صفحه ی دوم از قسمت 'ERUOP' گزینه ی 'UK | UK' را انتخاب کنید")
