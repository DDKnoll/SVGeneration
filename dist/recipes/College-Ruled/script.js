function generate(inputArray){
var paddingTop = inputArray['padding-top'];
var paddingLeft = inputArray['padding-left'];
var paperColor = inputArray['paper-color'];
var lineHeight = inputArray['line-height'];
var lineColor = inputArray['line-color'];

return "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='100%' height='100%'>\n"
+"  <defs id='defs4'>\n"
+"		<filter color-interpolation-filters='sRGB' id='f'>\n"
+"			<feTurbulence type='fractalNoise' baseFrequency='100 .85' numOctaves='1'/>\n"
+"		</filter>\n"
+"		<pattern patternUnits='userSpaceOnUse' patternTransform='translate(0 "+paddingTop+")' id='l' width='100%' height='"+lineHeight+"'>\n"
+"			<line x1='-10%' y1='1' x2='110%' y2='1' stroke='#"+lineColor+"' stroke-width='1'/>\n"
+"		</pattern>\n"
+"		<pattern patternUnits='userSpaceOnUse' id='p' width='100' height='100'>\n"
+"			<rect x='-10' y='-10' height='120' width='120' style='filter:url(#f)' />\n"
+"		</pattern>\n"
+"	</defs>\n"
+"	<rect x='-10%' y='-10%' height='120%' width='120%' style='fill:url(#p)' />\n"
+"	<rect x='-10%' y='"+paddingTop+"' height='100%' width='120%' style='fill:url(#l)' />\n"
+"	<line x1='"+paddingLeft+"' y1='-5%' x2='"+paddingLeft+"' y2='105%' stroke='#856' />\n"
+"	<rect x='-50%' y='-50%' height='200%' width='200%' style='fill:#"+paperColor+";fill-opacity:0.8;'/>\n"
+"</svg>\n";
}