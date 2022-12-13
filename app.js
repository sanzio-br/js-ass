const container = document.getElementById("card");
const menu = document.getElementById("films");
// const list = document.createElement("li")
// const card = 
const films = document.getElementById("movie")
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

// const getSingleMovie = async()=>{
//     try {
//         const Id = Number(window.location.hash.substr(1))
//         const data = await Data.find(item => item.id === Id)
//         const movie = `
//         <h2>Title : ${data.title} </h2>
//         <div class="body">
//         <p>Description : ${data.description}</p>
//         <p>Available tickets : ${data.capacity - data.tickets_sold}</p>
//         <div class="btns">
//         <button class="buy">Buy</button>
//         <!-- <div class="delete"></div> -->
//         </div>
//         </div>
//         `
//         films.innerHTML = movie
//     } catch (error) {
//         console.log(error);
//     }
// }

const getSingle = () => {
    const Id = Number(window.location.hash.substr(1))
    let movie;
    const URL = `http://localhost:8000/films/${Id}`
    fetch(URL).then(res => res.json).then(data => {
         data.map(({title, description, tickets_sold, capacity})=>{
            movie += `
        <div>
        <h2>Title : ${title} </h2>
        <div class="body">
        <p>Description : ${description}</p>
        <p>Available tickets : ${capacity - tickets_sold}</p>
        <div class="btns">
        <button class="buy">Buy</button>
        <!-- <div class="delete"></div> -->
        </div>
        </div>
        </div>`
         })
        
        films.innerHTML = movie
    })
}

getMovieBtn.forEach(element => {
    element.addEventListener('click', () => {
        // getSingle();
        alert("wahh")
    })
});

// console.log(getMovieBtn[id]);

