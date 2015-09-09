function generate(inputArray){
var mainColor = inputArray['color'];
var stripeSize = inputArray['stripe-size'];
var stripeColor = inputArray['stripe-color'];
var roughness = inputArray['roughness'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>\n"+
"	<defs>\n"+
"		<pattern id='bluestripe' patternUnits='userSpaceOnUse' x='0' y='0' width='"+stripeSize+"' height='"+stripeSize+"' viewBox='0 0 4 4' >\n"+
"			<line x1='-1' y1='-1' x2='4' y2='4' stroke='#"+stripeColor+"' stroke-width='1'/>\n"+
"			<line x1='3' y1='-1' x2='5' y2='1' stroke='#"+stripeColor+"' stroke-width='1'/>\n"+
"			<line x1='-1' y1='3' x2='1' y2='5' stroke='#"+stripeColor+"' stroke-width='1'/>\n"+
"		</pattern> \n"+
"		<filter id='fuzz' x='0' y='0'>\n"+
"			<feTurbulence type='turbulence' baseFrequency='.5' numOctaves='2' stitchTiles='stitch'/>\n"+
"			<feConvolveMatrix order='3,3' kernelMatrix='0,-.25,0,-.25,2,-.25,0,-.25,0'/>\n"+
"		</filter>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' fill='url(#bluestripe)'/>\n"+
"	<rect width='100%' height='100%' filter='url(#fuzz)' opacity='"+roughness+"'/>\n"+
"</svg>";
}