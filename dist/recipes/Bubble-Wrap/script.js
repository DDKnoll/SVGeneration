function generate(inputArray){
var width = inputArray['width'];
var height = inputArray['height'];
var background = inputArray['background'];
var ring = inputArray['ring'];
var ringTransp = inputArray['ring-transparency'];
var ringWidth = inputArray['ring-width'];


return "<svg xmlns='http://www.w3.org/2000/svg' width='"+width+"' height='"+height+"'>\n"+
"	<ellipse cx='50%' cy='50%' rx='50%' ry='50%' fill-opacity='0' stroke='#"+ring+"' stroke-opacity='"+ringTransp+"' stroke-width='"+ringWidth+"'/>\n"+
"</svg>";
}