function generate(inputArray){
	var size = inputArray['size'];
	var padding = inputArray['padding'];
	var bg = inputArray['background'];
	var overlay = inputArray['overlay'];
	var weight = inputArray['overlay-weight'];

return "<svg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' width='"+size*32+"' height='"+size*20+"' viewBox='0 0 "+size*16+" "+size*10+"'>\n"+
"	<defs>\n"+
"		<rect id='s' fill='#"+overlay+"' width='"+(size-(padding*size))+"' height='"+(size-(padding*size))+"'/>\n"+
"	</defs>\n"+
"	<g id='b'>\n"+
"	<use x='"+((size*padding)/2)+"' y='"+((size*padding)/2)+"' fill-opacity='"+weight*.04+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*1)+"' y='"+((size*padding)/2)+"' fill-opacity='"+weight*.02+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*2)+"' y='"+((size*padding)/2)+"' fill-opacity='"+weight*.06+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*3)+"' y='"+((size*padding)/2)+"' fill-opacity='"+weight*.05+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*4)+"' y='"+((size*padding)/2)+"' fill-opacity='"+weight*.02+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*5)+"' y='"+((size*padding)/2)+"' fill-opacity='"+weight*.04+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*6)+"' y='"+((size*padding)/2)+"' fill-opacity='"+weight*.07+"' xlink:href='#s' />\n"+
"	<use x='"+((size*padding)/2)+"' y='"+(((size*padding)/2)+size*1)+"' fill-opacity='"+weight*.03+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*1)+"' y='"+(((size*padding)/2)+size*1)+"' fill-opacity='"+weight*.04+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*2)+"' y='"+(((size*padding)/2)+size*1)+"' fill-opacity='"+weight*.02+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*3)+"' y='"+(((size*padding)/2)+size*1)+"' fill-opacity='"+weight*.06+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*4)+"' y='"+(((size*padding)/2)+size*1)+"' fill-opacity='"+weight*.04+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*5)+"' y='"+(((size*padding)/2)+size*1)+"' fill-opacity='"+weight*.03+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*6)+"' y='"+(((size*padding)/2)+size*1)+"' fill-opacity='"+weight*.01+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*7)+"' y='"+(((size*padding)/2)+size*1)+"' fill-opacity='"+weight*.04+"' xlink:href='#s' />\n"+
"	<use x='"+((size*padding)/2)+"' y='"+(((size*padding)/2)+size*2)+"' fill-opacity='"+weight*.03+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*1)+"' y='"+(((size*padding)/2)+size*2)+"' fill-opacity='"+weight*.02+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*2)+"' y='"+(((size*padding)/2)+size*2)+"' fill-opacity='"+weight*.06+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*3)+"' y='"+(((size*padding)/2)+size*2)+"' fill-opacity='"+weight*.02+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*4)+"' y='"+(((size*padding)/2)+size*2)+"' fill-opacity='"+weight*.06+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*5)+"' y='"+(((size*padding)/2)+size*2)+"' fill-opacity='"+weight*.04+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*6)+"' y='"+(((size*padding)/2)+size*2)+"' fill-opacity='"+weight*.03+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*7)+"' y='"+(((size*padding)/2)+size*2)+"' fill-opacity='"+weight*.07+"' xlink:href='#s' />\n"+
"	<use x='"+((size*padding)/2)+"' y='"+(((size*padding)/2)+size*3)+"' fill-opacity='"+weight*.04+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*1)+"' y='"+(((size*padding)/2)+size*3)+"' fill-opacity='"+weight*.03+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*2)+"' y='"+(((size*padding)/2)+size*3)+"' fill-opacity='"+weight*.05+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*3)+"' y='"+(((size*padding)/2)+size*3)+"' fill-opacity='"+weight*.03+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*5)+"' y='"+(((size*padding)/2)+size*3)+"' fill-opacity='"+weight*.06+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*6)+"' y='"+(((size*padding)/2)+size*3)+"' fill-opacity='"+weight*.01+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*7)+"' y='"+(((size*padding)/2)+size*3)+"' fill-opacity='"+weight*.03+"' xlink:href='#s' />\n"+
"	<use x='"+((size*padding)/2)+"' y='"+(((size*padding)/2)+size*4)+"' fill-opacity='"+weight*.01+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*1)+"' y='"+(((size*padding)/2)+size*4)+"' fill-opacity='"+weight*.06+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*2)+"' y='"+(((size*padding)/2)+size*4)+"' fill-opacity='"+weight*.03+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*3)+"' y='"+(((size*padding)/2)+size*4)+"' fill-opacity='"+weight*.05+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*4)+"' y='"+(((size*padding)/2)+size*4)+"' fill-opacity='"+weight*.02+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*6)+"' y='"+(((size*padding)/2)+size*4)+"' fill-opacity='"+weight*.05+"' xlink:href='#s' />\n"+
"	<use x='"+(((size*padding)/2)+size*7)+"' y='"+(((size*padding)/2)+size*4)+"' fill-opacity='"+weight*.02+"' xlink:href='#s' />\n"+
"	</g>\n"+
"	<use x='-"+size*8+"' y='"+size*5+"' transform='matrix(-1 0 0 1 0 0)' xlink:href='#b' />\n"+
"	<use x='-"+size*16+"' y='-"+size*7+"' transform='matrix(-1 0 0 -1 0 0)' xlink:href='#b' />\n"+
"	<use x='"+size*8+"' y='-"+size*12+"' transform='matrix(1 0 0 -1 0 0)' xlink:href='#b' />\n"+
"	<use x='"+size*8+"' y='-"+size*2+"' transform='matrix(1 0 0 -1 0 0)' xlink:href='#b' />\n"+
"</svg>";
}