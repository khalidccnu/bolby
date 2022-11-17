// ===== Header / Navbar Toggle =====
function navbar_toggle(collapseID) {
    let cID = document.getElementById(collapseID);
    let navbarTl = document.querySelector(".navbar-toggler");

    cID.classList.toggle("collapse");
    navbarTl.classList.toggle("collapse");

    if (!cID.classList.contains("collapse")) navbarTl.classList.replace("lni-grid-alt", "lni-close");
    else navbarTl.classList.replace("lni-close", "lni-grid-alt");
}