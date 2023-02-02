import { Component } from "react";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state={
      list: ["ready", "set", "GO"],
      text: "",
    }
    this.onSubmit = this.onSubmit.bind(this);

  }

  onSubmit(e){
    e.preventDefault();
    let newList = [...this.state.list, this.state.text];
    this.setState({ 
      list: newList, 
      text: "" });
  }
  
    render() {
    return (
      <div>
        <h1>Hello World</h1>
        <ul>
        <form onSubmit={this.onSubmit}>
        <input type="text"
        id="textInput"
        className="textInput"
        value={this.state.text}
        onChange={(e)=>{
          this.setState({
            text: e.target.value
          })
        }}
        />
        <button type="submit" id="button">Add</button>
        </form>
        {this.state.list.map((element,index)=>{
          return <li key={index}>{element}</li>
        })}
        </ul>
      </div>
    );
  }
}

