function generate(inputArray){

var scale = inputArray['scale'];
var fill = inputArray['fill'];
var innerBorder = inputArray['inner-border'];
var innerBorderWidth = inputArray['inner-border-width'];
var outerBorder = inputArray['outer-border'];
var outerBorderWidth = inputArray['outer-border-width'];


return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+scale+"' height='"+scale+"' viewBox='0 0 30 30'>\n"+
"<defs>\n"+
"	<g id='curves'>\n"+
"		<path stroke='#"+outerBorder+"' stroke-width='"+outerBorderWidth+"' d='M0 0c0,30, 30,30 30,0'/>\n"+
"		<path fill='#"+fill+"' stroke='#"+innerBorder+"' stroke-width='"+innerBorderWidth+"' d='M0 0c0,30, 30,30 30,0'/>\n"+
"	</g>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' fill='#"+fill+"'/>\n"+
"	<use x='15' y='15' xlink:href='#curves' />\n"+
"	<use x='-15' y='15' xlink:href='#curves' />\n"+
"	<use x='0' y='0' xlink:href='#curves' />  \n"+
"	<use x='15' y='-15' xlink:href='#curves' />\n"+
"	<use x='-15' y='-15' xlink:href='#curves' />\n"+
"</svg>";
}