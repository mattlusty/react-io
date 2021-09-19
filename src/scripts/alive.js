$(document).ready(function () {
  setupAccordion();
  setupSideMenu();
  setupStickyNav();
  setupPreventParentScroll();

  var p1 = fetch("https://www.anapioficeandfire.com/api/books");
  p1.hello = "hello p1";
  var p2 = p1.then((res) => {
    var p3 = res.json();
    p3.hello = "hello p3";
    console.log("p3", p3);
    return p3;
  });
  p2.hello = "hello p2";
  console.log("p1", p1);
  console.log("p2", p2);
});

// Sticky Nav
/////////////////////////////////
function setupStickyNav() {
  let nav = $(".nav")[0];
  let navToggler = $(".nav-toggler");
  $(navToggler).click(function (event) {
    $(navToggler).toggleClass("locked");
    let isLocked = $(nav).hasClass("locked");
    let scroll = window.scrollY;
    if (scroll > 58) {
      if (!isLocked) {
        nav.classList.toggle("fixed");
        nav.clientWidth;
      }
      $(nav).addClass("transition");
      $(nav).toggleClass("locked");
    } else {
      if (scroll == 0) {
        nav.classList.toggle("fixed");
      } else {
        if (!isLocked) {
          nav.classList.toggle("fixed");
          nav.style.transform = "translateY(-" + scroll + "px)";
          nav.clientWidth;
          $(nav).addClass("transition");
          nav.style.transform = null;
        } else {
          $(nav).addClass("transition");
          nav.style.transform = "translateY(-" + scroll + "px)";
        }
      }
      nav.classList.toggle("locked");
    }
  });
  nav.addEventListener("transitionend", function () {
    let isLocked = this.classList.contains("locked");
    this.classList.toggle("fixed", isLocked);
    $(this).removeClass("transition");
    this.style.transform = null;
  });
}

// Accordion Menu
/////////////////////////////////
function setupAccordion() {
  $(".item-name").click(function (event) {
    event.stopPropagation();
    let content = $(this).next()[0];

    if (content.children.length == 0) {
      return;
    }

    let parent = $(this).parent()[0];
    let wasOpen = $(parent).hasClass("open");
    let isTransitioning = $(content).hasClass("transitioning");
    let fullHeight;
    let hasContent = content.innerHTML;

    $(parent).toggleClass("open");

    content.clientWidth;

    if (isTransitioning) {
      console.log("here");
      if (wasOpen) {
        finalHeight = 0;
      } else {
        finalHeight = content.dataset.initHeight;
      }
    } else {
      $(content).addClass("transitioning");
      console.log("ther");
      fullHeight = content.offsetHeight; // element at this point must have display:block and no explicit style.height
      var initHeight = wasOpen ? fullHeight : 0,
        finalHeight = wasOpen ? 0 : fullHeight;
      content.dataset.initHeight = initHeight;
      content.style.height = initHeight + "px";
    }
    content.clientWidth; // needed to force reflow to acknowledge initHeight change
    content.style.height = finalHeight + "px"; // start transition
  });

  // attach transition end handler
  $(".content").each(function () {
    this.addEventListener("transitionend", function () {
      this.classList.remove("transitioning");
      this.style.height = null;
    });
  });

  // $(hamIcon)[0].setAttributeNS(null, "class", "far hello");
}

function setupSideMenu() {
  let sideMenu = $(".side-menu")[0];
  let sideMenuWrapper = $(".side-menu-wrapper")[0];
  let hamIcon = $(".side-menu .ham .mai-menu")[0];

  $(".ham").click(function () {
    console.log(hamIcon);
    $(sideMenu).toggleClass("hidden");
    $(sideMenuWrapper).toggleClass("hidden");
    $(hamIcon).toggleClass("mai-times");
    $(hamIcon).toggleClass("mai-menu");
  });
}

// Prevent parent scroll
/////////////////////////////////

function setupPreventParentScroll() {
  var prevent = function (ev) {
    ev.stopPropagation();
    ev.preventDefault();
    ev.returnValue = false;
    return false;
  };
  $(".accordion").on("DOMMouseScroll mousewheel", function (ev) {
    console.log("accord scroll");
    var $this = $(this),
      scrollTop = this.scrollTop,
      scrollHeight = this.scrollHeight,
      height = $this.innerHeight(),
      delta = ev.originalEvent.wheelDelta,
      up = delta > 0;

    if (!up && -delta > scrollHeight - height - scrollTop) {
      // Scrolling down, but this will take us past the bottom.
      $this.scrollTop(scrollHeight);
      return prevent(ev);
    } else if (up && delta > scrollTop) {
      // Scrolling up, but this will take us past the top.
      $this.scrollTop(0);
      return prevent(ev);
    }
  });
  $(".side-menu .header").on("DOMMouseScroll mousewheel", function (ev) {
    console.log("header scroll");
    return prevent(ev);
  });
}
/////////////////////////////////

function Util() {}

Util.getFullHeight = function (element) {
  let fullHeight = element.offsetHeight;
  return fullHeight;
};
