"use strict";

/* Custom Menu (sidebar/header) */
let nav = {
  classes: {
    main: "nk-menu",
    item: "nk-menu-item",
    link: "nk-menu-link",
    toggle: "nk-menu-toggle",
    dropdown: "nk-menu-dropdown",
    dropdownparent: "has-dropdown",
    active: "active",
    current: "current-page",
  },
};

const Dropdown = {
  load: function (elm, dropdownparent) {
    let parent = elm.parentElement;
    if (!parent.classList.contains(dropdownparent)) {
      parent.classList.add(dropdownparent);
    }
  },
  toggle: function (elm, active) {
    let parent = elm.parentElement;
    let nextelm = elm.nextElementSibling;
    let speed =
      nextelm.children.length > 5 ? 400 + nextelm.children.length * 10 : 400;
    if (!parent.classList.contains(active)) {
      parent.classList.add(active);
      SlideDown(nextelm, speed);
    } else {
      parent.classList.remove(active);
      SlideUp(nextelm, speed);
    }
  },
  closeSiblings: function (elm, active, dropdownparent, submenu) {
    let parent = elm.parentElement;
    let siblings = parent.parentElement.children;
    Array.from(siblings).forEach((item) => {
      if (item !== parent) {
        item.classList.remove(active);
        if (item.classList.contains(dropdownparent)) {
          let subitem = item.querySelectorAll(`.${submenu}`);
          subitem.forEach((child) => {
            child.parentElement.classList.remove(active);
            SlideUp(child, 400);
          });
        }
      }
    });
  },
};

const DropdownHeader = function (selector) {
  const elm = document.querySelectorAll(selector);
  const active = nav.classes.active;
  const dropdownparent = nav.classes.dropdownparent;
  const dropdownmenu = nav.classes.dropdown;

  elm.forEach((item) => {
    Dropdown.load(item, dropdownparent);
    item.addEventListener("click", function (e) {
      e.preventDefault();
      if (window.innerWidth < 992) {
        Dropdown.toggle(item, active);
        Dropdown.closeSiblings(item, active, dropdownparent, dropdownmenu);
      }
    });
  });
};

/* Custom Header Menu */
let header = {
  classes: {
    root: "nk-header-main",
    base: "nk-header-menu",
    toggle: "header-menu-toggle",
    toggleActive: "active",
    active: "header-menu-active",
    overlay: "header-menu-overlay",
    body: "header-menu-shown",
  },
  break: {
    main: 992,
  },
};

const Navbar = {
  show: function (toggle, target) {
    toggle.forEach((toggleItem) => {
      toggleItem.classList.add(header.classes.toggleActive);
    });
    target.classList.add(header.classes.active);
    document.body.classList.add(header.classes.body);
    let overlayTemplate = `<div class='${header.classes.overlay}'></div>`;
    target.insertAdjacentHTML("beforebegin", overlayTemplate);
  },
  hide: function (toggle, target) {
    toggle.forEach((toggleItem) => {
      toggleItem.classList.remove(header.classes.toggleActive);
    });
    target.classList.remove(header.classes.active);
    document.body.classList.remove(header.classes.body);
    let overlay = document.querySelector(`.${header.classes.overlay}`);
    setTimeout(() => {
      overlay && overlay.remove();
    }, 400);
  },
  mobile: function (target) {
    if (header.break.main < window.innerWidth) {
      target.classList.remove("menu-mobile");
    } else {
      setTimeout(() => {
        target.classList.add("menu-mobile");
      }, 500);
    }
  },
  sticky: function (target) {
    let elem = document.querySelectorAll(target);
    if (elem.length > 0) {
      elem.forEach((item) => {
        let _item_offset = item.offsetTop;

        window.addEventListener("scroll", function () {
          if (window.scrollY > _item_offset) {
            item.classList.add("has-fixed");
          } else {
            item.classList.remove("has-fixed");
          }
        });
      });
    }
  },
  height: function (target) {
    let elem = document.querySelectorAll(target);
    if (elem.length > 0) {
      elem.forEach((item) => {
        document
          .querySelector("html")
          .style.setProperty("--header-main-height", `${item.offsetHeight}px`);
      });
    }
  },
};

Navbar.init = function () {
  let targetSl = document.querySelector(`.${header.classes.base}`);
  let toggleSl = document.querySelectorAll(`.${header.classes.toggle}`);
  toggleSl.forEach((item) => {
    Navbar.mobile(targetSl);
    item.addEventListener("click", function (e) {
      e.preventDefault();
      if (header.break.main > window.innerWidth) {
        if (!targetSl.classList.contains(header.classes.active)) {
          Navbar.show(toggleSl, targetSl);
        } else {
          Navbar.hide(toggleSl, targetSl);
        }
      }
    });

    window.addEventListener("resize", function () {
      if (header.break.main < window.innerWidth) {
        Navbar.hide(toggleSl, targetSl);
      }
      Navbar.mobile(targetSl);
    });

    document.addEventListener("mouseup", function (e) {
      if (e.target.closest(`.${header.classes.base}`) === null) {
        Navbar.hide(toggleSl, targetSl);
      }
    });
  });
  Navbar.sticky(`.nk-header .${header.classes.root}`);

  window.addEventListener("scroll", function () {
    Navbar.height(`.nk-header .${header.classes.root}`);
  });

  window.addEventListener("resize", function () {
    Navbar.height(`.nk-header .${header.classes.root}`);
  });
};

/* Add some class to current link */
const CurrentLink = function (
  selector,
  parent,
  submenu,
  base,
  active,
  intoView
) {
  let elm = document.querySelectorAll(selector);
  let currentURL = document.location.href,
    removeHash = currentURL.substring(
      0,
      currentURL.indexOf("#") == -1
        ? currentURL.length
        : currentURL.indexOf("#")
    ),
    removeQuery = removeHash.substring(
      0,
      removeHash.indexOf("?") == -1
        ? removeHash.length
        : removeHash.indexOf("?")
    ),
    fileName = removeQuery;

  elm.forEach(function (item) {
    var selfLink = item.getAttribute("href");
    if (fileName.match(selfLink)) {
      let parents = getParents(item, `.${base}`, parent);
      parents.forEach((parentElemets) => {
        parentElemets.classList.add(...active);
        let subItem = parentElemets.querySelector(`.${submenu}`);
        subItem !== null && (subItem.style.display = "block");
      });
      intoView && item.scrollIntoView({ block: "end" });
    } else {
      item.parentElement.classList.remove(...active);
    }
  });
};

/* Swiper slider */
const swiperCarousel = function (selector) {
  let elem = document.querySelectorAll(selector);
  if (elem.length > 0) {
    elem.forEach((item) => {
      let _breakpoints = item.dataset.breakpoints
        ? JSON.parse(item.dataset.breakpoints)
        : null;
      let _autoplay = item.dataset.autoplay
        ? JSON.parse(item.dataset.autoplay)
        : false;
      let _loop = item.dataset.loop ? JSON.parse(item.dataset.loop) : false;
      let _navigation = item.dataset.navigation
        ? JSON.parse(item.dataset.navigation)
        : false;
      let _pagination = item.dataset.pagination
        ? JSON.parse(item.dataset.pagination)
        : false;
      let _slidesPerView = item.dataset.slidesperview
        ? JSON.parse(item.dataset.slidesperview)
        : 1;

      new Swiper(item, {
        slidesPerView: _slidesPerView,
        loop: _loop,
        autoplay: _autoplay,
        navigation: _navigation
          ? {
              prevEl: ".swiper-prev",
              nextEl: ".swiper-next",
            }
          : false,
        pagination: _pagination
          ? {
              el: ".swiper-pagination",
              clickable: true,
            }
          : false,
        breakpoints: _breakpoints,
      });
    });
  }
};

  
  DropdownHeader(".nk-menu-dropdown");
  Navbar.init();
  swiperCarousel(".swiper-carousel");
  CurrentLink(
    ".nk-menu",
    ".nk-menu > .nk-menu-item > a",
    "nk-menu-item",
    "nk-menu-sub",
    "nk-menu",
    ["active"],
    true
  );
