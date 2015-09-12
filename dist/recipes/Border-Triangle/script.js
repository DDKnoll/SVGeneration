function generate(inputArray){

var triangle = inputArray['triangle'];
var base = inputArray['base'];
var size = inputArray['size'];
var shadowSize = inputArray['shadow-size'];
var innerShadow = inputArray['inner-shadow'];

return "<svg width='100%' height='100%' xmlns='http://www.w3.org/2000/svg'  viewBox='0 0 100 100'>\n"+
"	<linearGradient id='g1' x1='0%' y1='0%' x2='100%' y2='0%'>\n"+
"		<stop offset='0%' style='stop-color:#"+innerShadow+";stop-opacity:1' />\n"+
"		<stop offset='100%' style='stop-color:#"+base+";stop-opacity:0' />\n"+
"	</linearGradient>\n"+
"	<linearGradient id='g2' x1='0%' y1='0%' x2='0%' y2='100%'>\n"+
"		<stop offset='0%' style='stop-color:#"+innerShadow+";stop-opacity:1' />\n"+
"		<stop offset='100%' style='stop-color:#"+base+";stop-opacity:0' />\n"+
"	</linearGradient>\n"+
"	<radialGradient id='g3' cx='0%' cy='0%' r='100%'>\n"+
"		<stop offset='0%' style='stop-color:#"+innerShadow+";stop-opacity:1' />\n"+
"		<stop offset='100%' style='stop-color:#"+base+";stop-opacity:0' />\n"+
"	</radialGradient>\n"+
"	<g transform='rotate(45) translate(21.2 -49.5)'>\n"+
"		<rect x='-50%' y='-50%' width='100%' height='100%' fill='#"+triangle+"' />\n"+
"		<rect x='50%' y='-50%' width='"+shadowSize+"%' height='100%' fill='url(#g1)' />\n"+
"		<rect x='-50%' y='50%' width='100%' height='"+shadowSize+"%' fill='url(#g2)' />\n"+
"	<rect x='50%' y='50%' width='"+shadowSize+"%' height='"+shadowSize+"%' fill='url(#g3)' />\n"+
"	</g>\n"+
"</svg>"
}