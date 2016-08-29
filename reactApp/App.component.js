import React from 'react';
import ReactDOM from 'react-dom';
var App = React.createClass({
  getInitialState(){
    return({
      list: [],
      currentItem: '',
    })
  },
  render() {
    console.log('lel');
    return (
      <div>
        word
        <input value={this.state.currentItem} onChange={this.handleChange} />
        <button onClick={this.handleClick}>Add</button>
      </div>
    )
  },
  handleClick() {
    this.setState({
      list: this.state.list.concat([this.state.currentItem]),
      currentItem: ''
    })
  },
  handleChange(e){
    this.setState({
      currentItem: e.target.value
    })
  }
});
ReactDOM.render(<App />, document.getElementById('app'));
