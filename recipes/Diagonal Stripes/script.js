function generate(inputArray){
	var scale = inputArray['scale'];
	var width = inputArray['stripe-width'];
	var background = inputArray['background'];
	var stripe = inputArray['stripe'];
return "<svg xmlns='http://www.w3.org/2000/svg' width='"+scale+"' height='"+scale*2+"' viewBox='0 0 5 10'>\n"+
"	<rect width='110%' x='-5%' y='-5%' height='110%' fill='#"+background+"'/>\n"+
"	<line x1='-2' y1='1' x2='7' y2='10' stroke='#"+stripe+"' stroke-width='"+width+"'/>\n"+
"	<line x1='-2' y1='6' x2='7' y2='15' stroke='#"+stripe+"' stroke-width='"+width+"'/>\n"+
"	<line x1='-2' y1='-4' x2='7' y2='5' stroke='#"+stripe+"' stroke-width='"+width+"'/>\n"+
"</svg>";
}