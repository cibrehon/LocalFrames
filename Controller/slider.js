var m_currentIndexN = 0;
var m_prevIndex = 0;

function SlideByKey()
{
  var x = event.which || event.keyCode;

  if(x == 39) SetNextIndex(1);
  else if(x==37) SetNextIndex(-1);
}

function SetNextIndex(dir)
{
  ShowandHide(dir);
}

function SetNextIndexbyPosition(e)
{

  var xCoordinate = 200;
  
  // If device is a touch screen device
  if (isTouchDevice())
  {
    xCoordinate = e.touches[0].clientX;
    alert("I am here:" + xCoordinate);
  }
  else
  {
    xCoordinate = e.clientX;
  }
  
  var direction = FindPosition(xCoordinate);
  ShowandHide(direction);
}

function ShowandHide(dir)
{
  var direction = dir;
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

function FindPosition(x)
{
  var size = document.body.clientWidth;
  if( x >= (size /2)){ return 1;} else { return -1;}
}

function StartAutoSlideShow()
{
 // PlusSlides(1);
 SetNextIndex(1);
 setTimeout(StartAutoSlideShow, 3000);

}

function isTouchDevice() 
{
    
  var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
  
  var mq = function (query) {
      return window.matchMedia(query).matches;
  }

  if (('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
      return true;
  }

  // include the 'heartz' as a way to have a non matching MQ to help terminate the join
  // https://git.io/vznFH
  var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
  return mq(query);
}