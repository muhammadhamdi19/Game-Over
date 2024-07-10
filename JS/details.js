import { Ui } from "./ui.js";

export class Details{
  constructor(id){
    this.ui = new Ui();

     let closeBtn = document.querySelector(".close")

    closeBtn.addEventListener("click", () => {
      document.querySelector(".home").classList.remove("d-none")
      document.querySelector(".details").classList.add("d-none")
      
    })
    this.showDetail(id)
  }
  async showDetail(gameId){
    let loading = document.querySelector(".loading")
    loading.classList.remove("d-none")

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'ea94114b47mshcfadfba45f24051p10eb11jsn9f6673da480e',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };
    

    let detailApi = await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/game?id=${gameId}`,options)
    let detailResponse = await detailApi.json()

    this.ui.displayDetails(detailResponse)
    
    loading.classList.add("d-none")
}
}

