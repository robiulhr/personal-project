// ---------------------------------------about section code start here  --------------------------------------------------

// ---------------------------------------My own code --------------------------------------------------
(() => {
  let tabitemclass = document.querySelectorAll(".tab-items");
  let tabcontentclass = document.querySelectorAll(".tab-content");

  tabitemclass.forEach((element) => {
    element.addEventListener("click", (event) => {
      let tabitem = event.target.getAttribute("data-target");
      let tabitemactiveclass = document.querySelectorAll(".about-tabs .active");
      tabcontentclass.forEach((e) => {
        if (e.getAttribute("class").includes(tabitem)) {
          e.classList.add("active");
          tabitemactiveclass.forEach((element) => {
            element.classList.remove("active");
            element.classList.remove("outer-shadow");
            element.classList.remove("hover-in-shadow");
          });
        } else {
          e.classList.remove("active");
        }
        event.path[0].classList.add("active");
        event.path[0].classList.add("outer-shadow");
        event.path[0].classList.add("hover-in-shadow");
      });
    });
  });
})();

// ---------------------------------------Tutorial code --------------------------------------------------
// (() => {
//   let abouttabs = document.querySelector(".about-tabs");
//   let aboutsection = document.querySelector(".about-section");

//   abouttabs.addEventListener("click", function (x) {
//     let tabactive = document.querySelector(".tab-items.active");
//     // console.log(abouttabs.querySelector(".tab-items"));
//     // console.log(x.target.classList);
//     tabactive.classList.remove("active");
//     tabactive.classList.remove("outer-shadow");
//     if (x.target.classList.contains("tab-items")) {
//       let target = x.target.getAttribute("data-target");
//       x.target.classList.add("active");
//       x.target.classList.add("outer-shadow");
//       aboutsection
//         .querySelector(".tab-content.active")
//         .classList.remove("active");
//       aboutsection.querySelector(`.${target}`).classList.add("active");
//     }
//   });
// })();

// ---------------------------------------about section code end here  --------------------------------------------------

// -- -------------------------------------------------------------------- portfolio section code here ------------------------------------------------------------------------------------
(() => {
  const portfoliofilterclass = document.querySelector(".portfolio-filter"),
    filteritemclass = document.querySelectorAll(".filter-item"),
    portfolioitem = document.querySelectorAll(".portfolio-item"),
    portfolioitemcontainer = document.querySelector(".portfolio-items");
  console.log(portfolioitemcontainer);
  portfoliofilterclass.addEventListener("click", (event) => {
    if (
      event.target.classList.contains("filter-item") &&
      !event.target.classList.contains("active")
    ) {
      portfoliofilterclass
        .querySelector(".active")
        .classList.remove("outer-shadow", "active");
      event.target.classList.add("active", "outer-shadow");
      let datatarget = event.target.getAttribute("data-target");
      let all = "all";
      portfolioitem.forEach((e) => {
        e.classList.remove("display");
        if (
          datatarget !== e.getAttribute("data-catagory") &&
          datatarget !== all
        ) {
          console.log("didn' matched");
          e.classList.add("display");
        }
      });
    }
  });
  portfolioitemcontainer.addEventListener("click", (event) => {
    console.log(event.target.closest(".portfolio-item-inner"));
  });
})();
