function generate(inputArray){
var base = inputArray['base'];
var granularity = inputArray['granularity'];
var strength = inputArray['strength'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='200' height='300' viewBox='0 0 200 300'>\n"
+"	<filter id='fuzz' x='0' y='0'>\n"
+"		<feTurbulence type='turbulence' baseFrequency='"+granularity+"' numOctaves='10' stitchTiles='stitch'/>\n"
+"	</filter>\n"
+"	<rect width='100%' height='100%' filter='url(#fuzz)' opacity='"+strength+"'/>\n"
+"</svg>"
}