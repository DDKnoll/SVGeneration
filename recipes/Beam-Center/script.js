function generate(inputArray){
  var beam = inputArray['beam'];
  var shade = inputArray['shade'];
  var x = inputArray['x'];
  var y = inputArray['y'];
  var weight = .1;
  var count = 18;
  var angleInterval = 360/count;

  var output = `
  <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
    <rect width='1000%' height='1000%' fill='#fff'/>
    <rect width='100%' height='100%' fill='#${ beam }'/>
    <svg x='${ x }%' y='${ y }%' overflow='visible'>
`
  for(var i = 1; i <= count; i++){
    output += "      <rect width='2000%' height='2000%' fill-opacity='"+weight+"' fill='#"+shade+"' transform='rotate("+(angleInterval*i)+")'/>\n"
  }
  output += `
    </svg>
  </svg>`;

  return output;
}