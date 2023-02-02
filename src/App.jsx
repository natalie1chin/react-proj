import {useState } from "react";
import "./App.css";
import FilmsList from "./components/filmsList";

export default function App(props) {

  const [list,setList]=useState(["ready","set","GO"]);

  const [text,setText]=useState("");

  function onSubmit(e){
    e.preventDefault();
    let newList = [...list, text];
    setList(newList);
  }
  
 
    return (
      <div>
        <h1>Hello World</h1>
        <ul>
        <form onSubmit={onSubmit}>
        <input type="text"
        id="textInput"
        className="textInput"
        value={text}
        onChange={(e)=>{
          setText(e.target.value);
        }}
        />
        <button type="submit" id="button">Add</button>
        </form>
        {list.map((element,index)=>{
          return <li key={index}>{element}</li>
        })}
        </ul>
        <FilmsList />
      </div>
    );
  
}

