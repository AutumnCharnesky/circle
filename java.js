function CalculateArea(){

  var radius =document.getElementById('myButton').value;

  var fineCircle=document.createElement('div');
  fineCircle.style.width=radius* 2 + 'px' ;
  fineCircle.style.height=radius * 2 + 'px' ;
  fineCircle.style.backgroundImage="url('images/haramBAE.jpg')";
  fineCircle.style.borderRadius='50%';
  document.body.appendChild(fineCircle);

}

  // var radius=document.getElementById(fineCircle);
  // document.write('<p>The area of the circle is '+(radius* 2 * Math.PI)+'.</p>')

console.log('hi');
