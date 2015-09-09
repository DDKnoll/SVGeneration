function generate(inputArray){

var height = parseFloat(inputArray['height']);
var width = parseFloat(inputArray['width']);
var background = inputArray['background'];
var overlay = inputArray['overlay'];
var weight = parseFloat(inputArray['weight']);
var padding = parseFloat(inputArray['padding']);

var halfHeight = height/2;
var xOffset = width+padding;
var yOffset = halfHeight+padding;
var totalWidth = 6*(xOffset)+6*(padding-1);
var totalHeight = 4*((halfHeight)+height);

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+((xOffset*12)*5)+"' height='"+((yOffset*12)*5)+"' viewBox='0 0 "+((xOffset*12))+" "+((yOffset*6)*2)+"'>\n"+
"	<defs>\n"+
"		<path id='s' fill='#"+overlay+"' d='M0,0l"+width+" "+halfHeight+"l-"+width+","+halfHeight+"z'/>\n"+
"	</defs>\n"+
"	<g id='b'>\n"+
"	<use x='-"+width+"' y='-"+(halfHeight)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='0' y='"+padding+"' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='-"+width+"' y='"+((yOffset)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='0' y='"+((yOffset*2)+padding)+"' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='-"+width+"' y='"+((yOffset*3)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.04)+"' xlink:href='#s' />\n"+
"	<use x='0' y='"+(yOffset*4+padding)+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='-"+width+"' y='"+(yOffset*5+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+

"	<use x='"+(xOffset)+"' y='-"+(halfHeight)+"' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*2-padding)+"' y='"+padding+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.04)+"' xlink:href='#s' />\n"+
"	<use x='"+(xOffset)+"' y='"+((yOffset)+padding)+"' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*2-padding)+"' y='"+((yOffset*2)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='"+(xOffset)+"' y='"+((yOffset*3)+padding)+"' fill-opacity='"+(weight*0.01)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*2-padding)+"' y='"+(yOffset*4+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='"+(xOffset)+"' y='"+(yOffset*5+padding)+"' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+

"	<use x='-"+(xOffset*3-padding)+"' y='-"+(halfHeight)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='"+xOffset*2+"' y='"+padding+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*3-padding)+"' y='"+((yOffset)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='"+xOffset*2+"' y='"+((yOffset*2)+padding)+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*3-padding)+"' y='"+((yOffset*3)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.01)+"' xlink:href='#s' />	\n"+
"	<use x='"+xOffset*2+"' y='"+(yOffset*4+padding)+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*3-padding)+"' y='"+(yOffset*5+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+

"	<use x='"+xOffset*3+"' y='-"+(halfHeight)+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*4-padding)+"' y='"+padding+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='"+xOffset*3+"' y='"+((yOffset)+padding)+"' fill-opacity='"+(weight*0.01)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*4-padding)+"' y='"+((yOffset*2)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='"+xOffset*3+"' y='"+((yOffset*3)+padding)+"' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*4-padding)+"' y='"+(yOffset*4+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.01)+"' xlink:href='#s' />\n"+
"	<use x='"+xOffset*3+"' y='"+(yOffset*5+padding)+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+

"	<use x='-"+(xOffset*5-padding)+"' y='-"+(halfHeight)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />	\n"+
"	<use x='"+xOffset*4+"' y='"+padding+"' fill-opacity='"+(weight*0.04)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*5-padding)+"' y='"+((yOffset)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.01)+"' xlink:href='#s' />\n"+
"	<use x='"+xOffset*4+"' y='"+((yOffset*2)+padding)+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*5-padding)+"' y='"+((yOffset*3)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='"+xOffset*4+"' y='"+(yOffset*4+padding)+"' fill-opacity='"+(weight*0.01)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*5-padding)+"' y='"+(yOffset*5+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+

"	<use x='"+xOffset*5+"' y='-"+(halfHeight)+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*6-padding)+"' y='"+padding+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />	\n"+
"	<use x='"+xOffset*5+"' y='"+((yOffset)+padding)+"' fill-opacity='"+(weight*0.04)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*6-padding)+"' y='"+((yOffset*2)+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />	\n"+
"	<use x='"+xOffset*5+"' y='"+((yOffset*3)+padding)+"' fill-opacity='"+(weight*0.03)+"' xlink:href='#s' />\n"+
"	<use x='-"+(xOffset*6-padding)+"' y='"+(yOffset*4+padding)+"' transform='matrix(-1 0 0 1 0 0)' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	<use x='"+xOffset*5+"' y='"+(yOffset*5+padding)+"' fill-opacity='"+(weight*0.02)+"' xlink:href='#s' />\n"+
"	</g>\n"+
"	<use x='-"+(xOffset*6-padding)+"' y='"+(yOffset*6)+"' transform='matrix(-1 0 0 1 0 0)' xlink:href='#b' />\n"+
"	<use x='-"+((xOffset*12)-padding)+"' y='-"+(yOffset*4)+"' transform='matrix(-1 0 0 -1 0 0)' xlink:href='#b' />\n"+
"	<use x='"+(xOffset*6)+"' y='-"+(yOffset*8)+"' transform='matrix(1 0 0 -1 0 0)' xlink:href='#b' />\n"+
"	<use x='"+(xOffset*6)+"' y='"+-(yOffset*14)+"' transform='matrix(1 0 0 -1 0 0)' xlink:href='#b' />\n"+
"</svg>\n";
}