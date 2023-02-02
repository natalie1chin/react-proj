import {useEffect, useState } from "react";

export default function FilmsList(props){

    const [list,setList]=useState([]);
    function getFilms(){
        fetch(`https://studioghibliapi-d6fc8.web.app/films`)
        .then((res)=> res.json()
        )
        .then((data)=>{
            console.log(data);
            setList(data);
        })
        .catch((err)=>console.error(err));
    }



    useEffect(()=>{
        getFilms();
    },[]);

    //Lifecycle Method 1
    
        return(
            <ul>
                {list.map((element,index,array)=> {
                    return <li key={element.id}>{element.title}</li>
                })}
            </ul>
        )
    
}