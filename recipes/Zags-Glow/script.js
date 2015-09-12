function generate(inputArray){

var scale = inputArray['scale'];
var stripe = inputArray['stripe'];
var stripeWidth = inputArray['stripe-width'];
var inner = inputArray['inner'];
var outer = inputArray['outer'];


return "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>\n"
+"	<defs>\n"
+"		<pattern patternUnits='userSpaceOnUse' id='c' width='"+scale+"' height='"+scale*2+"' x='0' y='0' viewBox='0 0 5 10'>\n"
+"			<line x1='-2' y1='1' x2='7' y2='10' stroke='#"+stripe+"' stroke-width='"+stripeWidth+"'/>\n"
+"			<line x1='-2' y1='6' x2='7' y2='15' stroke='#"+stripe+"' stroke-width='"+stripeWidth+"'/>\n"
+"			<line x1='-2' y1='-4' x2='7' y2='5' stroke='#"+stripe+"' stroke-width='"+stripeWidth+"'/>\n"
+"		</pattern>\n"
+"		<radialGradient id='g' gradientUnits='userSpaceOnUse' cx='50%' cy='50%' r='75%' fx='46%' fy='22%'>\n"
+"			<stop offset='0%' stop-opacity='.2' stop-color='#"+inner+"' />\n"
+"			<stop offset='100%' stop-color='#"+outer+"' />\n"
+"		</radialGradient>\n"
+"	</defs>\n"
+"	<rect width='100%' height='100%' fill='url(#c)'/>\n"
+"	<rect width='120%' x='-10%' y='-10%' height='120%' fill='url(#g)'/>\n"
+"</svg>";
}