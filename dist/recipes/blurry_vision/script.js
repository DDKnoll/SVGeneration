function generate(inputArray){
var width = inputArray['width'];
var bg = inputArray['background'];
var color1 = inputArray['color1'];
var color2 = inputArray['color2'];
var color3 = inputArray['color3'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+width+"' height='"+width/2+"'>\n"+
"	<defs>\n"+
"		<g id='lines'>\n"+
"			<line x1='0' y1='0' x2='"+width/5+"' y2='"+width/4+"' stroke-width='1' stroke='#"+color1+"'/>\n"+
"			<line x1='"+width*3/20+"' y1='0' x2='"+width*7/20+"' y2='"+width/4+"' stroke-width='1' stroke='#"+color2+"'/>\n"+
"			<line x1='"+width*3/10+"' y1='0' x2='"+width/2+"' y2='"+width/4+"' stroke-width='1' stroke='#"+color3+"'/>\n"+
"		</g>\n"+
"	</defs>\n"+
"	<rect x='-10%' y='-10%' width='120%' height='120%' fill='#"+bg+"'/>\n"+
"	<use xlink:href='#lines' x='"+width/2+"' y='"+width/4+"' />\n"+
"	<use xlink:href='#lines' x='"+width/2+"' y='-"+width/4+"' transform='matrix(1 0 0 -1 0 0)'/>\n"+
"	<use xlink:href='#lines'  />\n"+
"	<use xlink:href='#lines' x='0' y='-"+width/2+"' transform='matrix(1 0 0 -1 0 0)'/>  \n"+
"</svg>";
}