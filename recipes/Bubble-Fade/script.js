function generate(inputArray){

var initialSize = 15;//inputArray('size');
var step = parseFloat(inputArray['step']);
var padding = parseFloat(inputArray['padding']);
var color = inputArray['color'];

svg = "<svg xmlns='http://www.w3.org/2000/svg' width='40' height='100%'>\n";
var y = -10;
var offset = 30;
for(var size=initialSize; size > 0; size-=step){
	svg += "	<circle fill='#"+color+"' cx='0' cy='"+y+"' r='"+size+"'/>\n";
	svg += "	<circle fill='#"+color+"' cx='40' cy='"+y+"' r='"+size+"'/>\n";
	svg += "	<circle fill='#"+color+"' cx='20' cy='"+(y+offset/2)+"' r='"+size+"'/>\n";
	// <ellipse fill='#112' cx='30' cy='30' rx='10' ry='10' />
	offset = (size*2+padding*1);
	//Limit the offset to 26.
	if(offset > 26){
		offset = 26;
	}
	//Update the location for the next row of circles.
	y += offset;
}
svg += "</svg>\n";
return svg;
}