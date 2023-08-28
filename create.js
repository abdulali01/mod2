
//global variables
var velocityX = 3;
var velocityy = 3;
var positionX = 0;
var positionY = 0;
var time = 75;
var positionXMin = 0;
var positionXMax = 800;
var positionYMin = 0;
var positionYMax = 800;
var reverse_X = true;
var reverseY = true;

var element = document.getElementById("ball");

function moveBall() {

  if(reverse_X) //X Axis
    {
        positionX = positionX + velocityX;
        ball.style.left = positionX + 'px';
    }
            else
                {
                    positionX = positionX - velocityX;
                    ball.style.left = positionX + 'px';
                }

    if(reverseY) //Y Axis
   {
        positionY = positionY + velocityy;
        ball.style.top = positionY + 'px';
    }
            else
                {
                    positionY = positionY - velocityy;
                    ball.style.top = positionY + 'px';
                }
  
  
  if (positionX > positionXMax || positionX === positionXMin)
    {
        reverse_X = !reverse_X;
    }
  if (positionY > positionYMax || positionY === positionYMin)
    {
        reverseY = !reverseY;
    }
  

}
// This call the moveBall function based on the time designated
setInterval(moveBall, time);
