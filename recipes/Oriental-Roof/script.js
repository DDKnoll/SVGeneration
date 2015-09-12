function generate(inputArray){
var scale = inputArray['scale'];
var color1 = inputArray['color-1'];
var fill1 = inputArray['fill-1'];
var color2 = inputArray['color-2'];
var fill2 = inputArray['fill-2'];
var color3 = inputArray['color-3'];
var fill3 = inputArray['fill-3'];
var color4 = inputArray['color-4'];
var fill4 = inputArray['fill-4'];
var color5 = inputArray['color-5'];
var fill5 = inputArray['fill-5'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+scale*28+"' height='"+scale*5+"'>\n"+
"	<defs>\n"+
"		<g id='curves'>\n"+
"			<path fill='#"+fill1+"' stroke='#"+color1+"' d='M0 "+scale*4+"c"+scale*4+","+scale*4+", "+scale*10+","+scale*4+" "+scale*14+",0v-100h-"+scale*14+"z'/>\n"+
"			<path fill='#"+fill2+"' stroke='#"+color2+"' d='M0 "+scale*3+"c"+scale*4+","+scale*4+", "+scale*10+","+scale*4+" "+scale*14+",0'/>\n"+
"			<path fill='#"+fill3+"' stroke='#"+color3+"' d='M0 "+scale*2+"c"+scale*4+","+scale*4+", "+scale*10+","+scale*4+" "+scale*14+",0'/>\n"+
"			<path fill='#"+fill4+"' stroke='#"+color4+"' d='M0 "+scale+"c"+scale*4+","+scale*4+", "+scale*10+","+scale*4+" "+scale*14+",0'/>\n"+
"			<path fill='#"+fill5+"' stroke='#"+color5+"' d='M0 0c"+scale*4+","+scale*4+", "+scale*10+","+scale*4+" "+scale*14+",0'/>\n"+
"		</g>\n"+
"	</defs>\n"+
"	<rect width='102%' x='-1%' y='-1%' height='102%' fill='#"+fill5+"'></rect>\n"+
"	<use x='0' y='"+(-2/5)*scale+"' xlink:href='#curves' />\n"+
"	<use x='"+scale*14+"' y='"+(-2/5)*scale+"' xlink:href='#curves' />\n"+
"	<use x='-"+scale*7+"' y='"+(-12/5)*scale+"' xlink:href='#curves' />\n"+
"	<use x='"+scale*7+"' y='"+(-12/5)*scale+"' xlink:href='#curves' />\n"+
"	<use x='"+scale*21+"' y='"+(-12/5)*scale+"' xlink:href='#curves' />\n"+
"	<use x='0' y='"+(-27/5)*scale+"' xlink:href='#curves' />  \n"+
"	<use x='"+scale*14+"' y='"+(-27/5)*scale+"' xlink:href='#curves' />\n"+
"</svg>";
}