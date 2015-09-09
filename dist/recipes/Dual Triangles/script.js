function generate(inputArray){
	var width = inputArray['width'];
	var color1 = inputArray['color1'];
	var color2 = inputArray['color2'];
return "<svg xmlns='http://www.w3.org/2000/svg' width='"+width+"' height='"+width+"'>\n"+
"	<g transform='rotate(45)'>\n"+
"		<rect width='200%' height='200%' fill='#"+color2+"'/>\n"+
"	</g>\n"+
"</svg>";
}