const data=[
    {
       image :"https://m.media-amazon.com/images/M/MV5BNGZlNTFlOWMtMzUwNC00ZDdhLTk0MWUtOGZjYzFlOTBmNDdhXkEyXkFqcGdeQXVyMTUyNjIwMDEw._V1_.jpg",
       title: "pushpa2",
       rating: 5,

    },
    {
        image :"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/K.G.F_Chapter_1_poster.jpg/220px-K.G.F_Chapter_1_poster.jpg",
        title: "KGF",
        rating:5,
 
     },
     {
        image :"https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/K.G.F_Chapter_2.jpg/220px-K.G.F_Chapter_2.jpg",
        title :"KGF 2",
        rating:5,
 
     },
     {
        image :"https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/K.G.F_Chapter_1_poster.jpg/220px-K.G.F_Chapter_1_poster.jpg",
        title: "pushpa2",
        rating:5,
 
     },
     {
        image :"https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/K.G.F_Chapter_2.jpg/220px-K.G.F_Chapter_2.jpg",
        title: "pushpa2",
        rating:5,
 
     }, {
        image :"https://upload.wikimedia.org/wikipedia/en/thumb/d/d0/K.G.F_Chapter_2.jpg/220px-K.G.F_Chapter_2.jpg",
        title: "pushpa2",
        rating:5,
 
     }
]
const moviebox=document.getElementById("showmovies");
data.map((el) => {
    const div = document.createElement("div");
    const image = document.createElement("img");
    image.src = el.image;
    const movieTitle = document.createElement("h3");
    movieTitle.innerText = el.title;
    const rating = document.createElement("p");
    rating.innerText = el.rating;
    const button = document.createElement("button");
    button.innerText = "Click Movie";
    button.addEventListener("click", () => {
        alert(`You clicked on ${el.title}`);
    });
    div.append(image, movieTitle, rating, button);
    moviebox.append(div);


});