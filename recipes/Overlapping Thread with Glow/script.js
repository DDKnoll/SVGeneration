function generate(inputArray){
var size = inputArray['size'];
var bg = inputArray['under-thread'];
var left = inputArray['left'];
var right = inputArray['right'];
var inner = inputArray['inner-glow'];
var outer = inputArray['outer-glow'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%' height='100%'>\n"+
"	<defs>\n"+
"		<g id='a'>\n"+
"			<path d='M5 6l-6 -6 v-2 l6 6' fill-opacity='0' stroke='#"+left+"' />\n"+
"			<path d='M5 5l6 -6 v-2 l-6 6' fill-opacity='0' stroke='#"+right+"' />\n"+
"		</g>\n"+
"		<pattern patternUnits='userSpaceOnUse' x='0' y='0' id='p' width='"+size+"' height='"+size+"' viewBox='0 0 10 10'>\n"+
"			<use xlink:href='#a'/>  \n"+
"			<use xlink:href='#a' y='-4'/>\n"+
"			<use xlink:href='#a' y='4'/>\n"+
"			<use xlink:href='#a' y='8'/>\n"+
"			<use xlink:href='#a' y='12'/>\n"+
"		</pattern>\n"+
"		<radialGradient gradientUnits='userSpaceOnUse' id='g' cx='50%' cy='50%' fx='30%' fy='30%' r='60%'>\n"+
"			<stop offset='0%' stop-color='#"+inner+"' stop-opacity='.5' />\n"+
"			<stop offset='100%' stop-color='#"+outer+"' stop-opacity='.7' />\n"+
"			</radialGradient>\n"+
"	</defs>\n"+
"	<rect x='-5%' y='-5%' width='110%' height='110%' fill='#"+bg+"'/>\n"+
"	<rect width='110%' height='110%' fill='url(#p)'/>\n"+
"	<rect x='-5%' y='-5%' width='110%' height='110%' fill='url(#g)'/>\n"+
"</svg>";
}