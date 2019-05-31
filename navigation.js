
var m_menuEntries = ["EGE ILICAK - STREET PHOTOGRAPHER <br>","Portfolio", "About", "Contact", "Prints"];
var m_menuLinks =   ["main.html","portfolio.html", "about.html", "contact.html", "prints.html"];


// Create links automatically based on m_menuEntries. 
for (let index = 0; index < m_menuEntries.length; index++) 
{
    var menuEntry = m_menuEntries[index];
    var menuLink = m_menuLinks[index];

    var finalLink = document.createElement("A");
    finalLink.innerHTML = menuEntry + "<br>";
    finalLink.href = menuLink;
    document.body.appendChild(finalLink);   
}


