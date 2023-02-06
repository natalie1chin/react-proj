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

export function getFilmStats(list) {
    return list.reduce(
      (stats, film) => {
        stats.total++;
  
        stats.acc_score += Number(film.rt_score);
        stats.avg_score = stats.acc_score / stats.total;
  
        if (stats.latest == null || stats.latest < film.release_date) {
          stats.latest = film.release_date;
        }
  
        return stats;
      },
      {
        acc_score: 0,
        avg_score: 0,
        total: 0,
        latest: null,
      }
    );
  }