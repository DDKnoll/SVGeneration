function generate(inputArray){
var background = inputArray['background'];
var foreground = inputArray['foreground'];
var count = inputArray['count'];
var height = inputArray['height'];
var opacity = inputArray['opacity'];

var offset = 100/count;
var beforeAfter = Math.ceil(height/(offset));

var svg = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100' height='1000'>\n"+
"	<defs>\n"+
"		<linearGradient id='f' x1='0' x2='0' y1='0' y2='1000' gradientUnits='userSpaceOnUse'>\n"+
"			<stop offset='0%' stop-opacity='0' stop-color='#"+foreground+"' />\n"+
"			<stop offset='50%' stop-opacity='.3' stop-color='#"+foreground+"' />\n"+
"			<stop offset='100%' stop-opacity='1' stop-color='#"+foreground+"' />\n"+
"		</linearGradient>\n"+
"		<g id='c'>\n"+
"			<ellipse cy='150%' ry='150%' rx='"+height+"%' fill-opacity='"+opacity+"' fill='#"+foreground+"'/>\n"+
"		</g>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' fill='#"+background+"'/>\n";
for(var i = -beforeAfter; i<=(count*1)+beforeAfter; i++){
	svg += "	<use xlink:href='#c' x='"+((offset)*i)+"%'/>\n";
}
svg += "	<rect width='100%' height='100%' fill='url(#f)'/>\n"
+ "</svg>";
return svg;
}