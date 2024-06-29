// to add: footer
// currently open webpage (menu) > color: black; background-color: peachpuff;
// currently open webpage (dropdown) > background-color: whitesmoke;
// currently open webpageʼs parent button > color: black; background-color: cornsilk;

const dMenus = ["dAbout", "dAdmissions", "dAcademics", "dSchoolLife", "dNewsEvents"];
const dMenuHeights = ["196px", "147px", "147px", "196px", "147px"];
let dMenuLocked = [0, 0, 0, 0, 0];

function copyText(id) {navigator.clipboard.writeText(document.getElementById(id).innerText);}
function hideAllMenus() {
    for (let id of dMenus) {
        let idButton = "b" + id.slice(1);
        if (idButton == currentMenu) {
            document.getElementById(idButton).style.backgroundColor = "cornsilk";
        } else {
            document.getElementById(idButton).style.color = "";
            document.getElementById(idButton).style.backgroundColor = "";
        }
        document.getElementById(id).style.height = "";
    }
}
function showMenu(id) {
    if (!dMenuLocked.includes(1)) {
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "black";
        document.getElementById(idButton).style.backgroundColor = "cornsilk";
        document.getElementById(id).style.height = dMenuHeights[dMenus.indexOf(id)];
    }
}
function hideMenu(id) {
    if (dMenuLocked[dMenus.indexOf(id)] == 0) {
        let idButton = "b" + id.slice(1);
        if (idButton != currentMenu) {
            document.getElementById(idButton).style.color = "";
            document.getElementById(idButton).style.backgroundColor = "";
        }
        document.getElementById(id).style.height = "";
    }
}
function lockMenu(id) {
    const i = dMenus.indexOf(id);
    const menuLockStatus = dMenuLocked[i];
    dMenuLocked = [0, 0, 0, 0, 0, 0];
    dMenuLocked[i] = 1 - menuLockStatus;
    hideAllMenus();
    if (menuLockStatus == 0) { // if menuLockStatus == 0, then after *see 2 lines above (currentLine - 2)*, it has to be shown
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "black";
        document.getElementById(idButton).style.backgroundColor = "peachpuff"; // to indicate that dropdown is locked
        document.getElementById(id).style.height = dMenuHeights[dMenus.indexOf(id)];
    }
}

document.write(`<header class = "unselectable">
    <span title = "Schoolʼs Name and Logo">
        <img id = "logo" src = "${rootPath}media-support/sps-logo.png" alt = "SPS Logo" style = "float: left; height: 55px; margin: 5px;">
        <span style = "display: inline-block; font-size: xx-large;">
            St. Peterʼs Sr. Sec. School
            <span style = "display: block; font-size: large;"> Bharatpur (Rajasthan) </span>
        </span>
    </span>
    <span title = "CBSE Affiliation Information">
        <img src = "${rootPath}media-support/black/info-icon.svg" alt = "Information Icon" style = "margin: 10px; vertical-align: middle;">
        <span style = "display: inline-block; vertical-align: middle; line-height: 25px;">
            Affiliated to CBSE <br>
            Affiliation No.: <span id = "affiliationNo" title = "Click to Copy to Clipboard" onclick = copyText("affiliationNo")> 1730118 </span> <br>
            School Code: <span id = "schoolCode" title = "Click to Copy to Clipboard" onclick = copyText("schoolCode")> 10401 </span>
        </span>
    </span>
    <span id = "headerContactUs" title = "Contact Us">
        <img src = "${rootPath}media-support/black/person-icon.svg" alt = "Information Icon" style = "margin: 10px; vertical-align: middle;">
        <span style = "display: inline-block; vertical-align: middle; line-height: 25px;">
            Phone: <a title = "Click to Call" href = "tel:+915644222700"> (+91) 56442 22700 </a> <br>
            E-mail: <a title = "Click to E-mail" href = "mailto:stpetersbharatpur@gmail.com"> stpetersbharatpur@gmail.com </a> <br>
            Address: <span id = "shortAddress" title = "Click to Copy to Clipboard" onclick = copyText("shortAddress")> Bharatpur, Rajasthan (India) </span>
        </span>
    </span>
</header>
<nav class = "unselectable" id = "navbarContainer">
    <div id = "navbar">
        <a id = "bHome" title = "Homepage" href = "/"> Home </a>
        <div class = "dropdownContainer" onclick = lockMenu("dAbout") onmouseover = showMenu("dAbout") onmouseout = hideMenu("dAbout")>
            <button class = "dropdownButton" id = "bAbout" title = "All About Us"> About Us </button> 
            <div class = "dropdownContent" id = "dAbout">
                <a id = "aHistory" title = "Our History" href = ""> Our History </a>
                <a id = "aInfrastructure" title = "School Infrastructure" href = ""> Infrastructure </a>
                <a id = "aManagement" title = "School Management Committee" href = ""> Management Committee </a>
                <a id = "aFaculty" title = "Teaching Faculty" href = ""> Teaching Faculty </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = lockMenu("dAdmissions") onmouseover = showMenu("dAdmissions") onmouseout = hideMenu("dAdmissions")>
            <button class = "dropdownButton" id = "bAdmissions" title = "Everything related to Admissions"> Admissions </button>
            <div class = "dropdownContent" id = "dAdmissions">
                <a id = "aAdmissionPolicy" title = "Conditions for Admission of a Child" href = ""> Admission Policy </a>
                <a id = "aFee" title = "Pattern for Quarterly Payment of Studentsʼ Fees" href = ""> Fee Structure </a>
                <a id = "aBooks" title = "Prescribed Books for All Classes" href = ""> Book List </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = lockMenu("dAcademics") onmouseover = showMenu("dAcademics") onmouseout = hideMenu("dAcademics")>
            <button class = "dropdownButton" id = "bAcademics" title = "Academic Policies"> Academics </button>
            <div class = "dropdownContent" id = "dAcademics">
                <a id = "aCalendar" title = "Pre-Planned Events and Functions" href = ""> Annual Calendar </a>
                <a id = "aLibraryRules" title = "Rules to be followed in the Library" href = ""> Library Rules </a>
                <a id = "aResults" title = "Results of Our Schoolʼs CBSE Annual Examination Attendees" href = ""> Results </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = lockMenu("dSchoolLife") onmouseover = showMenu("dSchoolLife") onmouseout = hideMenu("dSchoolLife")>
            <button class = "dropdownButton" id = "bSchoolLife" title = "Discover More About Student Life at Our School"> School Life </button>
            <div class = "dropdownContent" id = "dSchoolLife">
                <a id = "aTimingsUniform" title = "School Timings, and the Prescribed Uniform for Students" href = ""> Timings and Uniform </a>
                <a id = "aStudentGuidelines" title = "Guidelines for Studentsʼ Betterment" href = ""> Guidelines for Students </a>
                <a id = "aPrayersAnthem" title = "Daily Prayers and School Anthem" href = ""> Prayers and Anthem </a>
                <a id = "aHolidays" title = "List of All Holidays in the Current Session" href = ""> Holiday List </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = lockMenu("dNewsEvents") onmouseover = showMenu("dNewsEvents") onmouseout = hideMenu("dNewsEvents")>
            <button class = "dropdownButton" id = "bNewsEvents" title = "Latest News & Upcoming School Events"> News & Events </button>
            <div class = "dropdownContent" id = "dNewsEvents">
                <a id = "aNews" title = "Latest News regarding the School" href = ""> News </a>
                <a id = "aEvents" title = "Upcoming School Events" href = ""> Upcoming Events </a>
                <a id = "aAnnualReports" title = "Annual Reports of All Activities performed Yearly" href = ""> Annual Reports </a>
            </div>
        </div>
        <a id = "bMandatoryDisclosure" title = "Public Disclosure, as mandated by CBSE" href = "" style = "float: right;"> Mandatory Public Disclosure </a>
    </div>
</nav>`);
document.addEventListener("click", function(event) {
    if (!(dMenus.includes("d" + event.target.id.slice(1)) || dMenus.includes(event.target.id))) {
        dMenuLocked = [0, 0, 0, 0, 0, 0];
        hideAllMenus();
    }
});