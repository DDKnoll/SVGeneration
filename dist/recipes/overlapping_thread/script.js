function generate(inputArray){
var size = inputArray['size'];
var bg = inputArray['background'];
var left = inputArray['left'];
var right = inputArray['right'];
return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+size+"' height='"+size+"' viewBox='0 0 10 10'>\n"+
"	<g id='g'>\n"+
"		<path d='M5 6l-6 -6 v-2 l6 6' fill-opacity='0' stroke='#"+right+"'/>\n"+
"		<path d='M5 5l6 -6 v-2 l-6 6' fill-opacity='0' stroke='#"+left+"'/>\n"+
"	</g>\n"+
"	<use xlink:href='#g' y='-4'/>\n"+
"	<use xlink:href='#g' y='4'/>\n"+
"	<use xlink:href='#g' y='8'/>\n"+
"	<use xlink:href='#g' y='12'/>\n"+
"</svg>";
}