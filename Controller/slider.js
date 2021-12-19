var m_currentIndexN = 0;
var m_prevIndex = 0;

m_totalImageCount = 0;

function SlideByKey()
{
  var x = event.which || event.keyCode;

  if(x == 39) SetNextIndex(1);
  else if(x==37) SetNextIndex(-1);
}

function SetNextIndex(dir)
{
  ShowandHide(dir);
  //ChangeImage(dir);
}

function SetNextIndexbyPosition(e)
{

  // Very important, assigne a default variable. Otherwise causes problems.
  var xCoordinate = 0;
   
  xCoordinate = e.clientX;
  var direction = FindPosition(xCoordinate);
  ShowandHide(direction);
  //ChangeImage (direction);
}


function ShowandHide(dir)
{
  var direction = dir;
  var slideList = document.getElementsByClassName("scaledImage");
  var imageCounter = document.getElementById("IC");

  var length = slideList.length;
  
  m_prevIndex = m_currentIndexN;
  m_currentIndexN += direction; 

  if(m_currentIndexN >= length)
  {
    m_currentIndexN = 0;
  }
  
  if(m_currentIndexN < 0)
  {
    m_currentIndexN = length - 1;
  }
  
  imageCounter.innerText =  m_currentIndexN + 1 + " / " + m_totalImageCount;
  slideList[m_currentIndexN].classList.remove("w3-hide");
  slideList[m_currentIndexN].classList.add("w3-show");

  slideList[m_prevIndex].classList.remove("w3-show");
  slideList[m_prevIndex].classList.add("w3-hide");
}

// Checks the mouse position on the x-axis. Returns 1 if mouse is on the right side, returns -1 for the left side
function FindPosition(x)
{
  var size = document.body.clientWidth;
  if( x >= (size /2))
  { 
    return 1;
  }
  else 
  { 
    return -1;
  }
}

function SetTotalImageCount(imageCount)
{
  m_totalImageCount = imageCount;
}

/*
function StartAutoSlideShow()
{
 // PlusSlides(1);
 SetNextIndex(1);
 setTimeout(StartAutoSlideShow, 3000);

}
*/


/*

function ChangeImage(dir)
{
  
  var direction = dir;
  var imageCounter = document.getElementById("IC");
  var pName = document.getElementById("currentImage").alt;

  m_currentIndexN += direction; 

  if(m_currentIndexN >= m_totalImageCount)
  {
    m_currentIndexN = 0;
  }
  
  if(m_currentIndexN < 0)
  {
    m_currentIndexN = m_totalImageCount - 1;
  }

  imageCounter.innerText =  m_currentIndexN + 1 + " / " + m_totalImageCount;

  if (pName=="russia")
  {
    document.getElementById("currentImage").src=`Resources/Photos/Russia/${m_currentIndexN+1}.jpg`;
    PreLoadNextImage("russia", 2);
  }
  else if (pName=="japan")
  {
    document.getElementById("currentImage").src=`Resources/Photos/Japan/${m_currentIndexN+1}.jpg`;
    PreLoadNextImage("japan", 2);
  }
  else if (pName=="cuba")
  {
    document.getElementById("currentImage").src=`Resources/Photos/Cuba/${m_currentIndexN+1}.jpg`;
    PreLoadNextImage("cuba", 2);
  }
}


function PreLoadNextImage(pName)
{
  // Let browser to load the next image in the background.
  var imgCache = new Image();
  var a = m_currentIndexN + 2;

  if (pName=="russia")
  {
    
    imgCache.src=`Resources/Photos/Russia/${a}.jpg`;
  }
  else if (pName=="japan")
  {
    imgCache.src=`Resources/Photos/Japan/${a}.jpg`;
  }
  else if (pName=="cuba")
  {
    imgCache.src=`Resources/Photos/Cuba/${a}.jpg`;
  }
}
*/