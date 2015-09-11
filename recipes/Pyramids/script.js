function generate(inputArray){
var size = inputArray['size'];
var base = inputArray['base'];
var shadow = inputArray['shadow'];
var weight = inputArray['weight'];

return "<svg xmlns='http://www.w3.org/2000/svg' width='"+size+"' height='"+size+"'>\n"
+"	<rect width='200%' height='200%' fill-opacity='"+weight+"' fill='#"+shadow+"' transform='rotate(45)'/>\n"
+"	<rect x='-80%' y='70%' width='200%' height='200%' fill-opacity='"+weight*2+"' fill='#"+shadow+"' transform='rotate(-45)'/>\n"
+"</svg>";
}