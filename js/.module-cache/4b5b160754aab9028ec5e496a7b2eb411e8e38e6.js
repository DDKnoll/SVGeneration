typeof(SVGeneration) == "undefined" && (SVGeneration = {});
SVGeneration.Editor = React.createClass({displayName: "Editor",

  componentDidMount: function() {
    $(window).resize(function(){
      this.setState({
        windowHeight: $(window).height()
      })
    })
  },
  render: function() {
    var topMargin = window.height - 64 - 128;
    return (
      React.createElement("div", {className: "editor", style: {marginTop: topMargin}}, 
      React.createElement(SVGeneration.TabBar, null)
      )
    );
  }
});

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