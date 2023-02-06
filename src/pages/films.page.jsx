import React, { useState, useEffect } from "react";
import {filterFilmsByDirector, getListOf, getFilmStats } from '../helpers/film.helpers';
import { Link } from "react-router-dom";

export function FilmsPage() {
  const [list, setList] = useState([]);
    const [searchDirector, setSearchDirector]=useState("");

  function getFilms() {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((res) => res.json())
      .then((films) => setList(films))
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getFilms();
  }, []);

  const filmsByDirector = filterFilmsByDirector(list, searchDirector);
  const directors = getListOf(list,"director");
  let { avg_score, latest, total } = getFilmStats(filmsByDirector);
  return (
    <div>
      <h1>Studio Ghibli Films</h1>
      <form>
        <div className="form-group">
            <label htmlFor="selectDirector">Director</label>
            <select 
            name="selectDirector"
            id="selectDirector"
            value={searchDirector}
            onChange={(e)=>{
                setSearchDirector(e.target.value);
            }}
            >
                <option value="">All</option>
                {directors.map((element,index,array)=>{
                    return <option key={element+index} value={element}>{element}</option>
                })}
                </select>
            </div>
        </form>
        <div>
  <div>
    <span># Of Films</span>
    <span>{total}</span>
  </div>
  <div>
    <span>Average Rating</span>
    <span>{avg_score.toFixed(2)}</span>
  </div>
  <div>
    <span>Latest Film</span>
    <span>{latest}</span>
  </div>
</div>
      <ul>
        {filmsByDirector.map((film) => {
          return (
            <li key={film.id}>
              <Link to={`/films/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}