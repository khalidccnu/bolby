// ===== Theme Customize =====
let tmPallet = document.querySelector(".tm-customize");
const fontSize = tmPallet.querySelectorAll(".choose-size span");
const color = tmPallet.querySelectorAll(".choose-color span");
const bg = tmPallet.querySelectorAll(".choose-bg > div");

function openTmPallet() {
    tmPallet.style.display = "grid";
}

function closeTmPallet() {
    tmPallet.style.display = "none";
}

// Font Size
fontSize.forEach(function(e) {
    e.addEventListener("click", function() {
        fontSize.forEach(function(e) {
            e.classList.remove("active");
        });

        e.classList.add("active");

        let size;

        if (e.classList.contains("font-size-1")) size = "12px";
        else if (e.classList.contains("font-size-2")) size = "14px";
        else if (e.classList.contains("font-size-3")) size = "16px";
        else if (e.classList.contains("font-size-4")) size = "18px";

        document.documentElement.style.fontSize = size;
    });
});

// Color
color.forEach(function(e) {
    e.addEventListener("click", function() {
        color.forEach(function(e) {
            e.classList.remove("active");
        });

        e.classList.add("active");

        let primaryHue;

        if (e.classList.contains("color-1")) primaryHue = "252";
        else if (e.classList.contains("color-2")) primaryHue = "52";
        else if (e.classList.contains("color-3")) primaryHue = "352";
        else if (e.classList.contains("color-4")) primaryHue = "152";
        else if (e.classList.contains("color-5")) primaryHue = "202";

        document.documentElement.style.setProperty("--color-primary-Hue", primaryHue);
    });
});

// Background
bg.forEach(function(e) {
    e.addEventListener("click", function() {
        bg.forEach(function(e) {
            e.classList.remove("active");
        });

        e.classList.add("active");

        let colorLightLightness;
        let colorWhiteLightness;
        let colorDarkLightness;

        function choose_bg() {
            document.documentElement.style.setProperty("--color-light-lightness", colorLightLightness);
            document.documentElement.style.setProperty("--color-white-lightness", colorWhiteLightness);
            document.documentElement.style.setProperty("--color-dark-lightness", colorDarkLightness);
        }

        if (e.classList.contains("bg-1")) {
            location.reload();
        } else if (e.classList.contains("bg-2")) {
            colorLightLightness = "15%";
            colorWhiteLightness = "20%";
            colorDarkLightness = "95%";

            choose_bg();
        } else if (e.classList.contains("bg-3")) {
            colorLightLightness = "5%";
            colorWhiteLightness = "10%";
            colorDarkLightness = "95%";

            choose_bg();
        }
    });
});

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

// ===== Testimonial / Swiper Slider =====
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

// ===== Contact =====
function contact(item) {
    if (item.value === "") item.classList.remove("active");
    else item.classList.add("active");
}

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