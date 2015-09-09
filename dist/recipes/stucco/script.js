function generate(inputArray){
var background = inputArray['background'];
var backgroundIntense = inputArray['background-intensity'];
var burnColor = inputArray['burn-color'];
var burnIntense = inputArray['burn-intensity'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='300' height='300' viewBox='0 0 150 150'>\n"+
"	<filter id='n' x='0' y='0'>\n"+
"		<feTurbulence type='turbulence' baseFrequency='.7' result='fuzz' numOctaves='2' stitchTiles='stitch'/>\n"+
"		<feComposite in='SourceGraphic' in2='fuzz' operator='arithmetic' k1='0' k2='"+backgroundIntense+"' k3='-"+burnIntense+"' k4='.01' />\n"+
"	</filter>\n"+
"	<rect width='102%' height='102%' fill='#"+burnColor+"'/>\n"+
"	<rect x='-1%' y='-1%' width='102%' height='102%' fill='#"+background+"' filter='url(#n)' opacity='1'/>\n"+
"</svg>";
}