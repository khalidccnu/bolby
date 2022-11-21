// ===== Header / Navbar Toggle =====
function navbar_toggle(collapseID) {
    let cID = document.getElementById(collapseID);
    let navbarTl = document.querySelector(".navbar-toggler");

    cID.classList.toggle("collapse");
    navbarTl.classList.toggle("collapse");

    if (!cID.classList.contains("collapse")) navbarTl.classList.replace("lni-grid-alt", "lni-close");
    else navbarTl.classList.replace("lni-close", "lni-grid-alt");
}

// ===== Header / Navlink Active =====
let section = document.querySelectorAll("section");

function navlink_active() {
    let sY = scrollY;

    section.forEach(function(item) {
        let sectionTop = item.offsetTop - 250;
        let sectionBottom = sectionTop + item.offsetHeight;
        let sectionId = item.getAttribute("id");

        if (sY > sectionTop && sY <= sectionBottom) document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.add("active");
        else document.querySelector(".navbar-nav a[href*=" + sectionId + "]").classList.remove("active");
    });
}

// ===== Header / Fixed =====
let header = document.querySelector("header");
let link = document.querySelectorAll("a[href*='#']:not([href='#'])");

link.forEach(function(item) {
    item.addEventListener("click", function(event) {
        if (innerWidth <= 767 && item.classList.contains("nav-link")) navbar_toggle("navbar-collapse");

        let href = item.getAttribute("href");
        let targetPos = document.querySelector(href).offsetTop;

        if (innerWidth <= 767) {
            scroll({
                behavior: "smooth",
                top: targetPos
            });
        } else {
            scroll({
                behavior: "smooth",
                top: targetPos - header.offsetHeight
            });
        }

        event.preventDefault();
    });
});

// ===== Header / Sticky =====
function header_sticky() {
    if (innerWidth > 767) {
        if (document.documentElement.scrollTop > 10) header.classList.add("sticky");
        else header.classList.remove("sticky");
    }
}

// ===== Home / Scroll Down =====
function home_scroll_down() {
    let scrollDown = document.querySelector(".scroll-down");

    if (document.documentElement.scrollTop > 10) scrollDown.classList.add("hide");
    else scrollDown.classList.remove("hide");
}

// ===== Portfolio =====
document.querySelectorAll(".portfolio-filter .filter-item").forEach(function(item) {
    item.addEventListener("click", function() {
        document.querySelector(".portfolio-filter .active").classList.remove("active");
        item.classList.add("active");

        let filterValue = item.getAttribute("data-filter");

        document.querySelectorAll(".portfolio-item").forEach(function(item) {
            if (item.classList.contains(filterValue) || filterValue === "all") {
                item.classList.remove("hide");
                item.classList.add("show");
            } else {
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    });
});

// ===== Swiper Slider =====
const swiper = new Swiper(".tm-swiper", {
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: true
    },
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    }
});

// ===== Initial Load =====
navlink_active();
header_sticky();
home_scroll_down();

// ===== Window Scroll Event =====
onscroll = function() {
    navlink_active();
    header_sticky();
    home_scroll_down();
}