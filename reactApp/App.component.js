import React from 'react';
import ReactDOM from 'react-dom';
var App = React.createClass({
  //render
  render() {
    return (
      <div>
        Hello World
        //normall in the braces below, you would do 2way data binding
        //but that's bad. you can just run js expressions in there.
        {{}}
      </div>
    )
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
