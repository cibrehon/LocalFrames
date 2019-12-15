var m_menuEntries = ["Stories of Japan", "Faces of Cuba", "<br> Prints", "About Me"];
var m_menuLinks =   ["japan.html", "cuba.html", "prints.html", "about.html"];


CreateMenuLinks();
CreateSocialMediaIcons();

function CreateMenuLinks()
{
    // Create links automatically based on m_menuEntries. 
    for (let index = 0; index < m_menuEntries.length; index++) 
    {
        var menuEntry = m_menuEntries[index];
        var menuLink = m_menuLinks[index];
        var finalLink; 

        finalLink = document.createElement("A");    
        finalLink.id = menuEntry;
        finalLink.innerHTML = menuEntry + "<br>";
        finalLink.href = menuLink;
        document.getElementById("MainMenu").appendChild(finalLink);
    }
}
function CreateSocialMediaIcons()
{
    var instagramLink = document.createElement("A");
    instagramLink.id = "instagram";
    instagramLink.innerHTML = "<img class='social'; src='Resources/Social/instagram.png'>";
    instagramLink.href = "https://www.instagram.com/local.frames/";
    instagramLink.target="_blank";
    document.getElementById("MainMenu").appendChild(instagramLink);

}

function openNav() 
{
    document.getElementById("CurtainMenu").style.width = "100%";
}
  
function closeNav() 
{
    document.getElementById("CurtainMenu").style.width = "0%";
}
