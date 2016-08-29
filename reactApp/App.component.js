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
        {this.state.list.map((value, index) => {
          return (
            <div onClick={this.handleRemove.bind(this, index)} key={index}>{value}</div>
          )
        })}
      </div>
    )
  },
  handleRemove(removeIndex) {
    // var newArray = this.state.splice();
    // newArray.splice(index, 1);
    // this.setState({
    //   list: newArray
    // });
    // the 2nd way below is cleaner
    this.setState({
      list: this.state.list.filter((value, index) => { return index !== removeIndex })
    })
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
