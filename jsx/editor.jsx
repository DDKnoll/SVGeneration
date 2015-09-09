
typeof(SVGeneration) == "undefined" && (SVGeneration = {});
SVGeneration.Editor = React.createClass({
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
    style = style + this.state.image.cssRules;
    style = style + " background-image:"+this.dataURI()+";"
    node.setAttribute('style',style);
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
    var topPadding = this.state.windowHeight - 64 - 164;
    if(this.state.image && this.state.script){
      img = (<div className="target-wrap" dangerouslySetInnerHTML={{__html: this.renderSVG()}}></div>);
      this.generate();
      inner = (
        <div>
          <div className="description">
            <h1 className='image-title'>{this.state.image.title}</h1>
            <p className='image-description'>{this.state.image.instructions}</p>
          </div>
          <SVGeneration.TabBar navigate={this.navigate} active={this.state.active}/>
          <SVGeneration.Tabs image={this.state.image} active={this.state.active}  style={{height: this.state.windowHeight-128}}/>
        </div>
      )
      var style = {
        paddingTop: topPadding,
        opacity: 1,
      }
    } else {
      inner = (<div>
              Loading Data
            </div>);
      var style = {paddingTop: topPadding, opacity: 0};
    }
    return (
      <div className="editor" style={style}>
        {img}
        <div className="editor-controls">
          {inner}
        </div>
      </div>
    );
  }
});

SVGeneration.TabBar = React.createClass({
  renderTab: function(label){
    var baseClass = "pure-u-1-3 tab";
    return <a onClick={this.navigate(label)} className={this.props.active == label ? ' active '+baseClass : baseClass} >{label}</a>
  },
  navigate: function(label){
    return function(){
      this.props.navigate(label);
    }.bind(this);
  },
  render: function(){
    return (
      <div className="tab-bar pure-g">
        {this.renderTab('Parameters')}
        {this.renderTab('Source Code')}
        {this.renderTab('Export')}
      </div>
    );
  }
});

SVGeneration.Tabs = React.createClass({
  render: function(){
    var inner = '';
    if (this.props.active == 'Parameters') {
      inner = <SVGeneration.ParamsTab />
    } else if (this.props.active == 'Source Code') {
      inner = <SVGeneration.SourceTab />
    } else {
      inner = <SVGeneration.ExportTab />
    }
    return (
      <div style={this.props.style} className="inner-tab">
        {inner}
      </div>
    )
  }
});

SVGeneration.ParamsTab = React.createClass({
  render: function(){
    return (
      <div className="">
        Params
      </div>
    );
  }
});

SVGeneration.SourceTab = React.createClass({
  render: function(){
    return (
      <div className="">
        Source
      </div>
    );
  }
});

SVGeneration.ExportTab = React.createClass({
  render: function(){
    return (
      <div className="">
        Export
      </div>
    );
  }
});

SVGeneration.IntegerSlider = React.createClass({
  render: function(){
    return
  }
});

SVGeneration.ColorPicker = React.createClass({
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