typeof(SVGeneration) == "undefined" && (SVGeneration = {});

//run on page ready with jquery
$(function(){
  var camelVar = function(s) {
    return s.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
  };

  var camelHash = function(d) {
    data = {}

    $.each(d, function(key, val) {
      data[camelVar(key)] = val;
    });

    return data;
  };

  window.react = {}

  $(".react-element").each(function() {
    var data = $(this).data();
  
    var componentName = $(this).attr("data-react-component").split('.');
    var component = window;
    for (var i = 0; i < componentName.length; i++) {
      component = component[componentName[i]];
    }; // "Showyou.ProgressPanel" -> window["Showyou"]["ProgressPanel"]
    if(component == undefined || component == window){
      throw new Error('Invalid component name: '+componentName);
    }

    window.react[camelVar($(this).attr("id"))] = React.render(
      React.createElement(component, data), this);
  });
});