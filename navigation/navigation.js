document.write(`<header class = "unselectable">
    <span title = "School’s Name and Logo">
        <img src = "${rootPath}media-support/sps-logo.png" alt = "SPS Logo" style = "float: left; height: 55px; margin: 5px;" />
        <span style = "display: inline-block; font-size: xx-large;">
            St. Peter’s Sr. Sec. School
            <span style = "display: block; font-size: large;"> Bharatpur (Rajasthan) </span>
        </span>
    </span>
    <span title = "CBSE Affiliation Information">
        <svg height = "24px" viewBox = "0 -960 960 960" width = "24px">
            <path d = "M440-280h80v-240h-80v240Zm40-320q17 0 28.5-11.5T520-640q0-17-11.5-28.5T480-680q-17 0-28.5 11.5T440-640q0 17 11.5 28.5T480-600Zm0 520q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Z" />
        </svg>
        <span style = "display: inline-block; vertical-align: middle; line-height: 25px;">
            Affiliated to CBSE <br />
            Affiliation No.: <span id = "affiliationNo" title = "Click to Copy to Clipboard" onclick = "copyText('affiliationNo')"> 1730118 </span> <br />
            School Code: <span id = "schoolCode" title = "Click to Copy to Clipboard" onclick = "copyText('schoolCode')"> 10401 </span>
        </span>
    </span>
    <span id = "headerContactUs" title = "Contact Us">
        <svg height = "24px" viewBox="0 -960 960 960" width = "24px">
            <path d = "M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-160v-112q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v112H160Z" />
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

const darkModeCheck = matchMedia("(prefers-color-scheme: dark)");
const dMenus = ["dAbout", "dAdmissions", "dAcademics", "dSchoolLife"];
let dMenuLocked = [0, 0, 0, 0];
let activeMenuButtonId = null;
let rootCSS = getComputedStyle(document.querySelector(":root"));
const dMenuHeights = [];
for (let id of dMenus) {
    let element = document.getElementById(id);
    element.style.height = "max-content";
    dMenuHeights.push(getComputedStyle(element).getPropertyValue("height"));
    element.style.height = "";
}

function switchColourTheme() {
    rootCSS = getComputedStyle(document.querySelector(":root"));
    if (activeMenuButtonId) {
        let menuButtonStyle = document.getElementById(activeMenuButtonId).style;
        if (dMenuLocked.includes(1)) {
            menuButtonStyle.backgroundColor = rootCSS.getPropertyValue("--browser-theme-colour");
        } else {
            menuButtonStyle.backgroundColor = rootCSS.getPropertyValue("--hover-colour");
        }
    }
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
    activeMenuButtonId = null;

}
function showMenu(id) {
    if (!dMenuLocked.includes(1)) {
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "black";
        document.getElementById(idButton).style.backgroundColor = rootCSS.getPropertyValue("--hover-colour");
        document.getElementById(id).style.height = dMenuHeights[dMenus.indexOf(id)];
        activeMenuButtonId = idButton;

    }
}
function hideMenu(id) {
    if (!dMenuLocked.includes(1)) {
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "";
        document.getElementById(idButton).style.backgroundColor = "";
        document.getElementById(id).style.height = "";
        activeMenuButtonId = null;

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
        document.getElementById(idButton).style.backgroundColor = rootCSS.getPropertyValue("--browser-theme-colour"); // to indicate that dropdown is locked
        document.getElementById(id).style.height = dMenuHeights[dMenus.indexOf(id)];
        activeMenuButtonId = idButton;

    }
}

darkModeCheck.addEventListener("change", (event) => switchColourTheme());
document.addEventListener("click", function (event) {
    if (!(dMenus.includes("d" + event.target.id.slice(1)) || dMenus.includes(event.target.id))) {
        dMenuLocked = [0, 0, 0, 0, 0, 0];
        hideAllMenus();
    }
});
