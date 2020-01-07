
var m_currentIndex = 1;
ShowSlides(m_currentIndex);

function SlideByKey()
{
  var x = event.which || event.keyCode;

  if(x == 39) PlusSlides(1);
  else if(x==37) PlusSlides(-1);
}

function PlusSlides(n)
{
  ShowSlides(m_currentIndex += n);
}

function ShowSlides(n) 
{
  var index;
  var slides = document.getElementsByClassName("mySlides");
  
  if (n > slides.length) {m_currentIndex = 1}    
  if (n < 1) {m_currentIndex = slides.length}

  for (index = 0; index < slides.length; index++) 
  {
      slides[index].style.display = "none";  
  }

  slides[m_currentIndex-1].style.display = "block";  
  dots[m_currentIndex-1].className += "active";
}


  