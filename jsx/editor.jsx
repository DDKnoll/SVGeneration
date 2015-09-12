
typeof(SVGeneration) == "undefined" && (SVGeneration = {});

SVGeneration.Editor = React.createClass({
  getInitialState: function() {
    return {
      active: 'Parameters',
      image: false,
      script: false,
      windowHeight: $(window).height(),
      currentParameters: [],
      showMore: false,
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
  getSvgCss: function(){
    var style = "background-color: #"+(this.state.image.bgColor ? this.state.currentParameters[this.state.image.bgColor] : 'ffffff')+";\n";
    style = style + (!!this.state.image.cssRules ? this.state.image.cssRules+"\n" : '');
    return style + "background-image:"+this.dataURI()+";" 
  },
  renderSVG: function(){
    var node = document.createElement('div');
    node.setAttribute('class', 'svg-target');
    node.setAttribute('style',this.getSvgCss());
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
  setScript: function(value){
    this.setState({script: value});
  },
  setParam: function(key, value){
    var newParams = this.state.currentParameters;
    newParams[key] = value;
    this.setState({currentParameters: newParams});
  },
  toggleMore: function(){
    this.setState({showMore: !this.state.showMore});
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
    return eval(script);
  },
  render: function() {
    var inner;
    var img;
    var topPadding = this.state.windowHeight - 64 - 256;
    if(this.state.image && this.state.script){
      img = (<div className="target-wrap" dangerouslySetInnerHTML={{__html: this.renderSVG()}}></div>);
      this.generate();
      inner = (
        <div>
          <div className="description">
            <h1 className='image-title'>{this.state.image.title}</h1>
            <a onClick={this.toggleMore} className="show-more">Show {this.state.showMore ? "Less" : "More"}</a>
            <p className={ this.state.showMore ? "image-description visible" : 'image-description'} dangerouslySetInnerHTML={{__html:this.state.image.instructions}} />
          </div>
          <SVGeneration.TabBar navigate={this.navigate} active={this.state.active}/>
          <SVGeneration.Tabs setParam={this.setParam} currentParameters={this.state.currentParameters} image={this.state.image} active={this.state.active} getSvgCss={this.getSvgCss} script={this.state.script} setScript={this.setScript} style={{height: this.state.windowHeight-128}}/>
        </div>
      )
      var style = {
        paddingTop: topPadding,
        opacity: 1,
      }
    } else {
      inner = (
        <div>
          Loading Data
        </div>
      );
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
      inner = <SVGeneration.ParamsTab {... this.props} />
    } else if (this.props.active == 'Source Code') {
      inner = <SVGeneration.SourceTab {... this.props} />
    } else {
      inner = <SVGeneration.ExportTab {... this.props} />
    }
    return (
      <div style={this.props.style} className="inner-tab">
        {inner}
      </div>
    )
  }
});

SVGeneration.ParamsTab = React.createClass({
  renderParam: function(param){
    if(param.type == 'int'){
      return <SVGeneration.IntegerSlider key={'param-'+param.name} {... this.props} param={param} />
    } if(param.type == 'percent'){
      return <SVGeneration.IntegerSlider type="percent" key={'param-'+param.name} {... this.props} param={param} />
    } else if(param.type == 'color'){
      return <SVGeneration.ColorPicker key={'param-'+param.name} {... this.props} param={param} />
    } else {
      return <input key={'param-'+param.name}/>
    }
  },
  render: function(){
    return (
      <div className="params">
        {
          this.props.image.parameters.map(this.renderParam)
        }
      </div>
    );
  }
});

SVGeneration.SourceTab = React.createClass({
  componentDidMount: function() {
    this.editor = ace.edit('ace-editor');
    this.editor.setTheme("ace/theme/monokai");
    this.editor.getSession().setMode("ace/mode/javascript");
  },
  editor: undefined,
  render: function(){
    return (
      <div className="source-tab">
        <div ref='editor' id='ace-editor'>
          {this.props.script}
        </div>
      </div>
    );
  }
});

SVGeneration.ExportTab = React.createClass({
  render: function(){
    return (
      <div className="">
        <pre>
          {this.props.getSvgCss()}
        </pre>
      </div>
    );
  }
});

SVGeneration.IntegerSlider = React.createClass({
  componentDidMount: function() {
    var step = 10;
     if (this.props.param.max - this.props.param.min < 5){
      step = .01;
    } else if (this.props.param.max - this.props.param.min < 10) {
      step = .1;
    } else if (this.props.param.max - this.props.param.min < 100){
      step = 1;
    }
    $(React.findDOMNode(this.refs.slider)).slider({
      min: this.props.param.min,
      max: this.props.param.max,
      step: step,
      value: this.props.currentParameters[this.props.param.name],
      slide: function(event, ui){
        this.props.setParam(this.props.param.name, ui.value);
      }.bind(this),
    });
  },
  render: function(){
    var value = this.props.currentParameters[this.props.param.name];
    if(this.props.type && this.props.type.toLowerCase() == 'percent'){
      value = value + "%";
    }
    return (
      <div className='param-control'>
        <label htmlFor={"param-" + this.props.param.name}>{this.props.param.name}</label>
        <div className='input-control'>
          <input id={"param-" + this.props.param.name} value={value} />
          <div className='slider' ref='slider' />
        </div>
      </div>
    )
  }
});

SVGeneration.ColorPicker = React.createClass({
  componentDidMount: function() {
    $(React.findDOMNode(this.refs.colorPicker)).spectrum({
      showInput: true,
      allowEmpty: false,
      preferredFormat:  "hex",
      change: function(color) {
        this.props.setParam(this.props.param.name, color.toHexString().replace('#',''));
      }.bind(this),
      move: function(color) {
        this.props.setParam(this.props.param.name, color.toHexString().replace('#',''));
      }.bind(this)
    });
  },
  render: function(){
    return (
      <div className='param-control'>
        <label htmlFor={"param-"+this.props.param.name}>{this.props.param.name}</label>
        <div className='input-control'>
          <input ref='colorPickerInput' id={"param-"+this.props.param.name} value={"#" + this.props.currentParameters[this.props.param.name]} />
          <input ref='colorPicker' id={"param-"+this.props.param.name} value={"#" + this.props.currentParameters[this.props.param.name]} />
        </div>
      </div>
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