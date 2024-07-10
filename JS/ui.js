export class Ui{
  displayGames(data){
    let cards = ``
    for(let i=0;i<data.length;i++){
      cards +=`<div class="col-xl-3 col-lg-4 col-md-6 ">
              <div data-id="${data[i].id}" class="game-card p-3 rounded-2 ">
                <figure>
                  <img src="${data[i].thumbnail}" alt="game thumbnail" class="w-100 rounded-2">
                </figure>
                <figcaption>
                  <div class="title-free d-flex justify-content-between align-items-center mb-3">
                    <h3>${data[i].title}</h3>
                    <span>Free</span>
                  </div>

                  <div class="sm-desc text-center mb-5">
                    <p>${data[i].short_description.split(" ",8)}</p>
                  </div>
                </figcaption>

                <footer>
                  <div class="type-platform d-flex justify-content-between">
                    <span>${data[i].genre}</span>
                    <span>${data[i].platform}</span>
                  </div>
                </footer>
              </div>
              </div>
            `
    }
    document.querySelector(".row").innerHTML=cards
  }

  displayDetails(data){

    
      let details =`<div class="col-md-4 ">
            <img src="${data.thumbnail}" alt="game thumbnail" class="w-100">
          </div>
            <div class="game-details col-md-8">
            <h3>Title: ${data.title}</h3>
            <p class="span">Category: <span>${data.genre}</span></p>
            <p class="span">Platform: <span>${data.platform}</span></p>
            <p class="span">Status: <span>${data.status}</span></p>
            <p class="mb-5">${data.description}</p>
            <a target="_blank" href="${data.game_url}" class=" text-decoration-none rounded-3  ">Show Game</a>
          </div>`
    
    document.querySelector(".show-details").innerHTML=details
  }
}
