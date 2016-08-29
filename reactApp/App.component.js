import React from 'react';
import ReactDOM from 'react-dom';
var App = React.createClass({
  getInitialState(){
    return({
      item: 'item 1'
    })
  },
  render() {
    console.log('lel');
    return (
      <div>
        word 
        <input onChange={this.handleChange} />
        <button>Add</button>
      </div>
    )
  },
  handleChange(e){
    this.setState({
      currentItem: e.target.value
    })
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
