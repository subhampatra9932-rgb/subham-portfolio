 // ===============================
// MOBILE MENU
// ===============================

function toggleMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.toggle("active");
    }
}

function closeMenu() {
    const menu = document.getElementById("mobileMenu");

    if (menu) {
        menu.classList.remove("active");
    }
}


// ===============================
// SEMESTER OPEN / CLOSE
// ===============================

function toggleSemester(id) {
    const content = document.getElementById(id);
    const icon = document.getElementById("icon-" + id);

    if (!content) return;

    content.classList.toggle("active");

    if (icon) {
        if (content.classList.contains("active")) {
            icon.textContent = "−";
        } else {
            icon.textContent = "+";
        }
    }
}


// ===============================
// RESULT DETAILS
// ===============================

function toggleResult(id) {
    const result = document.getElementById(id);

    if (result) {
        result.classList.toggle("active");
    }
}


// ===============================
// INTERNSHIP CERTIFICATE
// ===============================

function openCertificate() {
    const certificate = document.getElementById("certificateBox");

    if (certificate) {
        certificate.classList.add("active");
    }
}

function closeCertificate() {
    const certificate = document.getElementById("certificateBox");

    if (certificate) {
        certificate.classList.remove("active");
    }
}


// ===============================
// CLOSE MENU / POPUP WITH ESC KEY
// ===============================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        const menu = document.getElementById("mobileMenu");
        const certificate = document.getElementById("certificateBox");

        if (menu) {
            menu.classList.remove("active");
        }

        if (certificate) {
            certificate.classList.remove("active");
        }
    }

});


// ===============================
// CLOSE MOBILE MENU AFTER CLICK
// ===============================

document.addEventListener("click", function (event) {

    const menu = document.getElementById("mobileMenu");
    const button = document.querySelector(".menu-btn");

    if (!menu || !button) return;

    if (
        menu.classList.contains("active") &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        menu.classList.remove("active");
    }

});