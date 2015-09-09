function generate(inputParams){
	var gridColor = inputParams['grid-color'];
	var gridSize = inputParams['grid-size'];
	var gridWidth = inputParams['grid-width'];
	var gradientx = inputParams['gradient-x'];
	var gradienty = inputParams['gradient-y'];
	var gradientr = inputParams['gradient-radius'];
	var gradient1 = inputParams['gradient-inner'];
	var gradient2 = inputParams['gradient-outer'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>\n"+
"	<defs>\n"+
"		<pattern patternUnits='userSpaceOnUse' id='c' width='"+gridSize*1.5+"' height='"+gridSize+"' x='0' y='0' viewBox='0 0 30 20'>\n"+
"			<path d='M0,10h5l5,-10h10l5,10h5m-5,0l-5,10h-10l-5,-10' stroke='#"+gridColor+"' stroke-width='"+gridWidth+"' fill-opacity='0' />\n"+
"		</pattern>\n"+
"		<radialGradient id='g' gradientUnits='userSpaceOnUse' cx='"+gradientx+"%' cy='"+gradienty+"%' r='"+gradientr+"%' fx='"+(gradientx-(.4*gradientr))+"%' fy='"+(gradienty-(.3*gradientr))+"%'>\n"+
"			<stop offset='0%' stop-opacity='0' stop-color='#"+gradient1+"' />\n"+
"			<stop offset='100%' stop-opacity='.9' stop-color='#"+gradient2+"' />\n"+
"		</radialGradient>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' fill='url(#c)'/>\n"+
"	<rect width='120%' x='-10%' y='-10%' height='120%' fill='url(#g)'/>\n"+
"</svg>";
}