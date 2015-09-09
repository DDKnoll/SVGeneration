function generate(inputArray){
var background = inputArray['background'];
var density = inputArray['density'];
var starColor = inputArray['star-color'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='600' height='600' viewBox='0 0 150 150'>\n"
+"<filter id='i' x='0' y='0'>\n"
+"	<feColorMatrix type='matrix' values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0 0' />\n"
+"</filter>\n"
+"<filter id='n' x='0' y='0'>\n"
+"	<feTurbulence type='turbulence' baseFrequency='.7' result='fuzz' numOctaves='2' stitchTiles='stitch'/>\n"
+"	<feComposite in='SourceGraphic' in2='fuzz' operator='arithmetic' k1='0' k2='1' k3='-"+(160-(density*145))+"' k4='.01' />\n"
+"</filter>\n"
+"<rect width='102%' height='102%' fill='#"+background+"'/>\n"
+"<rect x='-1%' y='-1%' width='102%' height='102%' fill='#"+starColor+"' filter='url(#n)' opacity='1'/>\n"
+"<rect x='-1%' y='-1%' width='102%' height='102%' fill='#"+background+"' filter='url(#i)' opacity='1'/>\n"
+"</svg>";
}