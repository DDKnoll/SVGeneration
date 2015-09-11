function generate(inputArray){

var baseColor = inputArray['base-color'];
var grainColor = inputArray['grain-color'];
var grainWeight = inputArray['grain-weight'];
var turbulenceWeight = inputArray['turbulence-weight'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='600' height='4'>\n"
+"	<defs id='defs4'>\n"
+"		<filter y='0' color-interpolation-filters='sRGB' id='t'>\n"
+"			<feTurbulence type='fractalNoise' baseFrequency='.8 0' result='out1' numOctaves='1'/>\n"
+"			<feColorMatrix type='saturate' in='out1' result='out2' values='0'/>\n"
+"			<feComposite operator='arithmetic' k1='0' k2='"+turbulenceWeight+"' k3='0' k4='0' in='out2' in2='out1'/>\n"
+"		</filter>\n"
+"	</defs>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.1)+"' x='5%' y='-5%' width='10%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.04)+"' x='6%' y='-5%' width='10%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.04)+"' x='7%' y='-5%' width='14%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.04)+"' x='9%' y='-5%' width='20%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.04)+"' x='11%' y='-5%' width='10%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.08)+"' x='55%' y='-5%' width='40%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.03)+"' x='62%' y='-5%' width='35%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.07)+"' x='38%' y='-5%' width='20%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.03)+"' x='85%' y='-5%' width='40%' height='110%'/>\n"
+"	<rect fill='#"+grainColor+"' fill-opacity='"+(grainWeight*.05)+"' x='52%' y='-5%' width='40%' height='110%'/>\n"
+"	<rect style='filter:url(#t)' x='-1%' y='-1%' width='102%' height='100%'/>\n"
+"</svg>";
}