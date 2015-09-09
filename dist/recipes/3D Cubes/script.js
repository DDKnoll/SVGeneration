function generate(inputArray){
var left = inputArray['left'];
var right = inputArray['right'];
var height = inputArray['height'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+height+"' height='"+height*8/5+"' viewBox='0 0 10 16'>\n"+
"	<g id='c'>\n"+
"		<path fill='#"+left+"' d='M0 0l5 3v5l-5 -3z'/>\n"+
"		<path fill='#"+right+"' d='M10 0l-5 3v5l5 -3'/>\n"+
"	</g>\n"+
"	<use x='5' y='8' xlink:href='#c' />\n"+
"	<use x='-5' y='8' xlink:href='#c' />\n"+
"</svg>"
}