function generate(inputArray){
	var scale = inputArray['scale'];
	var width = inputArray['stripe-width'];
	var stripe = inputArray['stripe'];
return "<svg xmlns='http://www.w3.org/2000/svg' width='"+scale+"' height='"+scale*2+"' viewBox='0 0 5 10'>\n"+
"	<path d='M0,0l5,5l-5,5m-1,-6l1,1l-1,1M4,-1l6,6l-6,6' fill-opacity='0' stroke='#"+stripe+"' stroke-width='"+width+"'/>\n"+
"</svg>";
}