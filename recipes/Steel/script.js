function generate(inputArray){
var size = inputArray['size'];
var top = inputArray['top'];
var bottom = inputArray['bottom'];
var turbulence = inputArray['turbulence'];

// viewBox size has to be a multiple, n, of the pattern size. It shouldn't be larger than 300
// n*size <= 300
// n <= 300/size
var n = Math.floor(300/size);

return "<svg xmlns='http://www.w3.org/2000/svg' width='"+(size*n)+"' height='"+(size*n)+"'>\n"+
"	<defs>\n"+
"		<linearGradient id='g'  x2='0' y2='100%'>\n"+
"			<stop offset='0%' style='stop-color:#"+top+";stop-opacity:1' />\n"+
"			<stop offset='100%' style='stop-color:#"+bottom+";stop-opacity:1' />\n"+
"		</linearGradient>\n"+
"		<pattern id='b' patternUnits='userSpaceOnUse' x='0' y='0' width='"+size+"' height='"+size/2+"' viewBox='0 0 20 10' >\n"+
"			<rect fill='url(#g)' x='9' y='-6' width='12' height='12'/>\n"+
"			<rect fill='url(#g)' x='9' y='5' width='12' height='10'/>\n"+
"			<rect fill='url(#g)' width='10' height='10'/>\n"+
"		</pattern> \n"+
"		<filter id='fuzz' x='0' y='0'>\n"+
"			<feTurbulence type='turbulence' result='t' baseFrequency='.2 .3' numOctaves='5' stitchTiles='stitch'/>\n"+
"			<feColorMatrix type='saturate' in='t' values='0'/>\n"+
"		</filter>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' fill='url(#b)'/>\n"+
"<rect width='100%' height='100%' filter='url(#fuzz)' opacity='"+turbulence+"'/>\n"+
"</svg>\n";
}