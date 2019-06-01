
var m_menuEntries = ["EGE ILICAK - STREET PHOTOGRAPHER <br>","Portfolio", "Prints", "About", "Contact", ];
var m_menuLinks =   ["main.html","portfolio.html", "prints.html", "about.html", "contact.html"];


// Create links automatically based on m_menuEntries. 
for (let index = 0; index < m_menuEntries.length; index++) 
{
    var menuEntry = m_menuEntries[index];
    var menuLink = m_menuLinks[index];

    var finalLink = document.createElement("A");
    finalLink.innerHTML = menuEntry + "<br>";
    finalLink.href = menuLink;
    
   document.getElementById("menu").appendChild(finalLink);
    
}


