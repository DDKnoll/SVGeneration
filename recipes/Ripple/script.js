function generate(inputArray){
var height = inputArray['height'];
var inner = inputArray['inner'];
var middle = inputArray['middle'];
var outer = inputArray['outer'];
var size = inputArray['size'];
var xOffset = inputArray['center-x'];
var yOffset = inputArray['center-y'];


return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='100%' height='"+height+"'>\n"
+"  <defs>\n"
+"    <radialGradient id='glow' cx='"+xOffset+"%' cy='"+yOffset+"%' r='"+size+"%'>\n"
+"      <stop offset='0%' style='stop-color:#"+inner+";'/>\n"
+"      <stop offset='50%' style='stop-color:#"+middle+";'/>\n"
+"      <stop offset='100%' style='stop-opacity:0; stop-color:#"+outer+";'/>\n"
+"    </radialGradient>\n"
+"  </defs>\n"
+"  <rect width='110%' y='-5%' x='-5%' height='110%' fill='url(#glow)'/>\n"
+"</svg>\n";
}