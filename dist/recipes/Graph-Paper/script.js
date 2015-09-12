function generate(inputArray){
var size = inputArray['size'];
var background = inputArray['background'];
var lines = inputArray['lines'];
var lineWidth = inputArray['line-width'];
var turbulence = inputArray['turbulence'];

// viewBox size has to be a multiple, n, of the pattern size. It shouldn't be larger than 300
// n*size <= 300
// n <= 300/size
var n = Math.floor(300/size);

return "<svg xmlns='http://www.w3.org/2000/svg' width='"+(size*n)+"' height='"+(size*n)+"' viewBox='0 0 "+(size*n)+" "+(size*n)+"'>\n"+
"	<defs>\n"+
"		<pattern id='bluestripe' patternUnits='userSpaceOnUse' x='0' y='0' width='"+size+"' height='"+size+"' viewBox='0 0 "+(size*2)+" "+(size*2)+"' >\n"+
"		<rect width='110%' height='110%' fill='#"+background+"'/>\n"+
"			<path d='M1,1h"+(size*2)+"v"+(size*2)+"h-"+(size*2)+"v-"+(size*2)+"' fill-opacity='0' stroke-width='"+lineWidth+"' stroke-dasharray='0,1,1' stroke='#"+lines+"'/>\n"+
"		</pattern> \n"+
"		<filter id='fuzz' x='0' y='0'>\n"+
"			<feTurbulence type='turbulence' result='t' baseFrequency='.2 .3' numOctaves='5' stitchTiles='stitch'/>\n"+
"			<feColorMatrix type='saturate' in='t' values='0'/>\n"+
"		</filter>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' fill='url(#bluestripe)'/>\n"+
"<rect width='100%' height='100%' filter='url(#fuzz)' opacity='"+turbulence+"'/>\n"+
"</svg>\n";
}