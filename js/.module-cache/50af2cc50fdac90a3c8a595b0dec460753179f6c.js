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
    })
  },
  renderSVG: function(){
    "background-image","url(\'data:image/svg+xml," + generate(parameters)
  },
  loadData: function(){
    $.ajax({
      url: '/recipes/3d_cubes/config.json',
      type: 'get',
      success: function (data) {
        this.setState({
          image: data,
          currentParameters: data.parameters.map(function(param){
            param.value = param.default;
            return param;
          })
        });
      }.bind(this)
    });
    $.ajax({
      url: '/recipes/3d_cubes/script.js',
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
                  + "\n generate(params); \n"
                  + '})();'
    console.log(eval(script));
  },
  render: function() {
    var inner;
    if(this.state.image && this.state.script){
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
    return (
      React.createElement("div", {className: "editor", style: {paddingTop: topPadding}}, 
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