
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
    node.setAttribute('class', 'svg-target');
    var style = "background-color: #"+(this.state.image.bgColor ? this.state.currentParameters[this.state.image.bgColor] : 'ffffff')+';';
    style = style + (!!this.state.image.cssRules ? this.state.image.cssRules : '');
    style = style + " background-image:"+this.dataURI()+";"
    node.setAttribute('style',style);
    var tmp = document.createElement("div");
    tmp.appendChild(node);
    return tmp.innerHTML;
  },
  loadData: function(){
    $.ajax({
      url: './config.json',
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
      url: './script.js',
      type: 'get',
      success: function (data) {
        this.setState({script: data});
      }.bind(this)
    });
  },
  navigate: function(active){
    this.setState({active: active})
  },
  setParam: function(key, value){
    var newParams = this.state.currentParameters;
    newParams[key] = value;
    this.setState({currentParameters: newParams});
  },
  generate: function(){
    var params = [];
    for(var key in this.state.currentParameters){
      params.push('params["'+key+'"] = "' + this.state.currentParameters[key] +  "\";\n ")
    }
    params = params.join('');
    var script = "(function(){\n"
                  + 'var params = {};'
                  + params
                  + this.state.script
                  + "\n return generate(params); \n"
                  + '})();'
    console.log(eval(script));
    return eval(script);
  },
  render: function() {
    var inner;
    var img;
    var topPadding = this.state.windowHeight - 64 - 256;
    if(this.state.image && this.state.script){
      img = (React.createElement("div", {className: "target-wrap", dangerouslySetInnerHTML: {__html: this.renderSVG()}}));
      this.generate();
      inner = (
        React.createElement("div", null, 
          React.createElement("div", {className: "description"}, 
            React.createElement("h1", {className: "image-title"}, this.state.image.title), 
            React.createElement("p", {className: "image-description", dangerouslySetInnerHTML: {__html:this.state.image.instructions}})
          ), 
          React.createElement(SVGeneration.TabBar, {navigate: this.navigate, active: this.state.active}), 
          React.createElement(SVGeneration.Tabs, {setParam: this.setParam, image: this.state.image, active: this.state.active, style: {height: this.state.windowHeight-128}})
        )
      )
      var style = {
        paddingTop: topPadding,
        opacity: 1,
      }
    } else {
      inner = (
        React.createElement("div", null, 
          "Loading Data"
        )
      );
      var style = {paddingTop: topPadding, opacity: 0};
    }
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
      inner = React.createElement(SVGeneration.ParamsTab, {setParam: this.props.setParam, image: this.props.image})
    } else if (this.props.active == 'Source Code') {
      inner = React.createElement(SVGeneration.SourceTab, {image: this.props.image})
    } else {
      inner = React.createElement(SVGeneration.ExportTab, {image: this.props.image})
    }
    return (
      React.createElement("div", {style: this.props.style, className: "inner-tab"}, 
        inner
      )
    )
  }
});

SVGeneration.ParamsTab = React.createClass({displayName: "ParamsTab",
  renderParam: function(param){
    var props = {
      param: param,
      setParam: this.props.setParam
    }
    if(param.type == 'int'){
      return React.createElement(SVGeneration.IntegerSlider, React.__spread({},  props))
    } else if(param.type == 'color'){
      return React.createElement(SVGeneration.ColorPicker, React.__spread({},  props))
    } else {
      return React.createElement("input", null)
    }
  },
  render: function(){
    return (
      React.createElement("div", {className: "params"}, 
        
          this.props.image.parameters.map(this.renderParam)
        
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
  componentDidMount: function() {
    var step = 10;
     if (this.props.param.max - this.props.param.min < 5){
      step = .01;
    } else if (this.props.param.max - this.props.param.min < 10) {
      step = .1;
    } else if (this.props.param.max - this.props.param.min < 100){
      step = 1;
    }
    var options = {
      min: this.props.param.min,
      max: this.props.param.max,
      step: step,
      value: this.props.param.default,
      slide: function(event, ui){
        this.props.setParam(this.props.param.name, ui.value);
      }.bind(this),
    };
    console.log(options)
    $(React.findDOMNode(this.refs.slider)).slider(options);
  },
  render: function(){
    return (
      React.createElement("div", {className: "param-control"}, 
        React.createElement("label", {htmlFor: "param-" + this.props.param.name}, this.props.param.name), 
        React.createElement("div", null, 
          React.createElement("input", {id: "param-" + this.props.param.name, value: this.props.param.value}), 
          React.createElement("div", {className: "slider", ref: "slider"})
        )
      )
    )
  }
});

SVGeneration.ColorPicker = React.createClass({displayName: "ColorPicker",
  render: function(){
    return (
      React.createElement("div", {className: "param-control"}, 
        React.createElement("label", {htmlFor: ""}, this.props.param.name), 
        React.createElement("div", null, 
          React.createElement("input", {id: this.props.param.name, value: this.props.param.value}), 
          React.createElement("div", {ref: "color-picker"})
        )
      )
    )
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