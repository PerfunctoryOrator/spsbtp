// to add: footer

document.write(`<header>
</header>
<nav class = "navbarContainer">
    <div class = "navbar">
        <a id = "bHome" title = "Homepage" href = "index.html"> Home </a>
        <div class = "dropdownContainer" onclick = lockMenu("dAbout") onmouseover = showMenu("dAbout") onmouseout = hideMenu("dAbout")>
            <button class = "dropdownButton" id = "bAbout" title = "All About Us"> About Us </button> 
            <div class = "dropdownContent" id = "dAbout">
                <a id = "aHistory" title = "" href = ""> Our History </a>
                <a id = "aInfrastructure" title = "" href = ""> Infrastructure </a>
                <a id = "aManagement" title = "" href = ""> Management Committee </a>
                <a id = "aFaculty" title = "" href = ""> Teaching Faculty </a>
                <a id = "aSelfDeclaration" title = "" href = ""> Self-Declaration </a>
                </div>
            </div>
        <div class = "dropdownContainer" onclick = lockMenu("dAdmissions") onmouseover = showMenu("dAdmissions") onmouseout = hideMenu("dAdmissions")>
            <button class = "dropdownButton" id = "bAdmissions" title = ""> Admissions </button>
            <div class = "dropdownContent" id = "dAdmissions">
                <a id = "aAdmissionPolicy" title = "" href = ""> Admission Policy </a>
                <a id = "aFee"title = "" href = ""> Fee Structure </a>
                <a id = "aBooks" title = "" href = ""> Book List </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = lockMenu("dAcademics") onmouseover = showMenu("dAcademics") onmouseout = hideMenu("dAcademics")>
            <button class = "dropdownButton" id = "bAcademics" title = ""> Academics </button>
            <div class = "dropdownContent" id = "dAcademics">
                <a id = "aCalendar" title = "" href = ""> Annual Calendar </a>
                <a id = "aLibraryRules" title = "" href = ""> Library Rules </a>
                <a id = "aResults" title = "" href = ""> Results </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = lockMenu("dComplianceSafety") onmouseover = showMenu("dComplianceSafety") onmouseout = hideMenu("dComplianceSafety")>
            <button class = "dropdownButton" id = "bComplianceSafety" title = ""> Compliance & Safety </button>
            <div class = "dropdownContent" id = "dComplianceSafety">
                <a id = "aSocietyCertificate" title = "" href = ""> Society Registration Certificate </a>
                <a id = "aNocState" title = "" href = ""> NOC from State Government </a>
                <a id = "aDeoCertificate" title = "" href = ""> DEO Certificate </a>
                <a id = "aBuildingSafety" title = "" href = ""> Building Safety Certificate </a>
                <a id = "aFireSafety" title = "" href = ""> Fire Safety Certificate </a>
                <a id = "aWaterSanitation" title = "" href = ""> Water and Sanitation </a>
                <a id = "aAffiliationExtension" title = "" href = ""> Extension of Affiliation </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = lockMenu("dStudentLife") onmouseover = showMenu("dStudentLife") onmouseout = hideMenu("dStudentLife")>
            <button class = "dropdownButton" id = "bStudentLife" title = ""> Student Life </button>
            <div class = "dropdownContent" id = "dStudentLife">
                <a id = "aTimingsUniform" title = "" href = ""> Timings and Uniform </a>
                <a id = "aStudentGuidelines" title = "" href = ""> Guidelines for Students </a>
                <a id = "aPrayersAnthem" title = "" href = ""> Prayers and Anthem </a>
                <a id = "aHolidays" title = "" href = ""> Holiday List </a>
                <a id = "aParentRecommendations" title = "" href = ""> Recommendations to Parents </a>
                <a id = "aPTA"title = "" href = ""> Parent-Teacher Association </a>
                <a id = "aCabinet" title = "" href = ""> Cabinet </a>
                <a id = "aInternalComplaints" title = "" href = ""> Internal Complaints Committee </a>
            </div>
        </div>
        <div class = "dropdownContainer" onclick = lockMenu("dNewsEvents") onmouseover = showMenu("dNewsEvents") onmouseout = hideMenu("dNewsEvents")>
            <button class = "dropdownButton" id = "bNewsEvents" title = ""> News & Events </button>
            <div class = "dropdownContent" id = "dNewsEvents">
                <a id = "aNews" title = "" href = ""> News </a>
                <a id = "aAnnualReports" title = "" href = ""> Annual Reports </a>
                <a id = "aGallery" title = "" href = ""> Gallery </a>
            </div>
        </div>
        <a id = "bMandatoryDisclosure" title = "" href = "" style = "float: right;"> Mandatory Public Disclosure </a>
    </div>
</nav>`);

// "About Us", "Admissions", "Academics", "Compliance & Safety", "Student Life", "News & Events"
let dMenus = ["dAbout", "dAdmissions", "dAcademics", "dComplianceSafety", "dStudentLife", "dNewsEvents"];
let dMenuLocked = [0, 0, 0, 0, 0, 0];
function hideAllMenus() {
    for (let id of dMenus) {
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "";
        document.getElementById(idButton).style.backgroundColor = "";
        document.getElementById(id).style.display = "";
    }
}
function showMenu(id) {
    if (!dMenuLocked.includes(1)) {
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "black";
        document.getElementById(idButton).style.backgroundColor = "cornsilk";
        document.getElementById(id).style.display = "block";
    }
}
function hideMenu(id) {
    if (dMenuLocked[dMenus.indexOf(id)] == 0) {
        let idButton = "b" + id.slice(1);
        document.getElementById(idButton).style.color = "";
        document.getElementById(idButton).style.backgroundColor = "";
        document.getElementById(id).style.display = "";
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
        document.getElementById(idButton).style.backgroundColor = "cornsilk";
        document.getElementById(id).style.display = "block";
    }
}
document.addEventListener("click", function(event) {
    if (!(dMenus.includes("d" + event.target.id.slice(1)) || dMenus.includes(event.target.id))) {
        dMenuLocked = [0, 0, 0, 0, 0, 0];
        hideAllMenus();
    }
});