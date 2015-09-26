function generate(inputArray){
  var x = inputArray['center-x'];
  var y = inputArray['center-y'];
  var radius = inputArray['radius'];
  var color1 = inputArray['color-1'];
  var offset1 = inputArray['offset-1'];
  var color2 = inputArray['color-2'];
  var offset2 = inputArray['offset-2'];
  var color3 = inputArray['color-3'];
  var offset3 = inputArray['offset-3'];

  return `
  <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
  	<radialGradient id='glow' gradientUnits='userSpaceOnUse' cx='${x}' cy='${y}' r='${radius}'>
  		<stop offset='${offset1}%' stop-color='#${color1}' />
  		<stop offset='${offset2}%' stop-color='#${color2}' />
  		<stop offset='${offset3}%' stop-color='#${color3}' />
  	</radialGradient>
  	<rect fill='url(#glow)' x='-1%' y='-1%' width='102%' height='102%'/>
  </svg>
  `
}