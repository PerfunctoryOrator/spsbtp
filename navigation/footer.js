document.write(`<footer class = "unselectable" onmouseenter = toggleOpacity("scrollTop") onmouseleave = toggleOpacity("scrollTop")>
    <nav class = "footerNavContainer">
        <div class = "footerNavGroup">
            <menu class = "footerNavContent">
                <li> <a title = "Self-Declaration by the Principal" href = ""> Self-Declaration </a> </li>
                <li> <a title = "Extension of Affiliation Certificate" href = ""> Extension of Affiliation </a> </li>
            </menu>
        </div>
        <div class = "footerNavGroup">
            <button> Compliance </button>
            <menu class = "footerNavContent">
                <li> <a title = "Society Registration Certificate" href = ""> Society Registration Certificate </a> </li>
                <li> <a title = "No Objection Certificate from the Government of Rajasthan" href = ""> NOC from State Government </a> </li>
                <li> <a title = "Certificate Issued by District Education Officer, Bharatpur" href = ""> DEO Certificate </a> </li>
            </menu>
        </div>
        <div class = "footerNavGroup">
            <button> Safety </button>
            <menu class = "footerNavContent">
                <li> <a title = "Building Safety Certificate" href = ""> Building Safety Certificate </a> </li>
                <li> <a title = "Fire Safety Certificate" href = ""> Fire Safety Certificate </a> </li>
                <li> <a title = "Certificate Regarding Safe Drinking-Water and Sanitary Conditions" href = ""> Water and Sanitation </a> </li>
            </menu>
        </div>
        <div class = "footerNavGroup">
            <button> Parental Engagement </button>
            <menu class = "footerNavContent">
                <li> <a title = "Recommendations to Parents to get the Best out of their Children" href = ""> Recommendations to Parents </a> </li>
                <li> <a title = "Parent-Teacher Association and its Members" href = ""> Parent-Teacher Association </a> </li>
            </menu>
        </div>
        <div class = "footerNavGroup">
            <button> Governance </button>
            <menu class = "footerNavContent">
                <li> <a title = "School Cabinet" href = ""> Cabinet </a> </li>
                <li> <a title = "Internal Complaints Committeee — Sexual Harassment" href = ""> Internal Complaints Committe </a> </li>
            </menu>
        </div>
        <div class = "footerNavGroup">
            <menu class = "footerNavContent">
                <li> <a title = "Photo and Video Gallery" href = ""> Gallery </a> </li>
                <li> <a title = "Ways to Contact Us" href = ""> Contact Us </a> </li>
            </menu>
        </div>
    </nav>
    <nav class = "footerBar">
        <hr color = "white" size = "2px" />
        <a title = "Map of the Website" href = "#top"> Site Map </a>
        <a title = "Official Website of St. Peter’s School, Bharatpur" href = ""> Official School Website </a>
        <a title = "Official Website of the Agra Archdiocese, this School’s Parent Organisation" href = ""> Agra Archdiocese </a>
        <a title = "Yashdeep Singh Fauzdar’s Personal Webpage" href = ""> Yashdeep Singh Fauzdar </a>
        <a title = "This Website has been developed by Yashdeep Singh Fauzdar for his School Project" href = ""> Copyright Disclaimer </a> <!-- Also include Source Code (link) -->
        <span style = "float: right; padding: 16px 20px;"> India (भारत) </span>
    </nav>
</footer>
<a id = "scrollTop" class = "unselectable" title = "Scroll to the Top of the Page" href = "#" onmouseenter = toggleOpacity("scrollTop") onmouseleave = toggleOpacity("scrollTop")> ↑ </a>`)

function toggleOpacity(id) {
    document.getElementById(id).style.opacity = 1 - document.getElementById(id).style.opacity;
}