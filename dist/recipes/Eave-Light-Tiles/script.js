function generate(inputArray){

var size = inputArray['size'];
var fill = inputArray['fill'];
var edgeSize = inputArray['edge-size'];
var edge = inputArray['edge'];
var shadow = inputArray['shadow'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>\n"+
"	<defs>\n"+
"		<pattern id='tile' patternUnits='userSpaceOnUse' width='"+size+"' height='"+size+"' viewBox='0 0 50 50'>\n"+
"			<line x1='1' y1='0' x2='51' y2='50' stroke='#"+shadow+"' stroke-width='"+edgeSize+"'/>\n"+
"			<line x1='49' y1='0' x2='-1' y2='50' stroke='#"+shadow+"' stroke-width='"+edgeSize+"'/>\n"+
"			<line x1='50' y1='0' x2='0' y2='50' stroke='#"+edge+"' stroke-width='"+edgeSize+"'/>\n"+
"			<line x1='0' y1='0' x2='50' y2='50' stroke='#"+edge+"' stroke-width='"+edgeSize+"'/>\n"+
"		</pattern>\n"+
"		<radialGradient id='l' cx='50%' cy='200%' fy='0' r='201%'>\n"+
"			<stop offset='0%' style='stop-color:#fff; stop-opacity:.1;' />\n"+
"			<stop offset='10%' style='stop-color:#000; stop-opacity:0.1;' />\n"+
"			<stop offset='30%' style='stop-color:#000; stop-opacity:0.3;' />\n"+
"			<stop offset='90%' style='stop-color:#000; stop-opacity:0.55;' />\n"+
"			<stop offset='100%' style='stop-color:#000; stop-opacity:.6' />\n"+
"		</radialGradient>\n"+
"	</defs>\n"+
"	<rect fill='#"+fill+"' width='100%' height='100%'/>\n"+
"	<rect fill='url(#tile)' width='100%' height='100%'/>\n"+
"	<rect width='100%' height='100%' fill='url(#l)'/>\n"+
"</svg>";
}