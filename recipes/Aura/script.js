function generate(inputArray){
  var background = inputArray['background'];
  var seed = inputArray['seed'];
  var size = inputArray['size'];
  var octaves = inputArray['octaves'];
  size = size/10000;

  return `
  <svg xmlns='http://www.w3.org/2000/svg' version='1.1' width='1' height='100%' id='svg2'>
    <defs id='defs4'>
      <filter x='-1' y='-1' width='2' height='2' color-interpolation-filters='sRGB' id='filter3001'>
        <feTurbulence type='fractalNoise' seed='${ seed }' baseFrequency='0 ${ size }' numOctaves='${ octaves }' result='result5' id='feTurbulence3007' />
      </filter>
    </defs>
    <rect height='102%' width='100%' style='filter:url(#filter3001)' />
  </svg>`;
}