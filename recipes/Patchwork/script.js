function generate(inputArray){
	var size = inputArray['size'];
	var color1 = inputArray['color1'];
	var color2 = inputArray['color2'];
	var color3 = inputArray['color3'];
	var color4 = inputArray['color4'];
	var color5 = inputArray['color5'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+size*5+"' height='"+size*5+"'>\n"+
"	<defs>\n"+
"		<g id='a'>\n"+
"			<rect fill='#"+color2+"' width='"+size+"' height='"+size+"'/>\n"+
"			<rect x='"+size+"' fill='#"+color3+"' width='"+size+"' height='"+size+"'/>\n"+
"			<rect x='"+size*2+"' fill='#"+color4+"' width='"+size+"' height='"+size+"'/>\n"+
"			<rect x='"+size*3+"' fill='#"+color5+"' width='"+size+"' height='"+size+"'/>\n"+
"			<rect x='"+size*4+"' fill='#"+color1+"' width='"+size+"' height='"+size+"'/>\n"+
"			<rect x='"+size*5+"' fill='#"+color2+"' width='"+size+"' height='"+size+"'/>\n"+
"			<rect x='"+size*6+"' fill='#"+color3+"' width='"+size+"' height='"+size+"'/>\n"+
"			<rect x='"+size*7+"' fill='#"+color4+"' width='"+size+"' height='"+size+"'/>\n"+
"			<rect x='"+size*8+"' fill='#"+color5+"' width='"+size+"' height='"+size+"'/>\n"+
"		</g>\n"+
"	</defs>\n"+
"	<use x='-"+size*4+"' y='0' xlink:href='#a'/>  \n"+
"	<use x='-"+size*3+"' y='"+size+"' xlink:href='#a'/>\n"+
"	<use x='-"+size*2+"' y='"+size*2+"' xlink:href='#a'/>\n"+
"	<use x='-"+size+"' y='"+size*3+"' xlink:href='#a'/>\n"+
"	<use x='0' y='"+size*4+"' xlink:href='#a'/>\n"+
"</svg>";
}