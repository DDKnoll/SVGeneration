var fs = require('fs');

var folders = fs.readdirSync('recipes');

folders = folders.filter(function(folder){
  return fs.existsSync('recipes/'+folder+'/config.json');
});

folders.map(function(el){

})
fs.writeFile('recipes/data.json', JSON.stringify(folders));
