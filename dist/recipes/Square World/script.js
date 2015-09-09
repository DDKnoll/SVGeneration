function generate(inputArray){
var size = inputArray['size'];
var diamond = inputArray['diamond'];
return "<svg xmlns='http://www.w3.org/2000/svg' width='"+size+"' height='"+size+"'>\n"+
"	<rect y='-30%' x='60%' width='50%' height='50%' fill='#"+diamond+"' transform='rotate(45)'/>\n"+
"</svg>";
}