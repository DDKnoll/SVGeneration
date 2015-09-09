if(!SVGeneration) var SVGeneration = {};
SVGeneration.navbar = React.createClass({displayName: "navbar",

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
      React.createElement("div", {className: "editor", style: {marginTop: topMargin}}

      )
    );
  }
});

SVGeneration.TabBar = React.createClass({displayName: "TabBar",
  render: function(){
    return (
      React.createElement("div", {className: "tab-bar pure-g"}, 
        React.createElement("div", {className: "pure-u-1-3"}), 
        React.createElement("div", {className: "pure-u-1-3"}), 
        React.createElement("div", {className: "pure-u-1-3"})
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