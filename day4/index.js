fetch("http://localhost:8080/mydata", {
    method: "GET",

}).then((response)=>response.json())
.then((data)=> renerData(data));
const div=document.getElementById("show");
function renerData(data){
    data.forEach((el) => {
    const div=document.createElement("div");
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
    show.append(div);
    });
}