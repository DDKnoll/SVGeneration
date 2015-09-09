function generate(inputArray){

	var width = inputArray['width'];
	var height = inputArray['height'];
	var background = inputArray['background'];
	var grate = inputArray['grate'];
	var glare = inputArray['glare'];
	var glareWidth = inputArray['glare-width'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='"+width+"' height='"+height+"'>\n"+
"	<rect x='-10%' y='-10%' width='120%' height='120%' fill='#"+grate+"'/>\n"+
"	<ellipse cx='50%' cy='5"+glareWidth+"%' rx='40%' ry='40%' fill='#"+glare+"'/>\n"+
"	<ellipse cx='50%' cy='50%' rx='40%' ry='40%' fill='#"+background+"'/>\n"+
"</svg>";
}