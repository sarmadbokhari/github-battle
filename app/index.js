var React = require('react');
var ReactDOM = require('react-dom');
require('./styles.css');

// properties a component should have:
// 1. state
// 2. lifecycle events
// 3. UI

class App extends React.Component {
  render() {
    return (
      <div>Hello react training!</div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)
