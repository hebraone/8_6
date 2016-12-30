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
var triangleArea2 = getTriangleArea(4, 5);
var triangleArea3 = getTriangleArea(6, 7);
var triangleArea4 = getTriangleArea(0, 7);