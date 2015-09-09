
typeof(SVGeneration) == "undefined" && (SVGeneration = {});
SVGeneration.Editor = React.createClass({displayName: "Editor",
  getInitialState: function() {
    return {
      active: 'Parameters',
      image: false,
      script: false,
      windowHeight: $(window).height(),
      currentParameters: []
    };
  },
  componentDidMount: function() {
    this.loadData();
    $(window).resize(function(){
      this.setState({
        windowHeight: $(window).height()
      })
    }.bind(this))
  },
  dataURI: function(){
    return "url(data:image/svg+xml;base64," + window.btoa(this.generate()) + ")";
  },
  renderSVG: function(){
    var node = document.createElement('div');
    node.setAttribute('style', "background-image:"+this.dataURI()+";");
    var tmp = document.createElement("div");
    tmp.appendChild(node);
    return tmp.innerHTML;
  },
  loadData: function(){
    var img = (/[\?\&]img=(.*)\&?/g).exec(window.location.search)[1];
    $.ajax({
      url: '/recipes/'+img+'/config.json',
      type: 'get',
      success: function (data) {
        var currentParameters = {};
        for (var i = data.parameters.length - 1; i >= 0; i--) {
          currentParameters[data.parameters[i].name] = data.parameters[i].default;
        };
        this.setState({
          image: data,
          currentParameters: currentParameters
        });
      }.bind(this)
    });
    $.ajax({
      url: '/recipes/'+img+'/script.js',
      type: 'get',
      success: function (data) {
        this.setState({script: data});
      }.bind(this)
    });
  },
  navigate: function(active){
    this.setState({active: active})
  },
  generate: function(){
    var script = "(function(){\n"
                  + 'var params = {};'
                  + this.state.currentParameters.map(function(param){return ' params["'+param.name+'"] = "' + param.value +  "\";\n " }).join('')
                  + this.state.script
                  + "\n return generate(params); \n"
                  + '})();'
    return (eval(script));
  },
  render: function() {
    var inner;
    var img;
    if(this.state.image && this.state.script){
      // img = (<div dangerouslySetInnerHTML={{__html: this.renderSVG()}}></div>);
      this.generate();
      inner = (
        React.createElement("div", null, 
          React.createElement("div", {className: "description"}, 
            React.createElement("h1", {className: "image-title"}, this.state.image.title), 
            React.createElement("p", {className: "image-description"}, this.state.image.shortDescription)
          ), 
          React.createElement(SVGeneration.TabBar, {navigate: this.navigate, active: this.state.active}), 
          React.createElement(SVGeneration.Tabs, {image: this.state.image, active: this.state.active, style: {height: this.state.windowHeight-128}})
        )
      )
    } else {
      React.createElement("div", null, 
        "Loading Data"
      )
    }
    var topPadding = this.state.windowHeight - 64 - 164;
    var style = (this.state.image && this.state.script
                  ? 
                  {
                    paddingTop: topPadding,
                    backgroundImage: this.dataURI(),
                    opacity: 1,
                    backgroundColor: "#"+(this.state.image.bgColor ? this.state.currentParameters.find(function(el){return el.name == this.state.image.bgColor}.bind(this)).default : '#ffffff')
                  }
                  : {paddingTop: topPadding, opacity: 0}
                );
    console.log(style);
    return (
      React.createElement("div", {className: "editor", style: style}, 
        img, 
        React.createElement("div", {className: "editor-controls"}, 
          inner
        )
      )
    );
  }
});

SVGeneration.TabBar = React.createClass({displayName: "TabBar",
  renderTab: function(label){
    var baseClass = "pure-u-1-3 tab";
    return React.createElement("a", {onClick: this.navigate(label), className: this.props.active == label ? ' active '+baseClass : baseClass}, label)
  },
  navigate: function(label){
    return function(){
      this.props.navigate(label);
    }.bind(this);
  },
  render: function(){
    return (
      React.createElement("div", {className: "tab-bar pure-g"}, 
        this.renderTab('Parameters'), 
        this.renderTab('Source Code'), 
        this.renderTab('Export')
      )
    );
  }
});

SVGeneration.Tabs = React.createClass({displayName: "Tabs",
  render: function(){
    var inner = '';
    if (this.props.active == 'Parameters') {
      inner = React.createElement(SVGeneration.ParamsTab, null)
    } else if (this.props.active == 'Source Code') {
      inner = React.createElement(SVGeneration.SourceTab, null)
    } else {
      inner = React.createElement(SVGeneration.ExportTab, null)
    }
    return (
      React.createElement("div", {style: this.props.style, className: "inner-tab"}, 
        inner
      )
    )
  }
});

SVGeneration.ParamsTab = React.createClass({displayName: "ParamsTab",
  render: function(){
    return (
      React.createElement("div", {className: ""}, 
        "Params"
      )
    );
  }
});

SVGeneration.SourceTab = React.createClass({displayName: "SourceTab",
  render: function(){
    return (
      React.createElement("div", {className: ""}, 
        "Source"
      )
    );
  }
});

SVGeneration.ExportTab = React.createClass({displayName: "ExportTab",
  render: function(){
    return (
      React.createElement("div", {className: ""}, 
        "Export"
      )
    );
  }
});

SVGeneration.IntegerSlider = React.createClass({displayName: "IntegerSlider",
  render: function(){
    return
  }
});

SVGeneration.ColorPicker = React.createClass({displayName: "ColorPicker",
  render: function(){
    return
  }
})

//Just polyfill the Array.find method if it doesn't exist
if (!Array.prototype.find) {
  Array.prototype.find = function(predicate) {
    if (this === null) {
      throw new TypeError('Array.prototype.find called on null or undefined');
    }
    if (typeof predicate !== 'function') {
      throw new TypeError('predicate must be a function');
    }
    var list = Object(this);
    var length = list.length >>> 0;
    var thisArg = arguments[1];
    var value;

    for (var i = 0; i < length; i++) {
      value = list[i];
      if (predicate.call(thisArg, value, i, list)) {
        return value;
      }
    }
    return undefined;
  };
}