typeof(SVGeneration) == "undefined" && (SVGeneration = {});
typeof(SVGeneration.Icons) == "undefined" && (SVGeneration.Icons = {});

SVGeneration.Navbar = React.createClass({displayName: "Navbar",
  render: function() {
    return (
      React.createElement("nav", {id: "title"}, 
        React.createElement("a", {className: "logo-link", class: "title-link", href: "/"}, 
          React.createElement("img", {src: "/images/brush_wrench_leaves.svg", id: "logo", type: "image/svg+xml"})
        ), 
        React.createElement("a", {id: "mobile-menu-button"}, 
          React.createElement(SVGeneration.Icons.Squares, null)
        )
      )
    );
  }
});

SVGeneration.Icons.Squares = React.createClass({displayName: "Squares",
  render: function() {
    return (
    React.createElement("svg", {width: "34px", height: "34px", viewBox: "-1 -1 36 36", version: "1.1", xmlns: "http://www.w3.org/2000/svg"}, 
      React.createElement("g", {"stroke-width": "2", stroke: "#4958B2", fill: "transparent"}, 
        React.createElement("rect", {x: "0", y: "0", width: "8", height: "8"}), 
        React.createElement("rect", {x: "12.8447546", y: "0", width: "8", height: "8"}), 
        React.createElement("rect", {x: "25.6895093", y: "0", width: "8", height: "8"}), 
        React.createElement("rect", {x: "0", y: "12.8447546", width: "8", height: "8"}), 
        React.createElement("rect", {x: "12.8447546", y: "12.8447546", width: "8", height: "8"}), 
        React.createElement("rect", {x: "25.6895093", y: "12.8447546", width: "8", height: "8"}), 
        React.createElement("rect", {x: "0", y: "25.6895093", width: "8", height: "8"}), 
        React.createElement("rect", {x: "12.8447546", y: "25.6895093", width: "8", height: "8"}), 
        React.createElement("rect", {x: "25.6895093", y: "25.6895093", width: "8", height: "8"})
      )
    )
    );
  }
})