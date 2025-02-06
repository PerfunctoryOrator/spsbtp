document.write(`<footer class = "unselectable" id = "footer" onmouseenter = "toggleOpacity('scrollTop')" onmouseleave = "toggleOpacity('scrollTop')">
    <nav class = "footerNavContainer">
        <div class = "footerNavGroup">
            <button> Compliance </button>
            <menu class = "footerNavContent">
                <li> <a title = "Self-Declaration by the Principal" href = "https://www.stpetersbharatpur.in/pdf/Self-Declaration.pdf" target = "_blank"> Self-Declaration </a> </li>
                <li> <a title = "Extension of Affiliation Certificate" href = "https://www.stpetersbharatpur.in/pdf/Extension-Affiliation.pdf" target = "_blank"> Extension of Affiliation </a> </li>
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
            <button> News & Events </button>
            <menu class = "footerNavContent">
                <li> <a title = "Upcoming School Events" href = "${rootPath}footer/events.html"> Upcoming Events </a> </li>
                <li> <a title = "Annual Report of All Activities performed Yearly" href = "https://www.stpetersbharatpur.in/pdf/Annual_Report.pdf" target = "_blank"> Annual Report </a> </li>
            </menu>
        </div>
        <div class = "footerNavGroup">
            <button> More </button>
            <menu class = "footerNavContent">
                <li> <a title = "Photo and Video Gallery" href = "https://www.stpetersbharatpur.in/photo-gallery.aspx" target = "_blank"> Gallery </a> </li>
                <li> <a title = "Recommendations to Parents to get the Best out of their Children" href = "${rootPath}footer/recommendations.html"> Recommendations to Parents </a> </li>
                <li> <a title = "CampusCare by Entab" href = "https://spsb.campuscare.info" target = "_blank"> CampusCare </a> </li>
            </menu>
        </div>
    </nav>
    <nav class = "footerBar">
        <hr color = "white" size = "2px" />
        <a title = "Map of the Website" href = "${rootPath}footer/map.html"> Site Map </a>
        <a title = "Ways to Contact Us" href = "${rootPath}footer/contact.html"> Contact Us </a>
        <a title = "Official Website of St. Peter’s School, Bharatpur" href = "https://www.stpetersbharatpur.in" target = "_blank"> Official School Website </a>
        <a title = "Official Website of the Agra Archdiocese, this School’s Parent Organisation" href = "https://www.agraarchdiocese.com/" target = "_blank"> Agra Archdiocese </a>
        <a title = "This Website has been developed by Yashdeep Singh Fauzdar for his School Project" href = "${rootPath}footer/disclaimer.html"> Disclaimer and Credits </a>
        <a title = "Souce Code is available here" href = "https://github.com/PerfunctoryOrator/spsbtp" target = "_blank"> Source Code </a>
        <span style = "float: right; padding: 16px 20px;"> India </span>
    </nav>
</footer>
<a id = "scrollTop" class = "unselectable" title = "Scroll to the Top of the Page" href = "#" onmouseenter = "toggleOpacity('scrollTop')" onmouseleave = "toggleOpacity('scrollTop')">
    <svg height = "24px" viewBox = "0 -960 960 960" width = "24px" style = "position: absolute; top: calc(50% - 12px); right: calc(50% - 12px);">
        <path d = "M440-160v-487L216-423l-56-57 320-320 320 320-56 57-224-224v487h-80Z" />
    </svg>
</a>`);
var footer = document.getElementById("footer")
if (footer.getBoundingClientRect().bottom < innerHeight) {
    footer.style.position = "absolute";
}
function toggleOpacity(id) {
    document.getElementById(id).style.opacity = 1 - document.getElementById(id).style.opacity;
}
