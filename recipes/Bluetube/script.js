function generate(inputArray){
var width = inputArray['width'];
var background = inputArray['background'];
var foreground = inputArray['foreground'];
var size = inputArray['size'];
var xOffset = inputArray['center-x'];
var yOffset = inputArray['center-y'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' height='100%' width='"+width+"'>\n"
+"  <defs>\n"
+"    <radialGradient id='glow' cx='"+xOffset+"%' cy='"+yOffset+"%' r='"+size+"%'>\n"
+"      <stop offset='10%' style='stop-color:#"+foreground+";'/>\n"
+"      <stop offset='100%' style='stop-color:#"+background+";'/>\n"
+"    </radialGradient>\n"
+"  </defs>\n"
+"  <rect width='100%' height='100%' fill='url(#glow)'/>\n"
+"</svg>\n";
}