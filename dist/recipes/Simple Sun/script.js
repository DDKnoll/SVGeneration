function generate(inputArray){

var bg = inputArray['background'];
var beam = inputArray['beam-color'];
var beamWidth = inputArray['beam-width'];
var beamCount = inputArray['beam-count'];
var sunColor = inputArray['sun-color'];
var sunRadius = inputArray['sun-radius'];
var sunX = inputArray['sun-x'];
var sunY = inputArray['sun-y'];

var rotation = 90/beamCount;

var svg = "<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'>\n"+
"	<svg x='"+sunX+"%' y='"+sunY+"' overflow='visible'>\n"+
"		<g id='b'>\n"+
"			<line id='l' x1='0%' x2='0' y1='0' y2='1000%' style='stroke:#"+beam+"; stroke-width:"+beamWidth+";' transform='rotate(0) translate(0,"+sunRadius+")'/>\n";
for(var i=1; i<beamCount; i++){
	svg += "			<use xlink:href='#l' transform='rotate("+(i*rotation)+")' />\n";
}
svg += "		</g>\n"+
"		<use xlink:href='#b' transform='rotate(90)' />\n"+
"		<use xlink:href='#b' transform='rotate(180)' />\n"+
"		<use xlink:href='#b' transform='rotate(270)' />\n"+
"	</svg>\n"+
"	<circle cx='"+sunX+"%' cy='"+sunY+"' r='"+sunRadius+"' fill='#"+sunColor+"' />\n"+
"</svg>";
return svg;
}