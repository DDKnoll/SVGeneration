function generate(inputArray){
  var background = inputArray['background'];
  var boxes = inputArray['boxes'];
  var boxDensity = inputArray['box-density'];
  var boxSize = inputArray['box-size'];

return "<svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='400' height='400'>\n"+
"	<defs id='defs4'>\n"+
"		<filter color-interpolation-filters='sRGB' id='filter3115'>\n"+
"			<feTurbulence type='fractalNoise' numOctaves='1' baseFrequency='0.9' id='feTurbulence3117' />\n"+
"			<feColorMatrix result='result5' values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 6 -"+(4.95-boxDensity/5)+" ' id='feColorMatrix3119' />\n"+
"			<feComposite in2='result5' operator='in' in='SourceGraphic' result='result6' id='feComposite3121' />\n"+
"			<feMorphology in='result6' operator='dilate' radius='"+boxSize+"' result='result3' id='feMorphology3123' />\n"+
"		</filter>\n"+
"	</defs>\n"+
"	<rect width='100%' height='100%' x='0' y='0' id='rect2985' fill='#"+background+"'/>     \n"+
"	<rect width='100%' height='100%' x='0' y='0' id='rect2985' style='fill:#"+boxes+";filter:url(#filter3115)' />\n"+
"</svg>";
}