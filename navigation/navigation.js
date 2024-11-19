document.write(`<header class = "unselectable">
    <span title = "School’s Name and Logo">
        <img src = "${rootPath}media-support/sps-logo.png" alt = "SPS Logo" style = "float: left; height: 55px; margin: 5px;" />
        <span style = "display: inline-block; font-size: xx-large;">
            St. Peter’s Sr. Sec. School
            <span style = "display: block; font-size: large;"> Bharatpur (Rajasthan) </span>
        </span>
    </span>
    <span title = "CBSE Affiliation Information">
        <svg width = "20.5381" height = "20.1812">
            <g>
                <rect height = "20.1812" opacity = "0" width = "20.5381" x = "0" y = "0" />
                <path d = "M20.1767 10.0875C20.1767 15.606 15.6141 20.175 10.0875 20.175C4.5707 20.175 0 15.606 0 10.0875C0 4.56094 4.56269 0 10.0795 0C15.606 0 20.1767 4.56094 20.1767 10.0875ZM8.47461 8.31249C8.01699 8.31249 7.66133 8.6664 7.66133 9.10097C7.66133 9.56835 8.01699 9.89921 8.47461 9.89921L9.49961 9.89921L9.49961 14.1234L8.29804 14.1234C7.83594 14.1234 7.47851 14.4773 7.47851 14.9102C7.47851 15.3793 7.83594 15.7102 8.29804 15.7102L12.4092 15.7102C12.873 15.7102 13.2287 15.3793 13.2287 14.9102C13.2287 14.4773 12.873 14.1234 12.4092 14.1234L11.285 14.1234L11.285 9.33241C11.285 8.7205 10.9834 8.31249 10.4025 8.31249ZM8.63379 5.34706C8.63379 6.12265 9.25664 6.74726 10.026 6.74726C10.7953 6.74726 11.4101 6.12265 11.4101 5.34706C11.4101 4.56093 10.7953 3.94336 10.026 3.94336C9.25664 3.94336 8.63379 4.56093 8.63379 5.34706Z" fill-opacity = "0.85" />
            </g>
        </svg>
        <span style = "display: inline-block; vertical-align: middle; line-height: 25px;">
            Affiliated to CBSE <br />
            Affiliation No.: <span id = "affiliationNo" title = "Click to Copy to Clipboard" onclick = "copyText('affiliationNo')"> 1730118 </span> <br />
            School Code: <span id = "schoolCode" title = "Click to Copy to Clipboard" onclick = "copyText('schoolCode')"> 10401 </span>
        </span>
    </span>
    <span id = "headerContactUs" title = "Contact Us">
        <svg width = "16.8619" height = "17.6668">
            <g>
                <rect height = "17.6668" opacity = "0" width = "16.8619" x = "0" y = "0" />
                <path d = "M1.75429 17.6535L14.748 17.6535C15.8457 17.6535 16.5006 17.1336 16.5006 16.2703C16.5006 13.7578 13.3146 10.3023 8.24629 10.3023C3.18769 10.3023 0 13.7578 0 16.2703C0 17.1336 0.656639 17.6535 1.75429 17.6535ZM8.2543 8.56836C10.3828 8.56836 12.1939 6.67578 12.1939 4.2291C12.1939 1.8293 10.3775 0 8.2543 0C6.13105 0 4.31641 1.86133 4.31641 4.24687C4.31641 6.67578 6.11953 8.56836 8.2543 8.56836Z" fill-opacity = "0.85" />
            </g>
        </svg>
        <span style = "display: inline-block; vertical-align: middle; line-height: 25px;">
            Phone: <a title = "Click to Call" href = "tel:+915644222700"> (+91) 56442 22700 </a> <br />
            E-mail: <a title = "Click to E-mail" href = "mailto:stpetersbharatpur@gmail.com"> stpetersbharatpur@gmail.com </a> <br />
            Address: <span id = "shortAddress" title = "Click to Copy to Clipboard" onclick = "copyText('shortAddress')"> Bharatpur, Rajasthan (India) </span>
        </span>
    </span>
</header>
<nav class = "unselectable" id = "navbarContainer">
    <div id = "navbar">
        <a title = "Homepage" href = "${rootPath}index.html"> Home </a>
        <div class = "dropdownContainer" onclick = "lockMenu('dAbout')" onmouseover = "showMenu('dAbout')" onmouseout = "hideMenu('dAbout')">
            <button class = "dropdownButton" id = "bAbout" title = "All About Us"> About Us </button>
            <div class = "dropdownContent" id = "dAbout">
                <a title = "Our History" href = "${rootPath}about/history.html"> Our History </a>
                <a title = "School Infrastructure" href = "${rootPath}about/infrastructure.html"> Infrastructure </a>
                <a title = "School Management Committee" href = "${rootPath}about/management.html"> Management Committee </a>
                <a title = "Teaching Faculty" href = "${rootPath}about/faculty.html"> Teaching Faculty </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = "lockMenu('dAdmissions')" onmouseover = "showMenu('dAdmissions')" onmouseout = "hideMenu('dAdmissions')">
            <button class = "dropdownButton" id = "bAdmissions" title = "Everything related to Admissions"> Admissions </button>
            <div class = "dropdownContent" id = "dAdmissions">
                <a title = "Conditions for Admission of a Child" href = "${rootPath}admissions/policy.html"> Admission Policy </a>
                <a title = "Pattern for Quarterly Payment of Students’ Fees" href = "${rootPath}admissions/fee-structure.html"> Fee Structure </a>
                <a title = "Prescribed Books for All Classes" href = "${rootPath}admissions/book-list.html"> Book List </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = "lockMenu('dAcademics')" onmouseover = "showMenu('dAcademics')" onmouseout = "hideMenu('dAcademics')">
            <button class = "dropdownButton" id = "bAcademics" title = "Academic Policies"> Academics </button>
            <div class = "dropdownContent" id = "dAcademics">
                <a title = "Rules to be followed in the Library" href = "${rootPath}academics/library-rules.html"> Library Rules </a>
                <a title = "Results of Our School’s CBSE Annual Examination Attendees" href = "${rootPath}academics/results.html"> Results </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = "lockMenu('dSchoolLife')" onmouseover = "showMenu('dSchoolLife')" onmouseout = "hideMenu('dSchoolLife')">
            <button class = "dropdownButton" id = "bSchoolLife" title = "Discover More About Student Life at Our School"> School Life </button>
            <div class = "dropdownContent" id = "dSchoolLife">
                <a title = "School Timings, and the Prescribed Uniform for Students" href = "${rootPath}life/timings-uniform.html"> Timings and Uniform </a>
                <a title = "Guidelines for Students’ Betterment" href = "${rootPath}life/guidelines.html"> Guidelines for Students </a>
                <a title = "School Cabinet" href = "${rootPath}life/cabinet.html"> Students’ Cabinet </a>
                <a title = "Daily Prayers and School Anthem" href = "${rootPath}life/prayers-anthem.html"> Prayers and Anthem </a>
                <a title = "List of All Holidays in the Current Session" href = "${rootPath}life/holidays.html"> Holiday List </a>
            </div>
        </div>
        <a title = "Public Disclosure, as mandated by CBSE" href = "https://www.stpetersbharatpur.in/pdf/Mandatory-public-Disclosure.pdf" target = "_blank" style = "float: right;"> Mandatory Public Disclosure </a>
    </div>
</nav>`);

const dMenus = ["dAbout", "dAdmissions", "dAcademics", "dSchoolLife"];
let dMenuLocked = [0, 0, 0, 0];
const dMenuHeights = [];
for (let id of dMenus) {
    let element = document.getElementById(id);
    element.style.height = "max-content";
    dMenuHeights.push(getComputedStyle(element).getPropertyValue("height"));
    element.style.height = "";
}

function copyText(id) {
    navigator.clipboard.writeText(document.getElementById(id).innerText);
    alert(`The text “${document.getElementById(id).innerText}” has been copied to your Clipboard.`);
}
function hideAllMenus() {
    for (let id of dMenus) {
        idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "";
        document.getElementById(idButton).style.backgroundColor = "";
        document.getElementById(id).style.height = "";
    }
}
function showMenu(id) {
    if (!dMenuLocked.includes(1)) {
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "black";
        document.getElementById(idButton).style.backgroundColor = getComputedStyle(document.querySelector(":root")).getPropertyValue("--hover-colour");
        document.getElementById(id).style.height = dMenuHeights[dMenus.indexOf(id)];
    }
}
function hideMenu(id) {
    if (dMenuLocked[dMenus.indexOf(id)] == 0) {
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "";
        document.getElementById(idButton).style.backgroundColor = "";
        document.getElementById(id).style.height = "";
    }
}
function lockMenu(id) {
    const i = dMenus.indexOf(id);
    const menuLockStatus = dMenuLocked[i];
    dMenuLocked = [0, 0, 0, 0, 0, 0];
    dMenuLocked[i] = 1 - menuLockStatus;
    hideAllMenus();
    if (menuLockStatus == 0) {
        // if menuLockStatus == 0, then after *see 2 lines above (currentLine - 2)*, it has to be shown
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "black";
        document.getElementById(idButton).style.backgroundColor = getComputedStyle(document.querySelector(":root")).getPropertyValue("--browser-theme-colour"); // to indicate that dropdown is locked
        document.getElementById(id).style.height = dMenuHeights[dMenus.indexOf(id)];
    }
}

document.addEventListener("click", function (event) {
    if (!(dMenus.includes("d" + event.target.id.slice(1)) || dMenus.includes(event.target.id))) {
        dMenuLocked = [0, 0, 0, 0, 0, 0];
        hideAllMenus();
    }
});
