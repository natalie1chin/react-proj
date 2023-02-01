import { useState } from "react";
import "./App.css";
import FilmsList from '/components/filmsList';

function App(props) {
  const [list, setList] = useState(["ready", "set", "GO"]);
  const [text, setText] = useState("");

  function handleSubmit(event){
    event.preventDefault();

    setList([...list,text]);
  }

    return (
      <div>
        <h1 className="text-center">Studio Ghibli Films</h1>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          id="text"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <button type="submit">Add</button>
      </form>
      <ul>
        {list.map((listText,index) => {
          return <li key={index}>{listText}</li>;
        })}
      </ul>
      <FilmsList />
    </div>
    );
  }


export default App;