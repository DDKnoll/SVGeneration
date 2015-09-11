function generate(inputArray){

var sunColor = inputArray['sun-color'];
var radius = inputArray['radius'];
var sky = inputArray['sky'];
var beam = inputArray['beam-color'];
var beamWidth = inputArray['beam-width'];
var beamCount = inputArray['beam-count'];

var rotation = 90/beamCount;

var svg = "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'  xmlns:xlink='http://www.w3.org/1999/xlink'>\n"+
"	<radialGradient id='g' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='"+radius+"%'>\n"+
"		<stop offset='0%' stop-opacity='0' stop-color='#"+sunColor+"' />\n"+
"		<stop offset='100%' stop-opacity='1'  stop-color='#"+sky+"' />\n"+
"	</radialGradient>\n"+
"	<radialGradient id='g2' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='"+radius+"%'>\n"+
"		<stop offset='0%' stop-opacity='.1' stop-color='#"+sunColor+"' />\n"+
"		<stop offset='50%' stop-opacity='.5'  stop-color='#"+sky+"' />\n"+
"		<stop offset='100%' stop-opacity='.9'  stop-color='#"+sky+"' />\n"+
"	</radialGradient>\n"+
"	<rect x='0' y='0' width='110%' height='110%' fill='url(#g)'/>\n"+
"	<svg x='0' y='0' overflow='visible'>\n"+
"		<line id='l' x1='0%' x2='0' y1='0' y2='1000%' style='stroke:#"+beam+"; stroke-width:"+beamWidth+";' transform='rotate(0)'/>\n";
for(var i=1; i<=beamCount; i++){
	svg += "		<use xlink:href='#l' transform='rotate(-"+(i*rotation)+")' />\n";
}
svg += "	</svg>\n"+
"	<rect x='0' y='0' width='110%' height='110%' fill='url(#g2)'/>\n"+
"</svg>";
return svg;
}