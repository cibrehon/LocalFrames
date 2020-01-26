var m_currentIndexN = 0;
var m_prevIndex = 0;

function SlideByKey()
{
  var x = event.which || event.keyCode;

  if(x == 39) SetNextIndex(1);
  else if(x==37) SetNextIndex(-1);
}

function SetNextIndex(direction)
{
  var slideList = document.getElementsByClassName("single-slide");
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
  

  slideList[m_currentIndexN].classList.remove("hide");
  slideList[m_currentIndexN].classList.add("show");

  slideList[m_prevIndex].classList.remove("show");
  slideList[m_prevIndex].classList.add("hide");
}



function StartAutoSlideShow()
{
 // PlusSlides(1);
 SetNextIndex(1);
 setTimeout(StartAutoSlideShow, 5000);

}