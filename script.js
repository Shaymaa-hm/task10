

function calculateAge(){
    var d = document.getElementById('day').value;
  var m = document.getElementById('month').value;
  var y = document.getElementById('year').value;

  var currDate = new Date();
  var currD = currDate.getDate();
  var currM = 1 + currDate.getMonth();
  var currY = currDate.getFullYear();
  var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
 

  if(d > currD){
    currD = currD + month[currM - 1];
    currM = currM - 1;
  }
  if(m > currM){
    currM = currM + 12;
    currY = currY - 1;
  }

  var finalD = currD - d;
  var finalM = currM - m;
  var finalY = currY - y;

  document.getElementById('years').innerHTML = finalY;
  document.getElementById('months').innerHTML = finalM;
  document.getElementById('days').innerHTML = finalD;
}