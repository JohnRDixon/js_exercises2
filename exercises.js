//In_class

var array= [3, 5, 1, 2]

var half= function (a1){
  var quotient=[];
  for( var i=0; i<a1.length; i++){
    quotient.push( array[ i ]/2 );

  }
  
  return quotient;
};

var productFunc= function (a1){
  var product= 1;
  for( i=0; i<a1.length; i++){
   product*=a1[ i ]; 
  }
  return product;
};

console.log(half(array));

console.log(productFunc(array));

//HW_1
/*
Function 1:

Write a function called "sum" that takes three arrays as parameters and returns the total sum of all elements of the arrays.

For instance: the three arrays are [ 0.5, 2, 5 ], [ 1, 6, 10 ], [ 9, 5, 2, 1, 6 ].
The function should add 0.5 + 2 + 5 + 1 + 6 + 10 + 9 + 5 + 2 + 1 + 6 and should return 47.5
*/

var array_1=[ 0.5, 2, 5 ]; 
var array_2=[ 1, 6, 10 ]; 
var array_3=[ 9, 5, 2 ];

var sum=function( a1, a2, a3){
  var altogether= 0;
  for (var i=0; i<a3.length; i++){
   altogether += a1[ i ] + a2[ i ] + a3[ i ]; 
  }
  return altogether
};

console.log(sum(array_1, array_2, array_3));









//HW_2
/*
Function 2:

Write a function that draws a square that is divided into two triangles to the console screen:
it should output this :square

------------------*
----------------***
--------------*****
------------*******
----------*********
--------***********
------*************
----***************
--*****************
*******************


INCOMPLETE

*/

var size= 19;
var star="0"
var dash="0"
var board=""

var square=function(s, d){
  for (var s = 0; s < size; s--){
   if (s<=-19){
   board+="*";
   } 
  }
  
  for (var d = 0; d < size; d++){
   if (d>=0){
    board+="-"; 
   }
  }
  //board+="/n"
  
};


console.log(square(star, dash));

