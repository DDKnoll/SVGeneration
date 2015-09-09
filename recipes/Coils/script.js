function generate(inputArray){

var size = inputArray['size'];
var background = inputArray['background'];
var foreground = inputArray['foreground'];
var weight = inputArray['weight'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='"+size/2+"' height='"+size+"' viewBox='0 0 20 40'>\n"+
"	<circle cx='10' cy='30' r='7.5' fill-opacity='0' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<circle cx='10' cy='30' r='2.5' fill-opacity='0' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<rect x='0' y='0' width='20' height='30' fill='#"+background+"'/>\n"+
"	<circle cx='0' cy='10' r='7.5' fill-opacity='0' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<circle cx='0' cy='10' r='2.5' fill-opacity='0' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<circle cx='20' cy='10' r='7.5' fill-opacity='0' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<circle cx='20' cy='10' r='2.5' fill-opacity='0' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<rect x='0' y='10' width='40' height='10' fill='#"+background+"'/>\n"+
"	<line x1='2.5' y1='10' x2='2.5' y2='30' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<line x1='7.5' y1='10' x2='7.5' y2='30' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<line x1='12.5' y1='10' x2='12.5' y2='30' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"	<line x1='17.5' y1='10' x2='17.5' y2='30' stroke='#"+foreground+"' stroke-width='"+weight+"'/>\n"+
"</svg>";
}