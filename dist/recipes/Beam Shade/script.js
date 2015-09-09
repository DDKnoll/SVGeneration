function generate(inputArray){
var beam = inputArray['beam'];
var shade = inputArray['shade'];
var weight = inputArray['weight'];
var count = inputArray['count'];
var angleInterval = 90/count;

var output = "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>\n"
+"	<rect width='100%' height='100%' fill='#"+beam+"'/>\n"
for(var i = 1; i <= count; i++){
	output +="		<rect width='5000%' height='2000%' fill-opacity='"+weight+"' fill='#"+shade+"' transform='rotate("+(angleInterval*i)+")'/>\n";
}
output += "</svg>";

return output;
}