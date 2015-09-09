function generate(inputArray){
	color1 = inputArray['color1'];
	color2 = inputArray['color2'];
	color3 = inputArray['color3'];
	color4 = inputArray['color4'];
	blur = inputArray['blur'];
	return '<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">\n'+
	'	<defs>\n'+
	'		<filter id="b">\n'+
	'			<feGaussianBlur stdDeviation="'+blur+'"/>\n'+
	'		</filter>\n'+
	'		<radialGradient id="l" cx="50%" cy="0%" fy="-50%" r="82%">\n'+
	'			<stop offset="40%" style="stop-color:#fff; stop-opacity:1;"/>\n'+
	'			<stop offset="90%" style="stop-color:#fff; stop-opacity:.5;"/>\n'+
	'			<stop offset="100%" style="stop-color:#fff; stop-opacity:0"/>\n'+
	'		</radialGradient>\n'+
	'		<radialGradient id="l2" cx="50%" cy="0%" fy="-45%" r="75%">\n'+
	'			<stop offset="40%" style="stop-color:#fff; stop-opacity:1;"/>\n'+
	'			<stop offset="90%" style="stop-color:#fff; stop-opacity:.5;"/>\n'+
	'			<stop offset="100%" style="stop-color:#fff; stop-opacity:0"/>\n'+
	'		</radialGradient>\n'+
	'		<radialGradient id="l3" cx="50%" cy="0%" fy="-40%" r="65%">\n'+
	'			<stop offset="40%" style="stop-color:#fff; stop-opacity:1;"/>\n'+
	'			<stop offset="90%" style="stop-color:#fff; stop-opacity:.5;"/>\n'+
	'			<stop offset="100%" style="stop-color:#fff; stop-opacity:0"/>\n'+
	'		</radialGradient>\n'+
	'		<linearGradient id="r" x2="100%" y2="0">\n'+
	'			<stop offset="0%" style="stop-color:#'+color1+';"/>\n'+
	'			<stop offset="33%" style="stop-color:#'+color2+';"/>\n'+
	'			<stop offset="66%" style="stop-color:#'+color3+';"/>\n'+
	'			<stop offset="100%" style="stop-color:#'+color4+';"/>\n'+
	'		</linearGradient>\n'+
	'		<mask id="m" maskUnits="userSpaceOnUse" x="0" y="0" width="100%" height="100%">\n'+
	'			<g filter="url(#b)">\n'+
	'				<rect width="5%" height="100%" fill="url(#l)"/>\n'+
	'				<rect x="5%" width="5%" height="100%" fill="url(#l)"/>\n'+
	'				<rect x="10%" width="5%" height="100%" fill="url(#l3)"/>\n'+
	'				<rect x="15%" width="5%" height="100%" fill="url(#l2)"/>\n'+
	'				<rect x="20%" width="5%" height="100%" fill="url(#l3)"/>\n'+
	'				<rect x="25%" width="5%" height="100%" fill="url(#l)"/>\n'+
	'				<rect x="30%" width="5%" height="100%" fill="url(#l2)"/>\n'+
	'				<rect x="35%" width="5%" height="100%" fill="url(#l)"/>\n'+
	'				<rect x="40%" width="5%" height="100%" fill="url(#l2)"/>\n'+
	'				<rect x="45%" width="5%" height="100%" fill="url(#l3)"/>\n'+
	'				<rect x="50%" width="5%" height="100%" fill="url(#l2)"/>\n'+
	'				<rect x="55%" width="5%" height="100%" fill="url(#l)"/>\n'+
	'				<rect x="60%" width="5%" height="100%" fill="url(#l3)"/>\n'+
	'				<rect x="65%" width="5%" height="100%" fill="url(#l)"/>\n'+
	'				<rect x="70%" width="5%" height="100%" fill="url(#l2)"/>\n'+
	'				<rect x="75%" width="5%" height="100%" fill="url(#l2)"/>\n'+
	'				<rect x="80%" width="5%" height="100%" fill="url(#l3)"/>\n'+
	'				<rect x="85%" width="5%" height="100%" fill="url(#l)"/>\n'+
	'				<rect x="90%" width="5%" height="100%" fill="url(#l2)"/>\n'+
	'				<rect x="95%" width="5%" height="100%" fill="url(#l3)"/>\n'+
	'			</g>\n'+
	'		</mask>\n'+
	'	</defs>\n'+
	'	<rect fill="url(#r)" width="100%" height="100%" mask="url(#m)"/>\n'+
	'</svg>';
}