
var m_menuEntries = ["EGE ILICAK | Street & Travel Photography <br>","+Portfolio", "<br> Prints", "About"];
var m_menuLinks =   ["index.html","portfolio.html", "prints.html", "about.html"];

var m_galleryEntires = ["Stories of Japan","Faces of Cuba", "Russia"];
var m_galleryLinks = ["japan.html","cuba.html","russia.html"];

var m_galleryMenu = document.createElement("div");
m_galleryMenu.id = "galleryMenu";
m_galleryMenu.className = "dropdown";


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

        if (menuEntry == "+Portfolio") 
        {
            finalLink = document.createElement("button");
            finalLink.id = menuEntry;
            finalLink.innerHTML = menuEntry + "<br>";
            CreateSubGalleries();
            document.getElementById("menu").appendChild(finalLink);
            document.getElementById("menu").appendChild(m_galleryMenu);
        } 
        else 
        {
            finalLink = document.createElement("A");    
            finalLink.id = menuEntry;
            finalLink.innerHTML = menuEntry + "<br>";
            finalLink.href = menuLink;
            document.getElementById("menu").appendChild(finalLink);
        }

    }
}

function CreateSubGalleries() 
{
    //Create sub entires of portfolio.
    for (let index = 0; index < m_galleryEntires.length; index++) 
    {
        var galleryEntry = m_galleryEntires[index];
        var galleryLink = m_galleryLinks[index];
       

        var finalGalleryLink = document.createElement("A");    
        finalGalleryLink.id = galleryEntry;
        finalGalleryLink.innerHTML = galleryEntry + "<br>";
        finalGalleryLink.href = galleryLink;

        m_galleryMenu.appendChild(finalGalleryLink);
    }
   
}

function CreateSocialMediaIcons()
{
    var instagramLink = document.createElement("A");
    instagramLink.id = "instagram";
    instagramLink.innerHTML = "<img class='social'; src='Resources/Social/instagram.png'>";
    instagramLink.href = "https://www.instagram.com/local.frames/";
    instagramLink.target="_blank";
    document.getElementById("menu").appendChild(instagramLink);

    
}

// Get the button, and when the user clicks on it, execute showAndHide
document.getElementById("+Portfolio").onclick = function() {showAndHide()};

/* showAndHide toggles between adding and removing the show class, which is used to hide and show the dropdown content */
function showAndHide() 
{
    if(m_galleryMenu.style.display == "block")
    {
        m_galleryMenu.style.display = "none";
    }
    else
    {
        m_galleryMenu.style.display = "block";
    }
}

