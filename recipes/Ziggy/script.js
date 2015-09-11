function generate(inputArray){
var height = inputArray['height'];
var width = inputArray['width'];	
var bg = inputArray['background'];
var fore = inputArray['foreground'];
var foreOp = inputArray['foreground-opacity'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+width+"' height='"+height+"'>\n"
  +"	<rect width='100%' height='100%' fill='#"+bg+"'/>\n"
  +"	<ellipse cx='50%' cy='0%' rx='50%' ry='50%' fill-opacity='"+foreOp+"' fill='#"+fore+"'/>\n"
  +"	<ellipse cx='0%' cy='100%' rx='50%' ry='50%' fill-opacity='"+foreOp+"' fill='#"+fore+"'/>\n"
  +"	<ellipse cx='100%' cy='100%' rx='50%' ry='50%' fill-opacity='"+foreOp+"' fill='#"+fore+"'/>\n"
+"</svg>";
}