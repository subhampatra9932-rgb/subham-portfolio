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
const class10Result = {
  board: "Jharkhand Academic Council (JAC)",
  passingYear: 2023,
  totalMarks: 500,
  obtainedMarks: 409,
  percentage: "81.80%",
  subjects: [
    { name: "Hindi-A", marks: 88 },
    { name: "English", marks: 80 },
    { name: "Mathematics", marks: 89 },
    { name: "Science", marks: 76 },
    { name: "Social Science", marks: 76 },
    { name: "Sanskrit", marks: 74 }
  ]
};

const class12Result = {
  board: "Jharkhand Academic Council (JAC)",
  passingYear: 2025,
  stream: "Science",
  totalMarks: 500,
  obtainedMarks: 351,
  percentage: "70.20%",
  subjects: [
    { name: "English A", marks: 81 },
    { name: "Physics", marks: 56 },
    { name: "Chemistry", marks: 66 },
    { name: "Mathematics", marks: 88 },
    { name: "Computer Science", marks: 60 }
  ]
};
const schoolPasswords = {
  class10: "class10@123",
  class12: "class12@123"
};

const btechPasswords = {
  sem1: "btsem1@123",
  sem2: "btsem2@123",
  sem3: "btsem3@123",
  sem4: "btsem4@123",
  sem5: "btsem5@123",
  sem6: "btsem6@123",
  sem7: "btsem7@123",
  sem8: "btsem8@123"
};

function requestResultPassword(type) {
  const password = prompt("Enter password to view result:");
  if (password === null) return;

  let result;
  let html = "";
  let title = "";

  if (type === "class10" || type === "class12") {
    if (password !== schoolPasswords[type]) {
      alert("Wrong password! Please try again.");
      return;
    }

    result = type === "class10" ? class10Result : class12Result;
    title = type === "class10" ? "Class 10th Result" : "Class 12th Result";

    html = `
      <h3>${title}</h3>
      <p><strong>Board:</strong> ${result.board}</p>
      <p><strong>Passing Year:</strong> ${result.passingYear}</p>
      ${result.stream ? `<p><strong>Stream:</strong> ${result.stream}</p>` : ""}
      <table style="width:100%;color:white;border-collapse:collapse;">
        <tr><th>Subject</th><th>Marks</th></tr>
        ${result.subjects.map(s => `
          <tr>
            <td style="padding:8px;">${s.name}</td>
            <td style="padding:8px;">${s.marks}/100</td>
          </tr>
        `).join("")}
      </table>
      <h3>Total: ${result.obtainedMarks}/${result.totalMarks}</h3>
      <h3>Percentage: ${result.percentage}</h3>
    `;
  } else if (btechResults[type]) {
    if (password !== btechPasswords[type]) {
      alert("Wrong password! Please try again.");
      return;
    }

    result = btechResults[type];
    title = `B.Tech ${result.year} — Semester ${result.semester}`;

    html = `
      <h3>${title}</h3>
      <h3>SGPA: ${result.sgpa}</h3>
      <table style="width:100%;color:white;border-collapse:collapse;">
        <tr><th>Subject</th><th>Marks</th><th>Grade</th></tr>
        ${result.subjects.length
          ? result.subjects.map(s => `
              <tr>
                <td style="padding:8px;">${s.name}</td>
                <td style="padding:8px;">${s.marks}</td>
                <td style="padding:8px;">${s.grade}</td>
              </tr>
            `).join("")
          : `<tr><td colspan="3" style="padding:8px;">Subjects will be added later.</td></tr>`
        }
      </table>
    `;
  } else {
    alert("Result not found.");
    return;
  }

  if (
    result.officialResultUrl &&
    result.officialResultUrl.startsWith("https://") &&
    !result.officialResultUrl.includes("COLLEGE_RESULT_LINK")
  ) {
    html += `
      <div style="margin-top:20px;">
        <a href="${result.officialResultUrl}"
           target="_blank"
           rel="noopener noreferrer"
           style="display:inline-block;padding:12px 18px;
                  background:#2563eb;color:white;
                  text-decoration:none;border-radius:8px;">
          Check Official College Result ↗
        </a>
      </div>
    `;
  }

  const display = document.getElementById("resultDisplay");

  if (!display) {
    alert("Result display element not found in index.html.");
    return;
  }

  display.innerHTML = html;
  display.hidden = false;
  display.scrollIntoView({ behavior: "smooth", block: "start" });
}

function toggleYear(id) {
  const year = document.getElementById(id);
  year.hidden = !year.hidden;
}
const btechResults = {
  sem1: {
    year: "1st Year",
    semester: 1,
    subjects: [
      { name: "Engineering Mathematics", grade: "E" },
      { name: "English", grade: "E" },
      { name: "Problem Solving & Programming (C)",   grade: "A" },
      { name: "LEAN Line Setup Startup", grade: "E" },
      { name: "Python Programming", grade: "E" },
      { name: "Physics", grade: "E" },
      { name: "Problem Solving & Programming Lab", grade: "B" },
      { name: "Fundamentals of Python Programming Lab", grade: "E" },
      { name: "Physics & Semiconductor Device Lab", grade: "E" },
      { name: "AutoCAD", grade: "O" }
    ],
    sgpa: "8.83",
    officialResultUrl: "https://script.google.com/macros/s/AKfycbwDQAYtxhgJufNUJ4-2PcKuQKDF0HVtVHKH9NEflGKdF6SmSKg7CrB5ow8Ov2h0HOjr/exec"
  },

  sem2: {
    year: "1st Year",
    semester: 2,
    subjects: [
  { name: "Engineering Mathematics-II", grade: "O" },
  { name: "English-II", grade: "O" },
  { name: "Data Structures", grade: "E" },
  { name: "Object Oriented Programming", grade: "E" },
  { name: "Digital Electronics & Logic Design", grade: "E" },
  { name: "Universal Human Values", grade: "A" },
  { name: "English-II Lab", grade: "E" },
  { name: "Design Thinking", grade: "O" },
  { name: "Data Structures Lab", grade: "E" },
  { name: "Object Oriented Programming Lab", grade: "O" },
  { name: "Digital Electronics & Logic Design Lab", grade: "O" },
  { name: "Sports / Yoga / NCC / NSS", grade: "PASS" }
],
    sgpa: "9.29",
    officialResultUrl: "https://script.google.com/macros/s/AKfycbyHAvWsXuiJplSV7Ujgtc_vpKAWatniu3vo1TDyREbpUHX2j6HfrFE1SqVmTT50XQw/exec"
  },

  sem3: {
  year: "2nd Year",
  semester: 3,
  subjects: [
    { name: "Advanced Java", grade: "Pending" },
    { name: "Discrete Mathematics", grade: "Pending" },
    { name: "Microprocessor and Computer Architecture (MPCA)", grade: "Pending" },
    { name: "Artificial Intelligence (AI)", grade: "Pending" },
    { name: "Design and Analysis of Algorithms (DAA)", grade: "Pending" },
    { name: "Database Management System (DBMS)", grade: "Pending" }
  ],
  sgpa: "Pending",
  officialResultUrl: "COLLEGE_RESULT_LINK"
},

  sem4: { year: "2nd Year", semester: 4, subjects: [], sgpa: "Pending" },
  sem5: { year: "3rd Year", semester: 5, subjects: [], sgpa: "Pending" },
  sem6: { year: "3rd Year", semester: 6, subjects: [], sgpa: "Pending" },
  sem7: { year: "4th Year", semester: 7, subjects: [], sgpa: "Pending" },
  sem8: { year: "4th Year", semester: 8, subjects: [], sgpa: "Pending" }
};
