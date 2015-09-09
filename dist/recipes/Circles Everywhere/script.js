function generate(inputArray){
	var center = inputArray['center'];
	var topCenter = inputArray['top-center'];
	var topLeft = inputArray['top-left'];
	var topRight = inputArray['top-right'];
	var bottomRight = inputArray['bottom-right'];
	var bottomLeft = inputArray['bottom-left'];

	var r = "<svg xmlns='http://www.w3.org/2000/svg' count='100%' height='100%'>\n";
	
	//Center
	for(var l=1; l<=10; l++){
		r += "	<circle cx='50%' cy='50%' r='"+l*5+"%' fill-opacity='.3' fill='#"+center+"' />\n";
	}
	
	//Top-Center
	for(var n=1; n<=9; n++){
		r += "	<circle cx='50%' cy='-10%' r='"+10*(n+1)+"%' fill-opacity='.2' fill='#"+topCenter+"' />\n";
	}
	
	// Top-Left
	for(var i=1; i<=7; i++){
		r += "	<circle cx='0' cy='0' r='"+i*10+"%' fill-opacity='.2' fill='#"+topLeft+"' />\n";
	}
	
	// Top-Right
	for(var j=1; j<=7; j++){
		r += "	<circle cx='100%' cy='0' r='"+j*10+"%' fill-opacity='.1' fill='#"+topRight+"' />\n";
	}
	
	// Bottom-Right
	for(var k=1; k<=7; k++){
		r += "	<circle cx='100%' cy='100%' r='"+k*10+"%' fill-opacity='.1' fill='#"+bottomRight+"' />\n";
	}
	
	// Bottom-Left
	for(var m=1; m<=7; m++){
		r += "	<circle cx='0%' cy='100%' r='"+m*10+"%' fill-opacity='.1' fill='#"+bottomLeft+"' />\n";
	}
	
	r += "</svg>";
	return r;
}