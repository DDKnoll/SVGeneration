function generate(inputArray){

var background = inputArray['background'];
var heart = inputArray['heart'];
var size = parseFloat(inputArray['size']);
var padding = parseFloat(inputArray['padding']);

//83 pixels is the height of the graphic.
var dimensions = 83+padding*2;

return "<svg xmlns='http://www.w3.org/2000/svg' width='"+size+"' height='"+size+"' viewBox='0 0 "+dimensions+" "+dimensions+"'>\n"+
"	<path d='M"+dimensions/2+","+(23+padding)+"c0,-30 40,-30 40,0c0,30 -40,60 -40,60c0,0 -40,-30 -40,-60c0,-30 40,-30 40,0' fill='#"+heart+"'/>\n"+
"</svg>\n";	
}