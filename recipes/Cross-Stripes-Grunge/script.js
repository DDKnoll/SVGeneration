function generate(inputArray){
var size = inputArray['size'];
var stripeWidth = inputArray['stripe-width'];
var background = inputArray['background'];
var stripe1 = inputArray['stripe1'];
var stripe2 = inputArray['stripe2'];
var grunge = inputArray['grunge'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'>\n"
+"<defs>\n"
+"	<pattern id='bluestripe' patternUnits='userSpaceOnUse' x='0' y='0' width='"+size+"' height='"+size*2+"' viewBox='0 0 5 10' >\n"
+"		<rect x='-5' y='-5' width='15' height='20' fill='#"+background+"'/>\n"
+"		<line x1='-2' y1='1' x2='7' y2='10' stroke='#"+stripe1+"' stroke-width='"+stripeWidth+"'/>\n"
+"		<line x1='-2' y1='6' x2='7' y2='15' stroke='#"+stripe1+"' stroke-width='"+stripeWidth+"'/>\n"
+"		<line x1='-2' y1='-4' x2='7' y2='5' stroke='#"+stripe1+"' stroke-width='"+stripeWidth+"'/>\n"
+"		<line x1='7' y1='1' x2='-2' y2='10' stroke='#"+stripe2+"' stroke-width='"+stripeWidth+"'/>\n"
+"		<line x1='7' y1='6' x2='-2' y2='15' stroke='#"+stripe2+"' stroke-width='"+stripeWidth+"'/>\n"
+"		<line x1='7' y1='-4' x2='-2' y2='5' stroke='#"+stripe2+"' stroke-width='"+stripeWidth+"'/>\n"
+"	</pattern> \n"
+"	<filter id='fuzz' x='0' y='0'>\n"
+"		<feTurbulence type='turbulence' result='t' baseFrequency='.2 .1' numOctaves='2' stitchTiles='stitch'/>\n"
+"		<feColorMatrix type='saturate' in='t' values='0.4'/>\n"
+"		<feConvolveMatrix order='3,3' kernelMatrix='0,-.25,0,-.25,2,-.25,0,-.25,0'/>\n"
+"	</filter>\n"
+"</defs>\n"
+"<rect width='100%' height='100%' fill='url(#bluestripe)'/>\n"
+"<rect width='100%' height='100%' filter='url(#fuzz)' opacity='"+grunge+"'/>\n"
+"</svg>";
}