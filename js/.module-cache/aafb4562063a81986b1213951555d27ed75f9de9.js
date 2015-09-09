define('react', function(){
  return React.createClass({
    render: function() {
      return (
        React.createElement("div", null, "Hello World!")
      );
    }
  });
})