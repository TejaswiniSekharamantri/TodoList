import React, { Component } from "react";
import user from "./images/user.png";
import "./App.css";
import { addToList, removeFromList } from "./action";
import store from "./store";

class App extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      text: ''
    }
  }

  handleChange = (val) => {
    this.setState({text: val});
  };
  add(text){
   store.dispatch(addToList(text));
  }
  remove(index){
    store.dispatch(removeFromList(index));
  }
  render() {
    const { list } = store.getState();
    return (
        <div className='App'>
         <div>
           <ul className='unordered-list'>
             {list.map((item, i) => <li key={i}>{item}&nbsp;&nbsp; <span onClick={this.remove.bind(this, i)}>
               &#10539;
             </span></li>)}
           </ul>
           <input type="text" className="form-control" value={this.state.text} onChange={e => this.handleChange(e.target.value)}/><br/>
           <button className = "btn btn-success" onClick={this.add.bind(this, this.state.text)}>Add To List</button>&nbsp;
           {/*<button className = "btn btn-danger" onClick={this.remove.bind(this, this.state.text)}>Remove From List</button>*/}
         </div>
        </div>
    );
  }
}



export default App;
