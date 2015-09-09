function generate(inputArray){
var size = inputArray['size'];
var stripeWidth = inputArray['stripe-width'];
var background = inputArray['background'];
var stripe1 = inputArray['stripe1'];
var stripe2 = inputArray['stripe2'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='"+size+"' height='"+size*2+"' viewBox='0 0 5 10'>\n"+
"	<rect width='110%' x='-5%' y='-5%' height='110%' fill='#"+background+"'/>\n"+
"	<line x1='-2' y1='1' x2='7' y2='10' stroke='#"+stripe1+"' stroke-width='"+stripeWidth+"'/>\n"+
"	<line x1='-2' y1='6' x2='7' y2='15' stroke='#"+stripe1+"' stroke-width='"+stripeWidth+"'/>\n"+
"	<line x1='-2' y1='-4' x2='7' y2='5' stroke='#"+stripe1+"' stroke-width='"+stripeWidth+"'/>\n"+
"	<line x1='7' y1='1' x2='-2' y2='10' stroke='#"+stripe2+"' stroke-width='"+stripeWidth+"'/>\n"+
"	<line x1='7' y1='6' x2='-2' y2='15' stroke='#"+stripe2+"' stroke-width='"+stripeWidth+"'/>\n"+
"	<line x1='7' y1='-4' x2='-2' y2='5' stroke='#"+stripe2+"' stroke-width='"+stripeWidth+"'/>\n"+
"</svg>";
}