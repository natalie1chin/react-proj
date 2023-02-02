import { Component } from "react";

export default class FilmsList extends Component{
    constructor(props){
        super(props);

        this.state={
            list:[]
        }
    }

    getFilms(){
        fetch(`https://studioghibliapi-d6fc8.web.app/films`)
        .then((res)=> res.json()
        )
        .then((data)=>{
            console.log(data);
            this.setState({
                list:data
            })
        })
        .catch((err)=>console.error(err));
    }

    //Lifecycle Method 2
    componentDidMount(){
        this.getFilms();
    }

    //Lifecycle Method 1
    render(){
        return(
            <ul>
                {this.state.list.map((element,index,array)=> {
                    return <li key={element.id}>{element.title}</li>
                })}
            </ul>
        )
    }
}