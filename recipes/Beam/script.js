function generate(inputArray){
  var beam1 = inputArray['beam1'];
  var beam2 = inputArray['beam2'];
  var beam3 = inputArray['beam3'];
  var beam4 = inputArray['beam4'];
  var beam5 = inputArray['beam5'];
  var beam6 = inputArray['beam6'];
  var beam7 = inputArray['beam7'];
  var beam8 = inputArray['beam8'];
  var beam9 = inputArray['beam9'];

  return `
  <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
  	<rect width='100%' height='100%' fill='#${ beam1 }'/>
		<rect width='1000%' height='1000%' fill='#${ beam2 }' transform='rotate(-10)'/>
		<rect width='1000%' height='1000%' fill='#${ beam3 }' transform='rotate(-20)'/>
		<rect width='1000%' height='1000%' fill='#${ beam4 }' transform='rotate(-30)'/>
		<rect width='1000%' height='1000%' fill='#${ beam5 }' transform='rotate(-40)'/>
		<rect width='1000%' height='1000%' fill='#${ beam6 }' transform='rotate(-50)'/>
		<rect width='1000%' height='1000%' fill='#${ beam7 }' transform='rotate(-60)'/>
		<rect width='1000%' height='1000%' fill='#${ beam8 }' transform='rotate(-70)'/>
		<rect width='1000%' height='1000%' fill='#${ beam9 }' transform='rotate(-80)'/>
  </svg>`;
}