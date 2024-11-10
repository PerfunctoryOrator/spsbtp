document.write(`<footer class = "unselectable" id = "footer" onmouseenter = toggleOpacity("scrollTop") onmouseleave = toggleOpacity("scrollTop")>
    <nav class = "footerNavContainer">
        <div class = "footerNavGroup">
        <menu class = "footerNavContent">
            <li> <a title = "Self-Declaration by the Principal" href = "https://www.stpetersbharatpur.in/pdf/Self-Declaration.pdf" target = "_blank"> Self-Declaration </a> </li>
            <li> <a title = "Extension of Affiliation Certificate" href = "https://www.stpetersbharatpur.in/pdf/Extension-Affiliation.pdf" target = "_blank"> Extension of Affiliation </a> </li>
        </menu>
        </div>
        <div class = "footerNavGroup">
        <button> Compliance </button>
        <menu class = "footerNavContent">
            <li> <a title = "Society Registration Certificate" href = "https://www.stpetersbharatpur.in/pdf/Society-Registration-Certificate.pdf" target = "_blank"> Society Registration Certificate </a> </li>
            <li> <a title = "No Objection Certificate from the Government of Rajasthan" href = "https://www.stpetersbharatpur.in/pdf/NOC.pdf" target = "_blank"> NOC from State Government </a> </li>
            <li> <a title = "Certificate Issued by District Education Officer, Bharatpur" href = "https://www.stpetersbharatpur.in/pdf/DEO-Certificate.pdf" target = "_blank"> DEO Certificate </a> </li>
        </menu>
        </div>
        <div class = "footerNavGroup">
        <button> Safety </button>
        <menu class = "footerNavContent">
            <li> <a title = "Building Safety Certificate" href = "https://www.stpetersbharatpur.in/pdf/Building-Certificate.pdf" target = "_blank"> Building Safety Certificate </a> </li>
            <li> <a title = "Fire Safety Certificate" href = "https://www.stpetersbharatpur.in/pdf/Fire-Safety-Certificate.pdf" target = "_blank"> Fire Safety Certificate </a> </li>
            <li> <a title = "Certificate Regarding Safe Drinking-Water and Sanitary Conditions" href = "https://www.stpetersbharatpur.in/pdf/Water-Sanitation.pdf" target = "_blank"> Water and Sanitation </a> </li>
        </menu>
        </div>
        <div class = "footerNavGroup">
        <button> Parental Engagement </button>
        <menu class = "footerNavContent">
            <li> <a title = "Recommendations to Parents to get the Best out of their Children" href = "${rootPath}footer/recommendations.html"> Recommendations to Parents </a> </li>
            <li> <a title = "Parent-Teacher Association and its Members" href = "${rootPath}footer/pta.html"> Parent-Teacher Association </a> </li>
        </menu>
        </div>
        <div class = "footerNavGroup">
        <button> Governance </button>
        <menu class = "footerNavContent">
            <li> <a title = "School Cabinet" href = "${rootPath}footer/cabinet.html"> Students’ Cabinet </a> </li>
            <li> <a title = "Internal Complaints Committee — Sexual Harassment" href = "${rootPath}footer/complaints-committee.html"> Internal Complaints Committee </a> </li>
        </menu>
        </div>
        <div class = "footerNavGroup">
        <menu class = "footerNavContent">
            <li> <a title = "Photo and Video Gallery" href = "https://www.stpetersbharatpur.in/photo-gallery.aspx" target = "_blank"> Gallery </a> </li>
            <li> <a title = "Ways to Contact Us" href = "${rootPath}footer/contact.html"> Contact Us </a> </li>
            <li> <a title = "CampusCare by Entab" href = "https://spsb.campuscare.info" target = "_blank"> CampusCare </a> </li>
        </menu>
        </div>
    </nav>
    <nav class = "footerBar">
        <hr color = "white" size = "2px" />
        <a title = "Map of the Website" href = "${rootPath}footer/map.html"> Site Map </a>
        <a title = "Official Website of St. Peter’s School, Bharatpur" href = "https://www.stpetersbharatpur.in" target = "_blank"> Official School Website </a>
        <a title = "Official Website of the Agra Archdiocese, this School’s Parent Organisation" href = "https://www.agraarchdiocese.com/" target = "_blank"> Agra Archdiocese </a>
        <a title = "This Website has been developed by Yashdeep Singh Fauzdar for his School Project" href = "${rootPath}footer/disclaimer.html"> Disclaimer </a>
        <a title = "Souce Code is available here" href = "https://github.com/PerfunctoryOrator/spsbtp" target = "_blank"> Source Code </a>
        <span style = "float: right; padding: 16px 20px;"> India </span>
    </nav>
</footer>
<a id = "scrollTop" class = "unselectable" title = "Scroll to the Top of the Page" href = "#" onmouseenter = toggleOpacity("scrollTop") onmouseleave = toggleOpacity("scrollTop")>
    <svg width = "17.6582" height = "10.6406">
        <g>
            <rect height = "10.6406" opacity = "0" width = "17.6582" x = "0" y = "0" />
            <path d = "M0.326951 8.00801C0.116991 8.21348 0 8.4873 0 8.80273C0 9.43886 0.493355 9.93573 1.12772 9.93573C1.44667 9.93573 1.74081 9.8162 1.94705 9.59393L9.13046 2.24197L8.17519 2.24197L15.3516 9.59393C15.5641 9.81795 15.86 9.93573 16.1691 9.93573C16.8017 9.93573 17.2969 9.43886 17.2969 8.80273C17.2969 8.48554 17.1816 8.21172 16.9682 8.00801L9.5326 0.398433C9.28573 0.137303 8.98534 0.00351548 8.65331 0C8.31504 0 8.0209 0.135546 7.76602 0.398433Z" fill-opacity = "0.85" />
        </g>
    </svg>
</a>`);
var footer = document.getElementById("footer")
if (footer.getBoundingClientRect().bottom < innerHeight) {
    footer.style.position = "absolute";
}
function toggleOpacity(id) {
    document.getElementById(id).style.opacity = 1 - document.getElementById(id).style.opacity;
}
