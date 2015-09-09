typeof(SVGeneration) == "undefined" && (SVGeneration = {});
SVGeneration.Editor = React.createClass({displayName: "Editor",
    getInitialState: function() {
    return {
      active: 'Parameters',
      windowHeight: $(window).height() 
    };
  },
  componentDidMount: function() {
    $(window).resize(function(){
      this.setState({
        windowHeight: $(window).height()
      })
    })
  },
  navigate: function(active){
    this.setState(active)
  },
  render: function() {
    var topPadding = this.state.windowHeight - 64 - 164;
    return (
      React.createElement("div", {className: "editor", style: {paddingTop: topPadding}}, 
        React.createElement("div", {className: "editor-controls"}, 
          React.createElement("h1", {className: "image-title"}, "Stripes"), 
          React.createElement(SVGeneration.TabBar, {navigate: this.navigate, active: this.state.active}), 
          React.createElement(SVGeneration.Tabs, {active: this.state.active})
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
    if (this.props.active='Parameters') {
      inner = React.createElement(SVGeneration.ParamsTab, null)
    } else if (this.props.active='Source') {
      inner = React.createElement(SVGeneration.SourceTab, null)
    } else {
      inner = React.createElement(SVGeneration.ExportTab, null)
    }
    return (
      React.createElement("div", {className: "inner-tab"}, 
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
        "Params"
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