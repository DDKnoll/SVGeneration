function generate(inputArray){
var x = inputArray['x'];
var y = inputArray['y'];
var radius = inputArray['radius'];
var beam1 = inputArray['beam1'];
var beam2 = inputArray['beam2'];
var beam3 = inputArray['beam3'];
var shade = inputArray['shade'];
var weight = 0.1;
var count = 18;
var angleInterval = 360/count;

var output = "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>\n"+
"	<radialGradient id='g' cx='"+x+"%' cy='"+y+"%' r='"+radius+"%'>\n"+
"		<stop offset='0%' style='stop-color:#"+beam1+";' />\n"+
"		<stop offset='50%' style='stop-color:#"+beam2+";' />\n"+
"		<stop offset='100%' style='stop-color:#"+beam3+";' />\n"+
"	</radialGradient>\n"+
"	<rect width='100%' height='100%' fill='url(#g)'/>\n"+
"	<svg x='"+x+"%' y='"+y+"%' overflow='visible'>\n";
for(var i = 1; i <= count; i++){
	output += "		<rect width='2000%' height='2000%' fill-opacity='"+weight+"' fill='#"+shade+"' transform='rotate("+(angleInterval*i)+")'/>\n"
}
output += "	</svg>\n";
output += "</svg>";

return output;
}