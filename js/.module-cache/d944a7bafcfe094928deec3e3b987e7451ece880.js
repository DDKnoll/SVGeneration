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
  render: function() {
    var topMargin = this.state.windowHeight - 64 - 128;
    return (
      React.createElement("div", {className: "editor", style: {marginTop: topMargin}}, 
        React.createElement(SVGeneration.TabbedEditor, null)
      )
    );
  }
});
SVGeneration.TabbedEditor = React.createClass({displayName: "TabbedEditor",
  getInitialState: function() {
    return {
      active: 'Parameters' 
    };
  },
  navigate: function(active){
    this.setState(active)
  },
  render: function() {
    return (
      React.createElement("div", {className: "editor-controls"}, 
        React.createElement(SVGeneration.TabBar, {navigate: this.navigate, active: ""}), 
        React.createElement(SVGeneration.Tabs, null)
      )
    );
  }
})
SVGeneration.TabBar = React.createClass({displayName: "TabBar",
  render: function(){
    return (
      React.createElement("div", {className: "tab-bar pure-g"}, 
        React.createElement("div", {className: "pure-u-1-3"}, "Parameters"), 
        React.createElement("div", {className: "pure-u-1-3"}, "Source Code"), 
        React.createElement("div", {className: "pure-u-1-3"}, "Export")
      )
    );
  }
});

SVGeneration.TabBar = React.createClass({displayName: "TabBar",
  render: function(){
    if (this.props.active='Parameters') {
      return React.createElement(SVGeneration.ParamsTab, null)
    } else if (this.props.active='Source') {
      return React.createElement(SVGeneration.SourceTab, null)
    } else {
      return React.createElement(SVGeneration.ExportTab, null)
    }
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