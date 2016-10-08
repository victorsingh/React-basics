/*var react = require('react');
var ReactDOM = require('react-dom');*/

var fiftyFifty = Math.random() < 0.5;

// React.createClass call begins here:
var TonightsPlan = React.createClass({
  render: function () {
    var task;
    if (fiftyFifty) {
      task = "going out WOOO"
    } else {
      task = "going to bed WOOO"
    }

    return <h1>Tonight I'm {task}</h1>;
  }
});

ReactDOM.render(
  <TonightsPlan />,
  document.getElementById('app')

);
