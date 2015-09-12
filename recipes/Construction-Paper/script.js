function generate(inputArray){
	var overlay = inputArray['overlay'];
	var overlayTransparency = inputArray['overlay-transparency'];
return "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='300' height='300'>\n"+
"	<defs>\n"+
"		<filter color-interpolation-filters='sRGB' id='filter3001'>\n"+
"			<feTurbulence type='fractalNoise' baseFrequency='100 .85' numOctaves='1'/>\n"+
"		</filter>\n"+
"	</defs>\n"+
"	<rect height='200%' width='200%' style='filter:url(#filter3001)' />\n"+
"	<rect height='200%' width='200%' style='fill:#"+overlay+";fill-opacity:"+overlayTransparency+";'/>\n"+
"</svg>";
}