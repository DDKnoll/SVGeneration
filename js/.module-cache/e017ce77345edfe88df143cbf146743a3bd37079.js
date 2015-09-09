if(!SVGeneration) var SVGeneration = {};

SVGeneration.Navbar = React.createClass({displayName: "Navbar",
  render: function() {
    return (
      React.createElement("nav", {id: "title"}, 
        React.createElement("a", {class: "logo-link", class: "title-link", href: "/"}, React.createElement("img", {src: "/images/brush_wrench_leaves.svg", id: "logo", type: "image/svg+xml"})), 
        React.createElement("ul", {class: "nav"}, 
          React.createElement("li", {class: "nav"}, React.createElement("a", {href: "/contribute.html"}, React.createElement("i", {class: "icon-github"}))), 
          React.createElement("li", {class: "nav"}, React.createElement("a", {href: "/about.html"}, React.createElement("i", {class: "icon-help"}))), 
          React.createElement("li", {class: "nav"}, React.createElement("a", {href: "/"}, React.createElement("i", {class: "icon-th"}))), 
          React.createElement("div", {id: "mobile-menu-button"}, React.createElement("i", {class: "icon-menu"}))
        )
      )
    );
  }
});