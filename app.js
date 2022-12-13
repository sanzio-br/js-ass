

const container = document.getElementById("card");
const menu = document.getElementById("films");
// const list = document.createElement("li")
// const card = 
const films = document.getElementById("movies")
const getMovieBtn = document.querySelectorAll("#getMovieBtn")
let Data;

const getMovies = async () => {
    try {
        const res = await axios.get("http://localhost:8000/films")
        const data = res.data
        Data = res.data
        let movieArray;
        data.map((item) => {
            movieArray += `
            <li class= "menu-item"> 
            <button id="getMovieBtn" >
            <a href="#${item.id}">
            ${item.title}</a></button> </li>
            `
        })
        menu.innerHTML = movieArray
    } catch (error) {
        console.log(error);
    }
}
getMovies();


const getSingle = async () => {
    const Id = Number(window.location.hash.substr(1))
    let movie;
    const URL = `http://localhost:8000/films/${Id}`
    const res = await axios.get(URL)
    const data = res.data
    var store = {
        availableTickets: data.capacity - data.tickets_sold
      }
    const counter =()=>{
        store.availableTickets--
    }
    
    movie = `
        <div>
        <h2>Title : ${data.title} </h2>
        <div class="body">
        <p>Description : ${data.description}</p>
        <p id="availableTickets">Available tickets : ${store.availableTickets}</p>
        <div class="btns">
        <button class="buy" onclick = ${counter()} >Buy</button>
        <!-- <div class="delete"></div> -->
        </div>
        </div>
        </div>`
        films.innerHTML= movie
        
}

getMovieBtn.forEach(element => {
    element.addEventListener('click', () => {
        getSingle();
        alert("wahh")
        console.log(Number(window.location.hash.substr(1)));
    })
});
window.addEventListener('popstate', getSingle());


const buyTicket = async ()=>{

}
