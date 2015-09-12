function generate(inputArray){
var radius = inputArray['radius'];
var color1 = inputArray['color1'];
var color2 = inputArray['color2'];
var color3 = inputArray['color3'];
var color4 = inputArray['color4'];
var color5 = inputArray['color5'];
var color6 = inputArray['color6'];

return "<svg width='"+6*(radius*2+4)+"' height='"+(radius*2+4)+"' viewBox='0 0 "+6*(radius*2+4)+" "+(radius*2+4)+"' xmlns='http://www.w3.org/2000/svg' version='1.1'>\n"
+"	<circle cx='"+(radius*1+2)+"' cy='"+(radius*1+2)+"' r='"+radius+"' fill='#"+color1+"'/>\n"
+"	<circle cx='"+(3*(radius*1+2))+"' cy='"+(radius*1+2)+"' r='"+radius+"' fill='#"+color2+"'/>\n"
+"	<circle cx='"+(5*(radius*1+2))+"' cy='"+(radius*1+2)+"' r='"+radius+"' fill='#"+color3+"'/>\n"
+"	<circle cx='"+(7*(radius*1+2))+"' cy='"+(radius*1+2)+"' r='"+radius+"' fill='#"+color4+"'/>\n"
+"	<circle cx='"+(9*(radius*1+2))+"' cy='"+(radius*1+2)+"' r='"+radius+"' fill='#"+color5+"'/>\n"
+"	<circle cx='"+(11*(radius*1+2))+"' cy='"+(radius*1+2)+"' r='"+radius+"' fill='#"+color6+"'/>  \n"
+"</svg>";
}