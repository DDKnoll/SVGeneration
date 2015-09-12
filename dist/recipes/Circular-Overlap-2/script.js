function generate(inputArray){
var background = inputArray['background'];
var foreground = inputArray['foreground'];
var count = inputArray['count'];
var offset = 100/count;
var height = inputArray['height'];
var opacity = inputArray['opacity'];

var beforeAfter = Math.ceil(height/(offset));

var svg = "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%' height='300'>\n"+
"	<defs>\n"+
"		<g id='c'>\n"+
"			<ellipse cx='-50%' rx='150%' ry='"+height+"%' fill-opacity='"+opacity+"' fill='#"+foreground+"'/>\n"+
"		</g>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' fill='#"+background+"'/>\n";
for(var i = -beforeAfter; i<=(count*1)+beforeAfter; i++){
	svg += "	<use xlink:href='#c' y='"+((offset)*i)+"%'/>\n";
}
svg += "</svg>";
return svg;
}