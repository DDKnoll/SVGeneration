typeof(SVGeneration) == "undefined" && (SVGeneration = {});
typeof(SVGeneration.Icons) == "undefined" && (SVGeneration.Icons = {});

SVGeneration.Navbar = React.createClass({displayName: "Navbar",
  render: function() {
    return (
      React.createElement("nav", {id: "title"}, 
        React.createElement("a", {className: "logo-link", class: "title-link", href: "/"}, 
          React.createElement("img", {src: "/images/brush_wrench_leaves.svg", id: "logo", type: "image/svg+xml"})
        ), 
        React.createElement("a", {id: "mobile-menu-button"}, React.createElement("img", {src: "/images/squares.svg", alt: "Browse All"}))
      )
    );
  }
});

SVGeneration.Icons.Menu = Rearct.createClass({
  render: function() {
    return (
      React.createElement("div", null)
    );
  }
})