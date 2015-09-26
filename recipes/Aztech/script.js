function generate(inputArray){
  var size = inputArray['size'];
  var background1 = inputArray['background1'];
  var background2 = inputArray['background2'];
  var pattern = inputArray['pattern'];

  return `
  <svg xmlns='http://www.w3.org/2000/svg' width='${ size }' height='${ size }' viewBox='0 0 150 150'>
  	<radialGradient id='glow' cx='50%' cy='50%' radius='50%'>
  		<stop stop-color='#${ background1 }' offset='50%'/>
  		<stop stop-color='#${ background2 }' offset='100%'/>
  	</radialGradient>
  	<filter id='n' x='0' y='0'>
  		<feTurbulence type='turbulence' baseFrequency='.7' result='fuzz' numOctaves='2' stitchTiles='stitch'/>
  		<feComposite in='SourceGraphic' in2='fuzz' operator='arithmetic' k1='0' k2='1' k3='-.15' k4='.01' />
  	</filter>
  	<rect width='102%' height='102%' fill='#000'/>
  	<g id='patterns' filter='url(#n)'>
  		<rect x='-1%' y='-1%' width='102%' height='102%' fill='url(#glow)'  opacity='1'/>
  		<path fill='#${ pattern }' d='M0 10l38 5l37 -5l38 5l37-5v-5h-150'/>
  		<path fill='#${ pattern }' d='M0 100l38 20l37 -10l38 10l37-20v-5h-150'/>
  		<path fill='#${ pattern }' d='M75 65c-50,0 -50,-30 0,-30z'/>
  		<path fill='#${ pattern }' d='M75 45c50,0 50,30 0,30z'/>
  	</g>
  </svg>`;
}