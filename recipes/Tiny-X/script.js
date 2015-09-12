function generate(inputArray){
	var size = inputArray['size'];
	var scale = inputArray['scale'];
	var under = inputArray['under'];
	var over = inputArray['over'];
return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+scale+"' height='"+scale+"'>\n"+
"  <line x1='"+(50-size*10)+"%' y1='"+(50-size*10)+"%' x2='"+(50+size*10)+"%' y2='"+(50+size*10)+"%' stroke-width='1' stroke='#"+under+"'/>\n"+
"  <line x1='"+(50+size*10)+"%' y1='"+(50-size*10)+"%' x2='"+(50-size*10)+"%' y2='"+(50+size*10)+"%' stroke-width='1' stroke='#"+over+"'/>  \n"+
"</svg>";
}