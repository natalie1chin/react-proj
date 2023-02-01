import { Component, useEffect } from "react";

export default function FilmsList () {

  const[list,setList]=useState([]);


  function getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        res.json()
    })
      .then((data) => {
        setList(data);
    })
      .catch((err) => console.error(err));
  }

  useEffect(()=>{
    getFilms();
  },[]);


    return (
      <ul className="tiles">
        {list.length!=0&&list.map((film) =>{
          return(
            <li key={film.id}>
                <h2>{film.title}</h2>
                <a href={`${film.movie_banner}`}>
                  <img src={`${film.image}`} alt="Film Poster"/>
                </a>
            </li>
          );
        })}
        {list.length==0&& <p className="loading">Loading</p>}
      </ul>
    );
  
}

