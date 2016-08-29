import React from 'react';
import ReactDOM from 'react-dom';
var App = React.createClass({
  //we're getting the initial state of our app.
  //essentially how our app starts
  getInitialState() {
    return ({
      name: 'Dan'
      tempName: '',
      list: ['1','2','3'],
    })
  },
  //render
  render() {
    return (
      <div>
        <div onClick={ function() {console.log("click")}}>
          Hello World
          {/*normall in the braces below, you would do 2way data binding
          //but that's bad. you can just run js expressions in there.
          {{}}*/}
        </div>
        <div onClick = {this.handleClick}>
          {this.state.name}
        </div>
       </div>
    )
  },
  handleClick() {
    this.setState( {
      name: 'aleeeex',
      field: tempName
    })
  }
});
ReactDOM.render(<App />, document.getElementById('app'));

//state is the data that affects your application.
//so far you've kept state in your $scope (via angular)
//In react, we'll say we have a component, and we have state.
//
//The component could have some amount of state (data) that affects it.
//In angular you would use ng-model for this.
//
//
