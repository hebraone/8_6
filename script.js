function getTriangleArea(a, h){
  if ((a <= 0) || (h <= 0)) {
	return "Nieprawidłowe dane";
	}
  else {
	return a * h / 2;
	}
}

console.log( getTriangleArea(10,6) );	

var triangleArea1 = getTriangleArea(2, 3);

console.log(triangleArea1);

var triangleArea2 = getTriangleArea(4, 5);

console.log(triangleArea2);

var triangleArea3 = getTriangleArea(6, 7);

console.log(triangleArea3);

var triangleArea4 = getTriangleArea(-2, 7);

console.log(triangleArea4);