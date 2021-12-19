var m_menuEntries = ["portfolio", "publications", "prints", "info"];
var m_menuLinks = ["portfolio.html", "publications.html", "prints.html", "about.html"];

var m_bMobile = false;
var m_bMobileMenuOpen = false;

function CheckPageWidth() {
    var size = { width: window.innerWidth || document.body.clientWidth }

    var logicalSize = screen.width
    var pixelRatio = window.devicePixelRatio;

    var physicalScreenSize = logicalSize * pixelRatio;

    if (physicalScreenSize < 1400 || size.width < 1400) {

        m_bMobile = true;

        // Close the mobile menu if exists
        CloseMenu();

        // Create mobile curtain menu
        CreateMobileMenu();


    }
    else {
        m_bMobile = false;

        // Close the mobile menu if exists
        CloseMenu();

        // Create desktop menu
        CreateDesktopMenu();
    }
}

CheckPageWidth();

// Mobile Menu
function CreateMobileMenu() {
    // Reset elements
    ResetMenuElements();

    // First, add the Hamburger Menu to the RightMenu
    document.getElementById("RightMenu").innerHTML = "menu";
    document.getElementById("RightMenu").onclick = ShowOrClose;


    // Create links automatically based on m_menuEntries. 
    for (let index = 0; index < m_menuEntries.length; index++) {
        var menuEntry = m_menuEntries[index];
        var menuLink = m_menuLinks[index];
        var finalLink;

        finalLink = document.createElement("A");
        finalLink.id = menuEntry;
        finalLink.innerHTML = menuEntry + "<br>";
        finalLink.href = menuLink;

        document.getElementById("MobileMenuContent").appendChild(finalLink);
    }
}
function CreateDesktopMenu() {
    // Reset the menu for resize operations
    ResetMenuElements();

    // Create links automatically based on m_menuEntries. 
    for (let index = 0; index < m_menuEntries.length; index++) {
        var menuEntry = m_menuEntries[index];
        var menuLink = m_menuLinks[index];
        var finalLink;

        finalLink = document.createElement("A");
        finalLink.id = menuEntry;
        finalLink.innerHTML = menuEntry;
        finalLink.href = menuLink;
        finalLink.className = "w3-padding-large";
        document.getElementById("RightMenu").appendChild(finalLink);
    }
}

function ResetMenuElements() {
    document.getElementById("RightMenu").innerHTML = "";
    document.getElementById("RightMenu").onclick = "";
    document.getElementById("MobileMenuContent").innerHTML = "";
}

function toggleView() {
    if (document.getElementById("id_dropDown").style.display == "block") {
        document.getElementById("id_dropDown").style.display = "none";
    }
    else {
        document.getElementById("id_dropDown").style.display = "block";
    }
}

function ShowOrClose() {
    if (m_bMobileMenuOpen) {
        CloseMenu();
        m_bMobileMenuOpen = false;
    }
    else {
        ShowMenu();
        m_bMobileMenuOpen = true;
    }
}

function CloseMenu() {
    document.getElementById("MobileMenu").classList.remove("show");
    document.getElementById("MobileMenu").classList.add("hide");
}

function ShowMenu() {
    document.getElementById("MobileMenu").classList.remove("hide");
    document.getElementById("MobileMenu").classList.add("show");
}
