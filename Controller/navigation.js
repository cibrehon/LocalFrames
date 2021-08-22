var m_menuEntries = ["portfolio", "publications", "prints", "bio & contact"];
var m_menuLinks =   ["#", "publications.html", "prints.html",  "about.html"];

var m_portfolioEntries = ["dreams from a northern country", "quartieri spagnoli", "japanese journey", "faces of cuba", ];
var m_portfolioLinks = ["russia.html", "naples.html", "japan.html", "cuba.html"];

var m_bMobile = false;
var m_bMobileMenuOpen = false;



function CheckPageWidth()
{
    var size = { width: window.innerWidth || document.body.clientWidth }

    var logicalSize = screen.width 
    var pixelRatio = window.devicePixelRatio;

    var physicalScreenSize = logicalSize * pixelRatio;

    if(physicalScreenSize < 1400 || size.width < 1400  )
    {

        m_bMobile = true;

         // Close the mobile menu if exists
         CloseMenu();

        // Create mobile curtain menu
        CreateMobileMenu();

       
    }
    else
    {
        m_bMobile = false;

        // Close the mobile menu if exists
        CloseMenu();

        // Create desktop menu
        CreateDesktopMenu();
    }
}

CheckPageWidth();


// Mobile Menu
function CreateMobileMenu()
{
    // Reset elements
    ResetMenuElements();

    // First, add the Hamburger Menu to the RightMenu
    document.getElementById("RightMenu").innerHTML = "menu";
    document.getElementById("RightMenu").onclick = ShowOrClose;
    
   
    // Create links automatically based on m_menuEntries. 
    for (let index = 0; index < m_menuEntries.length; index++) 
    {
        var menuEntry = m_menuEntries[index];
        var menuLink = m_menuLinks[index];
        var finalLink; 

        if(menuEntry == "portfolio")
        {
            finalLink = document.createElement("A");   
            finalLink.id = menuEntry;
            finalLink.innerHTML = menuEntry + "<br>";
            finalLink.href = menuLink;
           
            document.getElementById("MobileMenuContent").appendChild(finalLink);

            CreatePotfolioLinks();
            finalLink.innerHTML += "<br>";
        }
        else
        {
            finalLink = document.createElement("A");   
            finalLink.id = menuEntry;
            finalLink.innerHTML = menuEntry + "<br>";
            finalLink.href = menuLink;

            document.getElementById("MobileMenuContent").appendChild(finalLink);
        } 
    }
}

function CreateDesktopMenu()
{
    // Reset the menu for resize operations
    ResetMenuElements();

    // Create links automatically based on m_menuEntries. 
    for (let index = 0; index < m_menuEntries.length; index++) 
    {
        var menuEntry = m_menuEntries[index];
        var menuLink = m_menuLinks[index];
        var finalLink; 
        var blankLine = document.createElement("span"); 
        blankLine.innerHTML = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";
    
        if(menuEntry == "portfolio")
        {
            finalLink = document.createElement("A");
            finalLink.id = menuEntry;
            finalLink.href = "#";
            finalLink.onclick = toggleView;
        
        }
        else
        {
            finalLink = document.createElement("A");    
        }
        
        finalLink.id = menuEntry;
        finalLink.innerHTML = menuEntry;
        finalLink.href = menuLink;
        document.getElementById("RightMenu").appendChild(finalLink);
        document.getElementById("RightMenu").appendChild(blankLine);
    }
    CreatePotfolioLinks();
}

function ResetMenuElements()
{
    document.getElementById("RightMenu").innerHTML = "";
    document.getElementById("RightMenu").onclick = "";
    document.getElementById("MobileMenuContent").innerHTML = "";
}

function toggleView()
{
    if(document.getElementById("id_dropDown").style.display == "block")
    {
        document.getElementById("id_dropDown").style.display = "none";
    }
    else
    {
        document.getElementById("id_dropDown").style.display = "block";
    }
}

function CreatePotfolioLinks()
{
    var dropDown = document.createElement("div");

    if (m_bMobile == true) dropDown.className = "dropdownContentMobile"; else dropDown.className = "dropdownContent";
  
    dropDown.id = "id_dropDown";

    for (let index = 0; index < m_portfolioEntries.length; index++) 
    {
        var portfolioEntry = m_portfolioEntries[index];
        var portfolioLink = m_portfolioLinks[index];
        var pLink; 
    
        pLink = document.createElement("A");    
        pLink.id = portfolioEntry;
        pLink.innerHTML = portfolioEntry + "<br>";
        pLink.href = portfolioLink;
        pLink.className ="w3-xlarge";

        dropDown.appendChild(pLink);
    }
    document.getElementById("portfolio").appendChild(dropDown);
}

function ShowOrClose()
{
    if(m_bMobileMenuOpen)
    {
        CloseMenu();
        m_bMobileMenuOpen = false;        
    }
    else
    {
        ShowMenu();
        m_bMobileMenuOpen = true;  
    }
}

function CloseMenu()
{
    document.getElementById("MobileMenu").classList.remove("show");
    document.getElementById("MobileMenu").classList.add("hide");
}

function ShowMenu()
{
    document.getElementById("MobileMenu").classList.remove("hide");
    document.getElementById("MobileMenu").classList.add("show");  
}

/*
function CreateSocialMediaIcons()
{
    var instagramLink = document.createElement("A");
    instagramLink.id = "instagram";
    instagramLink.innerHTML = "<img class='social'; src='Resources/Social/instagramBlack.png'>";
    instagramLink.href = "https://www.instagram.com/local.frames/";
    instagramLink.target="_blank";
    document.getElementById("RightMenu").appendChild(instagramLink);
}
*/



 /*
Close Button:

 // Set the inner HTML of close button
    document.getElementById("CloseButton").innerHTML = "&times;";
    <span id="CloseButton" onclick="CloseMenu()" style="cursor: pointer;" ></span>
*/

/*

function ShowAllImages()
{
  if(m_bMobile)
  {
    var slideList = document.getElementsByClassName("w3-image");
    
    for (i = 0; i < slideList.length; i++) 
    { 
      slideList[i].classList.remove("w3-hide");
      slideList[i].classList.add("w3-show");
    }
  }
}

*/