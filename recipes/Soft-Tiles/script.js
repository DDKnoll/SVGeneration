function generate(inputArray){

var size = inputArray['size'];
var fill = inputArray['fill'];
var edgeSize = inputArray['edge-size'];
var edge = inputArray['edge'];
var shadow = inputArray['shadow'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='"+size+"' height='"+size+"' viewBox='0 0 50 50'>\n"+
"	<line x1='1' y1='0' x2='51' y2='50' stroke='#"+shadow+"' stroke-width='"+edgeSize+"'/>\n"+
"	<line x1='49' y1='0' x2='-1' y2='50' stroke='#"+shadow+"' stroke-width='"+edgeSize+"'/>\n"+
"	<line x1='50' y1='0' x2='0' y2='50' stroke='#"+edge+"' stroke-width='"+edgeSize+"'/>\n"+
"	<line x1='0' y1='0' x2='50' y2='50' stroke='#"+edge+"' stroke-width='"+edgeSize+"'/>\n"+
"</svg>";
}