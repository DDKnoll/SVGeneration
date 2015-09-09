function generate(inputArray){
	var scale = inputArray['scale'];
	var width = inputArray['stripe-width'];
	var background = inputArray['background'];
	var stripe = inputArray['stripe'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='"+scale*2+"'>\n"+
"	<defs>\n"+
"		<pattern patternUnits='userSpaceOnUse' id='c' width='"+scale+"' height='"+scale*2+"' x='0' y='0' viewBox='0 0 5 10'>\n"+
"			<path fill-opacity='0' stroke='#"+stripe+"' stroke-width='"+width+"' d='M-2,1L7,10M-2,6L7,15M-2,-4L7,5'/>\n"+
"		</pattern>\n"+
"		<pattern patternUnits='userSpaceOnUse' id='c2' width='"+scale+"' height='"+scale*2+"' x='100%' y='0' viewBox='0 0 5 10'>\n"+
"			<path fill-opacity='0' stroke='#"+stripe+"' stroke-width='"+width+"' d='M7,1L-2,10M7,6L-2,15M7,-4L-2,5'/>\n"+
"		</pattern>\n"+
"	</defs>\n"+
"	<rect width='50%' height='100%' fill='url(#c)'/>\n"+
"	<rect x='50%' width='50%' height='100%' fill='url(#c2)'/>\n"+
"</svg>";
}