export function filterFilmsByDirector(list, director){
    console.log(director);
    if(!director){
        return list;
    }
    return list.filter((element)=>{
        return element.director==director;
    });
}

export function getListOf(list, prop){
    const resultArray=[];
    for(const element of list){
        console.log(element);
        const val = element[prop];
        if (!resultArray.includes(val)){
        resultArray.push(val);
        }
    }
    return resultArray;

}