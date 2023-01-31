import { Component } from "react";

export default class FilmsList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  getFilms() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then((res) => {
        res.json()
    })
      .then((data) => {
        this.setState({ 
            list: data 
        })
    })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getFilms();
  }

  render() {
    return (
      <ul>
        {this.state.list.map((element) => {
          return <li key={element.id}>{element.title}</li>;
        })}
      </ul>
    );
  }
}

