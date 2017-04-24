function CalculateArea(){

  var radius =document.getElementById('myButton').value;

// circle equation
  var fineCircle=document.createElement('div');
  fineCircle.style.width=radius * 2 + 'px' ;
  fineCircle.style.height=radius * 2 + 'px' ;
  fineCircle.style.backgroundImage="url('images/haramBAE.jpg')";
  fineCircle.style.borderRadius='50%';
  document.body.appendChild(fineCircle);

  var yourArea = 3.14 * radius * radius;

  document.getElementById('area').innerHTML = yourArea;

console.log('hi' + yourArea);
}
