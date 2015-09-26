function generate(inputArray){
  var beam = inputArray['beam'];
  var shade = inputArray['shade'];
  var weight = inputArray['weight'];
  var count = parseInt(inputArray['count']);
  var countArray = Array.from(new Array(count), (x,i) => i);
  var angleInterval = 90/count;

  var output = `
  <svg xmlns='http://www.w3.org/2000/svg' width='100%' height='100%'>
  	<rect width='100%' height='100%' fill='#${ beam }'/>
    ${
      countArray.map(
        i => `<rect width='5000%' height='2000%' fill-opacity='${ weight }' fill='#${ shade }' transform='rotate(${ angleInterval*i })'/>`
      ).join("\n    ")
    }
  </svg>`;

  return output;
}