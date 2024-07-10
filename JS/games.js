import { Ui } from "./ui.js"
import { Details } from "./details.js"

export class Games{
  constructor(){
    this.getGames("mmorpg")
    document.querySelectorAll(".navbar ul li a").forEach((link) => {
      link.addEventListener("click",(e) => {
        document.querySelector(".navbar ul li .active").classList.remove("active")
        e.target.classList.add("active")
        this.getGames(e.target.dataset.category);
      })
    })
    this.ui = new Ui();
  }
  async getGames(category){
    let loading = document.querySelector(".loading")
    loading.classList.remove("d-none")

    const options = {
      method: 'GET',
      headers: {
        'x-rapidapi-key': 'ea94114b47mshcfadfba45f24051p10eb11jsn9f6673da480e',
        'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com'
      }
    };


let api= await fetch(`https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,options)

let response = await api.json()

this.ui.displayGames(response)
this.stratEvent()

loading.classList.add("d-none")




  }

  stratEvent(){
    document.querySelectorAll(".game-card").forEach((item)=>{
      item.addEventListener("click",()=>{
        const id = item.dataset.id
        this.showDetails(id)
      })
    })
  }

  showDetails(gameId){
    let details = new Details(gameId)
    document.querySelector(".home").classList.add("d-none")
      document.querySelector(".details").classList.remove("d-none")
      
  }

}


