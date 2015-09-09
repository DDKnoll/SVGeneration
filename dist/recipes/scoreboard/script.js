function generate(inputArray){
var diameter = inputArray['diameter'];
var background = inputArray['background'];
var lightbulb = inputArray['lightbulb'];
var lightbulbEdge = inputArray['lightbulb-edge'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+diameter+"' height='"+diameter+"'>\n"+
"	<defs>\n"+
"		<radialGradient id='glow' cx='50%' cy='50%' r='50%' fx='50%' fy='50%'>\n"+
"			<stop offset='10%' style='stop-color:#"+lightbulb+";'/>\n"+
"			<stop offset='80%' style='stop-color:#"+lightbulbEdge+";'/>\n"+
"			<stop offset='100%' style='stop-color:#"+background+"; stop-opacity:1;' />\n"+
"		</radialGradient>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' fill='url(#glow)'/>\n"+
"</svg>"
}